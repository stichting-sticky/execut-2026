import Section from "@/components/section/section";
import { Title, Callout } from "@/components/ui/typography";
import { ProgrammeSection } from "@/components/programme-section";

export default function ProgrammePage() {
    return (
        <>
            {/* Hero Section */}
            <Section>
                <Title>Programme</Title>
                <Callout className="max-w-2xl">
                    On 25 March 2025 the TivoliVredenburg will host 6 consecutive speakers, each of whom will give a talk on a particular aspect of software and technology.
                    <br /><br />
                    Aside from these talks we will also host 3 workshops throughout the day! You can sign up for these workshops using our ticket store.
                </Callout>
            </Section>

            {/* Schedule */}
            <Section className="py-16">
                <div className="space-y-8 w-full">
                    <ProgrammeSection
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

                    <ProgrammeSection
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
        </>
    );
}
