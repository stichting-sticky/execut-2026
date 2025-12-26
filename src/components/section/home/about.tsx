import Link from "next/link";
import { H2, H4, Callout } from "@/components/ui/typography";
import Section from "../section";

export function HomeAboutSection() {
    return (
        <Section className="bg-primary/10 py-20">
            <H2 className="mb-6">About Us</H2>

            <div className="flex flex-col md:flex-row md:gap-32 gap-12">
                {/* Left: Text */}
                <div className="flex-2">
                    <Callout className="mb-6">
                        exec(ut) is an event organised by Stichting Sticky. It is a conference for and by students, offering a glimpse at the wondrous world of IT beyond the university. We strive to provide a diverse programme and show how exciting conferences can be. Our main way of contact is through our mail address.
                    </Callout>
                    <Callout className="!mt-0">
                        The organising committee consists of nine members, all of whom are students of computing- and information sciences at Utrecht University:
                    </Callout>
                </div>

                {/* Right: Names in 2 columns */}
                <div className="flex-3 grid md:grid-cols-2 gap-8 md:gap-6 max-w-[90vw]">
                    <div>
                        <H4>Sem van Nieuwenhuizen</H4>
                        <Callout className="!mt-0 !mb-0">chair</Callout>
                    </div>
                    <div>
                        <H4>Marcel van Laar</H4>
                        <Callout className="!mt-0 !mb-0">treasurer</Callout>
                    </div>
                    <div>
                        <H4>Thijs Olijerhoek</H4>
                        <Callout className="!mt-0 !mb-0">acquisition</Callout>
                    </div>
                    <div>
                        <H4>Willem Haans</H4>
                        <Callout className="!mt-0 !mb-0">acquisition</Callout>
                    </div>
                    <div>
                        <H4>Robert Karzijn</H4>
                        <Callout className="!mt-0 !mb-0">speakers</Callout>
                    </div>
                    <div>
                        <H4>Joshua Oudshorn</H4>
                        <Callout className="!mt-0 !mb-0">speakers</Callout>
                    </div>
                    <div>
                        <H4>Tieeny Chao</H4>
                        <Callout className="!mt-0 !mb-0">location</Callout>
                    </div>
                    <div>
                        <H4>Thom Bongaards</H4>
                        <Callout className="!mt-0 !mb-0">promotion</Callout>
                    </div>
                    <div>
                        <H4>Joep Swinkels</H4>
                        <Callout className="!mt-0 !mb-0">board</Callout>
                    </div>
                </div>
            </div>
        </Section>
    );
}
