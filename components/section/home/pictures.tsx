"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";

import { Heading, Text } from "@/components/typography";

import Section from "@/components/section/section";

const pictures = [
    { src: "/pictures/1.jpg", alt: "exec(ut) conference" },
    { src: "/pictures/2.jpg", alt: "exec(ut) conference" },
    { src: "/pictures/3.jpg", alt: "exec(ut) conference" },
    { src: "/pictures/4.jpg", alt: "exec(ut) conference" },
    { src: "/pictures/5.jpg", alt: "exec(ut) conference" },
    { src: "/pictures/6.jpg", alt: "exec(ut) conference" },
    { src: "/pictures/7.jpg", alt: "exec(ut) conference" },
    { src: "/pictures/8.jpg", alt: "exec(ut) conference" },
    { src: "/pictures/9.jpg", alt: "exec(ut) conference" },
    { src: "/pictures/10.jpg", alt: "exec(ut) conference" },
    { src: "/pictures/11.jpg", alt: "exec(ut) conference" },
    { src: "/pictures/12.jpg", alt: "exec(ut) conference" },
];

const firstRow = pictures.slice(0, 5);
const secondRow = pictures.slice(5);

export default function HomePicturesSection() {
    return (
        <section className="w-full overflow-hidden py-16 md:py-24">
            <Section className="py-0!">
                <div className="w-full pb-10">
                    <Text variant="supertitle">exec(ut)</Text>
                    <Heading as="h2">Check out last year's edition.</Heading>
                </div>
            </Section>

            <div className="md:hidden">
                <MobilePictures />
            </div>

            <div className="hidden space-y-3 md:block">
                <PictureRow pictures={firstRow} direction="left" />
                <PictureRow pictures={secondRow} direction="right" />
            </div>
        </section>
    );
}

function MobilePictures() {
    return (
        <div className="grid grid-cols-2 gap-2 px-4">
            {pictures.map((picture, index) => {
                const wide = index === 0 || index === 5;

                return (
                    <div
                        key={picture.src}
                        className={
                            wide
                                ? "relative col-span-2 aspect-video overflow-hidden"
                                : "relative aspect-square overflow-hidden"
                        }
                    >
                        <Image
                            src={picture.src}
                            alt={picture.alt}
                            fill
                            className="object-cover"
                            sizes={
                                wide
                                    ? "(max-width: 767px) calc(100vw - 2rem), 0px"
                                    : "(max-width: 767px) calc(50vw - 1.25rem), 0px"
                            }
                        />
                    </div>
                );
            })}
        </div>
    );
}

function PictureRow({
    pictures,
    direction,
}: {
    pictures: typeof firstRow;
    direction: "left" | "right";
}) {
    const trackRef = useRef<HTMLDivElement>(null);
    const hoveredRef = useRef(false);
    const positionRef = useRef(0);
    const speedRef = useRef(direction === "left" ? -0.25 : 0.25);

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        let frame: number;
        let previousTime = performance.now();

        const getHalfWidth = () => track.scrollWidth / 2;

        if (direction === "right") {
            positionRef.current = -getHalfWidth();
        }

        const animate = (time: number) => {
            const delta = Math.min((time - previousTime) / 16.667, 3);
            previousTime = time;

            const targetSpeed = hoveredRef.current
                ? 0
                : direction === "left"
                  ? -0.25
                  : 0.25;

            speedRef.current +=
                (targetSpeed - speedRef.current) * 0.02 * delta;

            positionRef.current += speedRef.current * delta;

            const halfWidth = getHalfWidth();

            if (direction === "left" && positionRef.current <= -halfWidth) {
                positionRef.current += halfWidth;
            }

            if (direction === "right" && positionRef.current >= 0) {
                positionRef.current -= halfWidth;
            }

            track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;

            frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frame);
    }, [direction]);

    return (
        <div
            className="w-full overflow-hidden"
            onMouseEnter={() => {
                hoveredRef.current = true;
            }}
            onMouseLeave={() => {
                hoveredRef.current = false;
            }}
        >
            <div
                ref={trackRef}
                className="flex w-max gap-3 will-change-transform"
            >
                {[...pictures, ...pictures].map((picture, index) => (
                    <div
                        key={`${picture.src}-${index}`}
                        className="relative h-64 w-96 shrink-0 overflow-hidden xl:h-72 xl:w-md"
                    >
                        <Image
                            src={picture.src}
                            alt={picture.alt}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1280px) 448px, (min-width: 768px) 384px, 0px"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}