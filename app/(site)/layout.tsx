import { Header } from "@/components/section/header";
import { Footer } from "@/components/section/footer";

import { getConfig, getSiteContent } from "@/lib/content";

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const config = getConfig();
    const content = getSiteContent();

    return (
        <>
            <Header
                config={config}
                event={content.event}
            />

            <main className="w-screen">{children}</main>

            <Footer />
        </>
    );
}