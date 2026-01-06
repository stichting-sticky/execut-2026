import { ContactHeroSection } from "@/components/section/contact/hero";
import { ContactInfoSection } from "@/components/section/contact/info";
import { ContactOrganiserSection } from "@/components/section/contact/organiser";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <ContactHeroSection />
            <ContactInfoSection />
            <ContactOrganiserSection />
        </div>
    );
}
