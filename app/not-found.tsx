import { UtilFooter } from "@/components/section/util/footer";
import { UtilHeader } from "@/components/section/util/header";
import { Heading, Text } from "@/components/typography";

import { getConfig, getSiteContent } from "@/lib/content";

export default function NotFound() {
    const config = getConfig();
    const content = getSiteContent();

    return (
        <div className="flex h-screen w-screen flex-col overflow-hidden">
            <UtilHeader
                config={config}
                event={content.event}
            />

            <main className="flex min-h-0 flex-1 items-center bg-primary px-8">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="flex flex-col items-start">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="flex size-16 items-center justify-center md:size-20">
                                <img
                                    src="/logo_face.png"
                                    alt="Execut Logo"
                                    className="size-full"
                                />
                            </div>

                            <Heading
                                as="h3"
                                className="text-7xl text-background md:text-8xl"
                            >
                                404
                            </Heading>
                        </div>

                        <Heading as="h1" className="text-background">
                            Page Not Found
                        </Heading>

                        <Text
                            variant="callout"
                            className="max-w-xl text-background"
                        >
                            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                        </Text>
                    </div>
                </div>
            </main>

            <UtilFooter />
        </div>
    );
}