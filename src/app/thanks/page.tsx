import { ThanksDownloadSection } from "@/components/section/thanks/download";
import { ThanksPdfSection } from "@/components/section/thanks/pdf";
import { ThanksDisclaimerSection } from "@/components/section/thanks/disclaimer";

import type { Metadata } from "next";

export const metadata: Metadata = {
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