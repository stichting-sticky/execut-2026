"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll the viewport to top on route change (instant, no animation)
    const viewport = document.querySelector('[data-slot="scroll-area-viewport"]');
    if (viewport) {
      viewport.scrollTo({ top: 0, behavior: 'instant' });
    }
    // Also try window scroll as fallback
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
