import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ContentState = "enabled" | "previous" | "tba" | "disabled";

export type CommitteeRole =
    | "chair"
    | "treasurer"
    | "acquisition"
    | "speakers"
    | "location"
    | "promotion"
    | "internal affairs";

export interface CommitteeMember {
    name: string;
    role: CommitteeRole;
    linkedin?: string;
}

export interface Partner {
    id?: number;
    name: string;
    tagline: string;
    image: string;
    tier: "introduction" | "bronze" | "silver" | "gold" | "platinum";
    website?: string;
    description: string;
}

export interface Speaker {
    id: number;
    name: string;
    specialization: string;
    image: string;
    description: string;
    linkedin?: string;
    website?: string;
    talk?: string;
    talkUrl?: string;
}

export interface LocationImage {
    src: string;
    alt: string;
}

export interface LocationDetail {
    label: string;
    value: string;
}

export interface LocationData {
    venue: {
        name: string;
        address: string;
        website?: string;
    };
    description: string;
    details: LocationDetail[];
    images: LocationImage[];
}

export interface EventData {
    date?: string;
    startTime?: string;
    endTime?: string;
    stats?: {
        attendees: number;
        speakers: number;
        partners: number;
        workshops: number;
    };
    tickets?: {
        enabled?: boolean;
        url?: string;
    };
}

export interface ProgrammeEntry {
    title: string;
    speaker?: string;
    abstract?: string;
}

export interface ProgrammeItem {
    time: string;
    duration?: string;
    talk?: ProgrammeEntry;
    workshop?: ProgrammeEntry;
}

export interface ProgrammeSection {
    title: string;
    items: ProgrammeItem[];
}

export interface ProgrammeHost {
    host?: string;
    name: string;
    role: string;
    image: string;
    description: string;
    linkedin?: string;
    website?: string;
}

export interface ProgrammeData {
    sections: ProgrammeSection[];
    host: ProgrammeHost | null;
}

export interface SiteConfig {
    edition: {
        current: number;
        previous: number;
    };
    content: {
        event: ContentState;
        stats: ContentState;
        partners: ContentState;
        speakers: ContentState;
        programme: ContentState;
        location: ContentState;
        committee: ContentState;
    };
    acknowledgements: string[];
    pages: Record<
        string,
        {
            enabled: boolean;
            label: string;
            href: string;
        }
    >;
}

export interface YearContent<T> {
    data: T;
    year: number;
}

export interface SiteContent {
    year: number;
    event: EventData | null;
    committee: YearContent<CommitteeMember[]>;
    partners: YearContent<Partner[]>;
    speakers: YearContent<Speaker[]>;
    programme: YearContent<ProgrammeData>;
    location: YearContent<LocationData> | null;
}

export const ROLE_ORDER: CommitteeRole[] = [
    "chair",
    "treasurer",
    "acquisition",
    "speakers",
    "location",
    "promotion",
    "internal affairs",
];

function getYearPath(year: number) {
    return path.join(CONTENT_DIR, String(year));
}

function getFilePath(year: number, filename: string) {
    return path.join(getYearPath(year), filename);
}

function hasContent(year: number, filename: string) {
    return fs.existsSync(getFilePath(year, filename));
}

function readContent(year: number, filename: string) {
    const file = getFilePath(year, filename);

    if (!fs.existsSync(file)) {
        throw new Error(`Missing content file: ${year}/${filename}`);
    }

    return matter(fs.readFileSync(file, "utf8")).data;
}

function getContentYear(state: ContentState, config: SiteConfig) {
    return state === "previous"
        ? config.edition.previous
        : config.edition.current;
}

function shouldLoadContent(state: ContentState) {
    return state === "enabled" || state === "previous";
}

export function getConfig(): SiteConfig {
    const file = path.join(CONTENT_DIR, "config.md");
    const { data } = matter(fs.readFileSync(file, "utf8"));

    return data as SiteConfig;
}

export function getEvent(year: number): EventData | null {
    if (!hasContent(year, "event.md")) return null;

    const data = readContent(year, "event.md");

    if (!data.event) {
        throw new Error(`Invalid event.md for ${year}: missing "event"`);
    }

    return data.event as EventData;
}

export function getCommittee(year: number): CommitteeMember[] {
    if (!hasContent(year, "committee.md")) return [];

    const data = readContent(year, "committee.md");

    if (!Array.isArray(data.members)) {
        throw new Error(`Invalid committee.md for ${year}: missing "members"`);
    }

    return data.members as CommitteeMember[];
}

export function getPartners(year: number): Partner[] {
    if (!hasContent(year, "partners.md")) return [];

    const data = readContent(year, "partners.md");

    if (!Array.isArray(data.partners)) {
        throw new Error(`Invalid partners.md for ${year}: missing "partners"`);
    }

    return data.partners as Partner[];
}

export function getSpeakers(year: number): Speaker[] {
    if (!hasContent(year, "speakers.md")) return [];

    const data = readContent(year, "speakers.md");

    if (!Array.isArray(data.speakers)) {
        throw new Error(`Invalid speakers.md for ${year}: missing "speakers"`);
    }

    return data.speakers as Speaker[];
}

export function getProgramme(year: number): ProgrammeData {
    if (!hasContent(year, "programme.md")) {
        return {
            sections: [],
            host: null,
        };
    }

    const data = readContent(year, "programme.md");

    if (!Array.isArray(data.sections)) {
        throw new Error(`Invalid programme.md for ${year}: missing "sections"`);
    }

    return {
        sections: data.sections as ProgrammeSection[],
        host: (data.host ?? data.hostOfDay ?? null) as ProgrammeHost | null,
    };
}

export function getLocation(year: number): LocationData | null {
    if (!hasContent(year, "location.md")) return null;

    const data = readContent(year, "location.md");

    if (!data.location) {
        throw new Error(`Invalid location.md for ${year}: missing "location"`);
    }

    return data.location as LocationData;
}

export function getSiteContent(): SiteContent {
    const config = getConfig();

    const eventYear = getContentYear(config.content.event, config);
    const committeeYear = getContentYear(config.content.committee, config);
    const partnersYear = getContentYear(config.content.partners, config);
    const speakersYear = getContentYear(config.content.speakers, config);
    const programmeYear = getContentYear(config.content.programme, config);
    const locationYear = getContentYear(config.content.location, config);

    const event = shouldLoadContent(config.content.event)
        ? getEvent(eventYear)
        : null;

    const committee = shouldLoadContent(config.content.committee)
        ? getCommittee(committeeYear)
        : [];

    const partners = shouldLoadContent(config.content.partners)
        ? getPartners(partnersYear)
        : [];

    const speakers = shouldLoadContent(config.content.speakers)
        ? getSpeakers(speakersYear)
        : [];

    const programme = shouldLoadContent(config.content.programme)
        ? getProgramme(programmeYear)
        : { sections: [], host: null };

    const location = shouldLoadContent(config.content.location)
        ? getLocation(locationYear)
        : null;

    return {
        year: config.edition.current,

        event,

        committee: {
            data: committee,
            year: committeeYear,
        },

        partners: {
            data: partners,
            year: partnersYear,
        },

        speakers: {
            data: speakers,
            year: speakersYear,
        },

        programme: {
            data: programme,
            year: programmeYear,
        },

        location: location
            ? {
                  data: location,
                  year: locationYear,
              }
            : null,
    };
}