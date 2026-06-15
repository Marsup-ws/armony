"use client";

import { useEffect, useState } from "react";

const imagesWeb = [
  "/images/staff/bassiste.jpg",
  "/images/staff/guitare.jpg",
  "/images/staff/chanteuse.jpg",
  "/images/staff/clavier.jpg",
  "/images/staff/batteur.jpg",
];

const imagesMob = [
  "/images/staff/bassiste.jpg",
  "/images/staff/guitare.jpg",
  "/images/staff/chanteuse.jpg",
  "/images/staff/clavier.jpg",
  "/images/staff/batteur.jpg",
];


// Desktop: alternating from bottom / top
const directions = ["bottom", "top", "bottom", "top", "bottom"] as const;

export default function AccueilPage() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= imagesWeb.length) return;
    const timer = setTimeout(() => {
      setVisibleCount((v) => v + 1);
    }, visibleCount === 0 ? 300 : 700);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div className="w-full h-screen pt-16 overflow-hidden">
      {/* Desktop: 5 vertical bands */}
      <div className="hidden md:flex w-full h-full">
        {imagesWeb.map((src, i) => {
          const visible = visibleCount > i;
          const fromBottom = directions[i] === "bottom";
          return (
            <div
              key={i}
              className="flex-1 h-full overflow-hidden relative"
              style={{ borderRight: i < 4 ? "1px solid #3a0000" : "none" }}
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



      <div className="md:hidden flex flex-col w-full h-full overflow-y-auto pt-2 gap-3 px-3">
        {imagesMob.map((src, i) => {
          const visible = visibleCount > i;
          return (
            <div
              key={i}
              className="w-full transition-all duration-700 ease-out flex-shrink-0"
              style={{
                aspectRatio: "16/9",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(60px)",
              }}
            >
              <img
                src={src}
                alt={`Image ${i + 1}`}
                className="w-full h-full object-cover rounded"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}