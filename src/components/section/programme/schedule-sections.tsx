import Section from "@/components/section/section";
import { ProgrammeScheduleSection } from "@/components/section/programme/schedule";

export function ProgrammeScheduleSections() {
    return (
        <Section className="py-16">
            <div className="space-y-8 w-full">
                <ProgrammeScheduleSection
                    title="Morning Session"
                    items={[
                        {
                            time: "09:00",
                            duration: "30 min",
                            talk: {
                                title: "Registration & Welcome Coffee",
                            },
                        },
                        {
                            time: "09:30",
                            duration: "30 min",
                            talk: {
                                title: "Opening Keynote",
                                speaker: "Conference Team",
                            },
                        },
                        {
                            time: "10:00",
                            duration: "45 min",
                            talk: {
                                title: "Cloud Architecture & DevOps",
                                speaker: "Sarah Chen",
                            },
                        },
                        {
                            time: "10:45",
                            duration: "15 min",
                            talk: {
                                title: "Coffee Break",
                            },
                        },
                        {
                            time: "11:00",
                            duration: "45 min",
                            talk: {
                                title: "Machine Learning & AI",
                                speaker: "Marcus Rodriguez",
                            },
                            workshop: {
                                title: "Intro to Cloud Computing",
                                speaker: "Workshop Leader TBA",
                            },
                        },
                    ]}
                />

                <ProgrammeScheduleSection
                    title="Afternoon Session"
                    items={[
                        {
                            time: "12:30",
                            duration: "90 min",
                            talk: {
                                title: "Lunch Break",
                            },
                        },
                        {
                            time: "14:00",
                            duration: "45 min",
                            talk: {
                                title: "Cybersecurity & Blockchain",
                                speaker: "Elena Popescu",
                            },
                        },
                        {
                            time: "14:45",
                            duration: "15 min",
                            talk: {
                                title: "Break",
                            },
                        },
                        {
                            time: "15:00",
                            duration: "60 min",
                            talk: {
                                title: "Data Science & Analytics",
                                speaker: "Priya Sharma",
                            },
                            workshop: {
                                title: "Web Security Workshop",
                                speaker: "Workshop Leader TBA",
                            },
                        },
                        {
                            time: "16:00",
                            duration: "15 min",
                            talk: {
                                title: "Afternoon Break",
                            },
                        },
                        {
                            time: "16:15",
                            duration: "45 min",
                            talk: {
                                title: "Panel Discussion & Q&A",
                                speaker: "All Speakers",
                            },
                        },
                        {
                            time: "17:00",
                            duration: "60 min",
                            talk: {
                                title: "Closing & Networking Drinks",
                            },
                        },
                    ]}
                />
            </div>
        </Section>
    );
}
