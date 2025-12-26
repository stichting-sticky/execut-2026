import { Title, Callout, H3 } from "@/components/ui/typography";
import Section from "@/components/section/section";

export default function NotFound() {
    return (
        <Section className="text-left py-32 bg-secondary">
            <div className="flex flex-col items-start">
                {/* 404 with logo */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="size-20 bg-background flex items-center justify-center">
                        <img src="/logo_face.png" alt="Execut Logo" className="size-20 invert" />
                    </div>
                    <H3 className="text-8xl text-background">404</H3>
                </div>

                <Title className="text-background">Page Not Found</Title>
                <Callout className="max-w-xl text-background">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </Callout>
            </div>
        </Section>
    );
}
