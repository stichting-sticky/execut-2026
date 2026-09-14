import type { Metadata } from "next";

import { ThanksDisclaimerSection } from "@/components/section/thanks/disclaimer";
import { ThanksDownloadSection } from "@/components/section/thanks/download";
import { ThanksPdfSection } from "@/components/section/thanks/pdf";

export const metadata: Metadata = {
    title: "Thanks",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ThanksPage() {
    return (
        <>
            <ThanksDownloadSection />
            <ThanksPdfSection />
            <ThanksDisclaimerSection />
        </>
    );
}