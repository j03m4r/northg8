"use client";
import type { FC } from 'react';
import { Film } from '@prisma/client';
import React, { useRef, useState } from "react"
import { twMerge } from "tailwind-merge";
import FilmNavigationButton from "@/components/navigation/FilmNavigationButton";
import SectionHeader from "@/components/typography/SectionHeader";
import useSelectedFilmMenu from "@/hooks/useSelectFilmMenu";
import { motion, useInView } from "framer-motion";
import { opacity } from "@/components/animations/textAnimations";
import { FaCircle } from "react-icons/fa";

interface FilmsPageContentProps {
    films: Film[];
};

const FilmsPageContent: FC<FilmsPageContentProps> = ({ films }) => {
    const [activeFilm, setActiveFilm] = useState<Film>(films[0]);
    const { isOpen, onClose, setSelectedFilm } = useSelectedFilmMenu();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref)

    return (
        <main className="bg-warm-white text-typography-black 2xl:text-xl w-full h-full pt-[10vh] overflow-hidden"> {/* Adjusted to h-full and overflow-hidden */}
            <div ref={ref} className={twMerge("fixed w-screen h-[90vh] -top-[90vh] py-6 px-6 gap-y-6 z-20 bg-warm-white justify-start items-start transition ease-in-out duration-500 flex flex-col", isOpen ? "translate-y-[100vh]" : "-translate-y-[100vh]")}>
                {films.map((film, idx) => (
                    <motion.button key={`film_selection_${idx}`} className="flex justify-between items-center w-full opacity-0" onClick={() => { setSelectedFilm(film), setActiveFilm(film), onClose() }}
                        variants={opacity} initial="initial" custom={idx + 1}
                        animate={isInView ? "inView" : "outView"}
                    >
                        <SectionHeader className="w-full flex justify-start">
                            {film.title}
                        </SectionHeader>
                        <FaCircle size={24} className={activeFilm.title === film.title ? "block" : "hidden"} />
                    </motion.button>
                ))}
            </div>
            <div className="hidden lg:flex h-full gap-y-6 w-2/5 fixed flex-col items-start justify-start">
                <ul className="w-full text-2xl">
                    {films.map((film, idx) => {
                        if (idx === 0 || films[idx].year_created !== films[idx - 1].year_created) {
                            return (
                                <div key={`film_title_${film.id}`} className="mt-6 flex flex-col gap-y-6">
                                    <SectionHeader className="pl-12">
                                        {film.year_created}
                                    </SectionHeader>
                                    <button onClick={() => setActiveFilm(film)} className={twMerge("pl-6 py-1 w-full hover:bg-typography-black hover:text-warm-white text-start", activeFilm.title == film.title && "bg-typography-black text-warm-white")}>
                                        {film.title}
                                    </button>
                                </div>
                            )
                        }

                        return (
                            <button key={`film_title_${film.id}`} onClick={() => setActiveFilm(film)} className={twMerge("pl-6 py-1 w-full hover:bg-typography-black hover:text-warm-white text-start", activeFilm.title == film.title && "bg-typography-black text-warm-white")}>
                                {film.title}
                            </button>
                        )
                    })}
                </ul>
            </div>
            <div className="lg:border-l lg:border-typography-black h-[90vh] w-full lg:w-3/5 absolute lg:left-[40%] flex flex-col items-center justify-start overflow-hidden">
                <div key={`film_clip_${activeFilm.id}`}
                    className="min-h-[90vh] w-full h-full flex flex-col justify-center items-start pb-[15vh] md:pb-0"
                >
                    <video className="p-6 md:p-0 w-full" loop muted autoPlay preload="none">
                        <source src={activeFilm.featured_clips[0]} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <FilmNavigationButton film={activeFilm} />
                </div>
            </div>
        </main>
    );
}
export default FilmsPageContent;
