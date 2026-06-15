"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/staff/jeremy.jpg",
  "/images/staff/serge.jpg",
  "/images/staff/shadow.jpg",
  "/images/staff/mars.jpg",
  "/images/staff/kevin.jpg",
];

const imagesMob = [
  "/images/staff/jeremy2.jpg",
  "/images/staff/serge2.jpg",
  "/images/staff/shadow.jpg",
  "/images/staff/mars2.jpg",
  "/images/staff/kevin2.jpg",
];

// Desktop: alternating from bottom / top
const directions = ["bottom", "top", "bottom", "top", "bottom"] as const;

export default function AccueilPage() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= images.length) return;
    const timer = setTimeout(() => {
      setVisibleCount((v) => v + 1);
    }, visibleCount === 0 ? 300 : 400);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div className="w-full w-11/12  h-screen pt-16 overflow-hidden">
      {/* Desktop: 5 vertical bands */}
      <div className="hidden md:flex w-full h-full">
        {images.map((src, i) => {
          const visible = visibleCount > i;
          const fromBottom = directions[i] === "bottom";
          return (
            <div
              key={i}
              className="flex-1 h-full overflow-hidden relative"
              style={{ borderRight: i < 4 ? "1px solid #000000" : "none" }}
            >
              <div
                className="w-full h-full transition-all duration-700 ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateY(0)"
                    : fromBottom
                    ? "translateY(80px)"
                    : "translateY(-80px)",
                }}
              >
                <img
                  src={src}
                  alt={`Image ${i + 1}`}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "9/16" }}
                />
                {/* fallback gradient if no image */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: stacked 16:9 images from bottom */}
      <div className="md:hidden flex w-full h-full overflow-y-auto">
        {imagesMob.map((src, i) => {
          const visible = visibleCount > i;
          const fromBottom = directions[i] === "bottom";
          return (
            <div
              key={i}
              className="flex-1 h-full overflow-hidden relative"
              style={{ borderRight: i < 4 ? "1px solid #000000" : "none" }}
            >
              <div
                className="w-full h-full transition-all duration-700 ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateY(0)"
                    : fromBottom
                    ? "translateY(80px)"
                    : "translateY(-80px)",
                }}
              >
                <img
                  src={src}
                  alt={`Image ${i + 1}`}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "9/16" }}
                />
                {/* fallback gradient if no image */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}