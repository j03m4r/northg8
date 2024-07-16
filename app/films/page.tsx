"use client";
import React, { useRef, useEffect, useState } from "react"
import { films } from "@/types";
import { twMerge } from "tailwind-merge";
import { FaLongArrowAltUp } from "react-icons/fa";
import TransitionLink from "@/components/utils/TransitionLink";

export default function FilmsPage() {
    const filmRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const [activeFilm, setActiveFilm] = useState(films[0].title);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleClick = (title: string) => {
        const filmElement = filmRefs.current[title];
        if (filmElement) {
            filmElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const buffer = windowHeight * 0.1; // 10% buffer

            for (const [title, ref] of Object.entries(filmRefs.current)) {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const isInView = (
                        rect.top >= -buffer &&
                        rect.bottom <= windowHeight + buffer
                    );

                    if (isInView) {
                        setActiveFilm(title);
                        break; // Stop checking once we find a film in view
                    }
                }
            }
        };

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
            // Trigger initial check
            handleScroll();
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <main className="w-full h-full overflow-y-scroll">
            <div className="fixed flex flex-col items-start justify-center h-4/5 left-6 top-[50vh] -translate-y-1/2 text-8xl font-semibold z-20 mix-blend-difference text-warm-white">
                {
                    films.map((film, _) => (
                        <button key={`film_title_${film.id}`} onClick={() => handleClick(film.title)} className={twMerge("hover:underline", activeFilm == film.title && "underline")}>
                            {film.title}
                        </button>
                    ))
                }
            </div>
            <div ref={scrollContainerRef} className="flex flex-col items-center w-full h-full snap-y snap-mandatory overflow-y-scroll">
                {
                    films.map((film, _) => (
                        <div key={`film_clip_${film.id}`}
                            className="snap-center w-full min-h-screen flex justify-center items-center"
                            ref={(el) => { filmRefs.current[film.title] = el; }}
                        >
                            <TransitionLink href={`/films/${film.title}`} className="group xl:w-4/5 relative">
                                <video className="w-full" loop muted autoPlay preload="none">
                                    <source src={film.featured_clips[0].src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <FaLongArrowAltUp size={64} className="translate-y-6 -translate-x-6 group-hover:translate-x-0 group-hover:translate-y-0 rotate-45 absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out mix-blend-difference text-warm-white" />
                            </TransitionLink>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

