"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Partner = {
  id?: string | number;
  name: string;
  image: string;
};

type Props = {
  partners: Partner[];
  hrefFor?: (p: Partner) => string;
  className?: string;

  minSize?: number;
  maxSize?: number;
  padding?: number;
  proximityPx?: number;
  baseScale?: number;
  maxProximityScale?: number;
  hoverBoost?: number;
  iterations?: number;
};

type Item = {
  key: string;
  partner: Partner;
  x: number;
  y: number;
  r: number;
  size: number;
};

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashStringToSeed(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * A lightweight "logo cloud" layout:
 * - start with random positions within bounds
 * - iteratively push overlapping circles apart (relaxation)
 * - pull gently toward center so it stays cohesive
 */
function layoutItems(
  partners: Partner[],
  width: number,
  height: number,
  opts: {
    minSize: number;
    maxSize: number;
    padding: number;
    iterations: number;
  }
): Item[] {
  const { minSize, maxSize, padding, iterations } = opts;

  const centerX = width / 2;
  const centerY = height / 2;

  const items: Item[] = partners.map((p, i) => {
    const key = String(p.id ?? p.name ?? i);
    const rand = mulberry32(hashStringToSeed(key));
    const size = lerp(minSize, maxSize, rand());
    const r = size / 2 + padding;

    const x = clamp(centerX + (rand() - 0.5) * width * 0.9, r, width - r);
    const y = clamp(centerY + (rand() - 0.5) * height * 0.8, r, height - r);

    return { key, partner: p, x, y, r, size };
  });

  if (items.length <= 1) return items;

  for (let it = 0; it < iterations; it++) {
    // collision resolution
    for (let a = 0; a < items.length; a++) {
      for (let b = a + 1; b < items.length; b++) {
        const A = items[a];
        const B = items[b];
        const dx = B.x - A.x;
        const dy = B.y - A.y;
        const dist = Math.hypot(dx, dy) || 0.0001;
        const minDist = A.r + B.r;

        if (dist < minDist) {
          const overlap = (minDist - dist) * 0.5;
          const nx = dx / dist;
          const ny = dy / dist;

          A.x -= nx * overlap;
          A.y -= ny * overlap;
          B.x += nx * overlap;
          B.y += ny * overlap;
        }
      }
    }

    // gentle pull toward center + keep in bounds
    for (const item of items) {
      const pull = 0.02;
      item.x = lerp(item.x, centerX, pull);
      item.y = lerp(item.y, centerY, pull);

      item.x = clamp(item.x, item.r, width - item.r);
      item.y = clamp(item.y, item.r, height - item.r);
    }
  }

  return items;
}

export function PartnersCloud({
  partners,
  hrefFor = (p) => `/partners#partner-${p.id}`,
  className,

  minSize = 100,
  maxSize = 200,
  padding = 20,
  proximityPx = 120,
  baseScale = 1,
  maxProximityScale = 1.5,
  hoverBoost = 0.25,
  iterations = 140,
}: Props) {
  const wrapRef = React.useRef<HTMLDivElement | null>(null);
  const [items, setItems] = React.useState<Item[]>([]);
  const pointerRef = React.useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });
  const [hoverKey, setHoverKey] = React.useState<string | null>(null);

  // a tiny state to cause repaints without storing pointer in state
  const [, setTick] = React.useState(0);

  // -------------------- IDLE SPOTLIGHT (auto movement) --------------------
  const IDLE_AFTER_MS = 2500; // start after no activity
  const IDLE_STEP_MS = 900; // spotlight changes every X ms
  const IDLE_BOOST = 0.3; // extra scale on spotlighted item

  const [idleKey, setIdleKey] = React.useState<string | null>(null);
  const idleKeyRef = React.useRef<string | null>(null);
  const lastActivityRef = React.useRef<number>(Date.now());
  const idleCycleRef = React.useRef<{ order: string[]; idx: number }>({ order: [], idx: 0 });

  const activity = React.useCallback(() => {
    lastActivityRef.current = Date.now();
    idleKeyRef.current = null;
    setIdleKey(null);
  }, []);
  // ----------------------------------------------------------------------

  // Measure + re-layout
  React.useEffect(() => {
    if (!wrapRef.current) return;

    const el = wrapRef.current;

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const w = Math.max(320, Math.floor(rect.width));
      const h = Math.max(260, Math.floor(rect.height));

      setItems(
        layoutItems(partners, w, h, {
          minSize,
          maxSize,
          padding,
          iterations,
        })
      );
    };

    compute();

    const ro = new ResizeObserver(() => compute());
    ro.observe(el);
    return () => ro.disconnect();
  }, [partners, minSize, maxSize, padding, iterations]);

  // Pointer tracking (rAF throttled)
  React.useEffect(() => {
    if (!wrapRef.current) return;

    let raf = 0;
    const el = wrapRef.current;

    const onMove = (e: PointerEvent) => {
      activity();

      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      pointerRef.current = { x, y, active: true };

      if (!raf) {
        raf = window.requestAnimationFrame(() => {
          raf = 0;
          setTick((t) => (t + 1) % 1_000_000);
        });
      }
    };

    const onLeave = () => {
      activity();
      pointerRef.current.active = false;
      setTick((t) => (t + 1) % 1_000_000);
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave, { passive: true });

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [activity]);

  // Idle spotlight loop
  React.useEffect(() => {
    if (!items.length) return;

    const shuffle = (arr: string[]) => {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    const ensureCycle = () => {
      const keys = items.map((it) => it.key);
      const cycle = idleCycleRef.current;

      const keysSet = new Set(keys);
      const cycleSet = new Set(cycle.order);

      const same =
        keys.length === cycle.order.length &&
        keysSet.size === cycleSet.size &&
        [...keysSet].every((k) => cycleSet.has(k));

      if (!same) {
        cycle.order = shuffle(keys);
        cycle.idx = 0;
      }
    };

    let intervalId: number | null = null;

    const tickIdle = () => {
      const idleFor = Date.now() - lastActivityRef.current;

      // user active? stop idle
      if (idleFor < IDLE_AFTER_MS || pointerRef.current.active || hoverKey) {
        if (idleKeyRef.current !== null) {
          idleKeyRef.current = null;
          setIdleKey(null);
        }
        return;
      }

      ensureCycle();

      const cycle = idleCycleRef.current;
      if (!cycle.order.length) return;

      const next = cycle.order[cycle.idx % cycle.order.length];
      cycle.idx = (cycle.idx + 1) % cycle.order.length;

      // avoid pointless re-renders
      if (idleKeyRef.current === next) return;

      idleKeyRef.current = next;
      setIdleKey(next);
    };

    intervalId = window.setInterval(tickIdle, IDLE_STEP_MS);
    tickIdle();

    return () => {
      if (intervalId) window.clearInterval(intervalId);
    };
}, [items, hoverKey]); // ✅ no idleKey here

  const pointer = pointerRef.current;

  return (
    <div
      ref={wrapRef}
      className={cn("relative w-full", "h-[340px] sm:h-[380px] md:h-[420px] z-0", className)}
    >
      {/* subtle edge fades (like your carousel) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background/0 via-background/0 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background/0 via-background/0 to-transparent" />

      {items.map((item) => {
        const dx = pointer.x - item.x;
        const dy = pointer.y - item.y;
        const dist = Math.hypot(dx, dy);

        const tRaw = pointer.active ? 1 - dist / proximityPx : 0;
        const t = easeOutCubic(clamp(tRaw, 0, 1));

        const proximityScale = lerp(baseScale, maxProximityScale, t);

        const isHovered = hoverKey === item.key;
        const isIdle = idleKey === item.key;

        const scale = proximityScale + (isHovered ? hoverBoost : 0) + (isIdle ? IDLE_BOOST : 0);

        // zIndex: hovered highest, idle next, then proximity
        const z = (isHovered ? 10_000 : 0) + (isIdle ? 5_000 : 0) + Math.floor(t * 1000);

        return (
          <Link
            key={item.key}
            href={hrefFor(item.partner)}
            aria-label={`Partner: ${item.partner.name}`}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
              transform: `translate(-50%, -50%) scale(${scale})`,
              transformOrigin: "center",
              zIndex: z,
              transition: "transform 240ms ease-out",
              willChange: "transform",
            }}
            onMouseEnter={() => {
              activity();
              setHoverKey(item.key);
            }}
            onMouseLeave={() => {
              activity();
              setHoverKey((k) => (k === item.key ? null : k));
            }}
            onFocus={() => {
              activity();
              setHoverKey(item.key);
            }}
            onBlur={() => {
              activity();
              setHoverKey((k) => (k === item.key ? null : k));
            }}
          >
            <div
              className={cn(
                "flex items-center justify-center",
                "rounded-2xl",
                "bg-background/0",
                "hover:drop-shadow-[0_12px_24px_rgba(0,0,0,0.20)]"
              )}
              style={{
                width: item.size,
                height: item.size,
              }}
            >
              <Image
                src={item.partner.image}
                alt={item.partner.name}
                width={300}
                height={300}
                className="max-h-full w-auto max-w-full object-contain select-none pointer-events-none"
                priority={false}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
