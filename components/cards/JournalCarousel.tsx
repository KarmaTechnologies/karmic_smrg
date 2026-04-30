"use client";
import { useRef } from "react";
import JournalCard from "./JournalCard";
import type { Journal } from "@/types/journal"; // Adjust the import path if needed

type JournalCarouselProps = {
  journals: Journal[];
};

export default function JournalCarousel({ journals }: JournalCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / 3;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <button
        className="arrow left"
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
        onClick={() => scroll("left")}
      >
        &lt;
      </button>
      <div
        className="journal-carousel"
        ref={carouselRef}
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "1rem",
          padding: "1rem 0",
          scrollSnapType: "x mandatory",
        }}
      >
        {Array.isArray(journals) &&
          journals.map((journal) => (
            <div
              key={journal.id}
              style={{
                // flex: "0 0 calc(33.333% - 1rem)",
                // maxWidth: "calc(33.333% - 1rem)",
                scrollSnapAlign: "start",
              }}
            >
              <JournalCard journal={journal} />
            </div>
          ))}
      </div>
      <button
        className="arrow right"
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
        onClick={() => scroll("right")}
      >
        &gt;
      </button>
    </div>
  );
}