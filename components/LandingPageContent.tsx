"use client";
import React from 'react'
import AnimatedTitle from "@/components/typography/AnimatedTitle";
import NavigationButton from "@/components/navigation/NavigationButton";
import SectionHeader from "@/components/typography/SectionHeader";
import { useRef, useState } from "react";
import Link from "next/link";
import { useInView, motion, useScroll } from "framer-motion";
import ParallaxClip from "@/components/ParallaxClip";
import FilmNavigationButton from "@/components/navigation/FilmNavigationButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { opacity } from "@/components/animations/textAnimations";
import { twMerge } from "tailwind-merge";
import TransitionLink from "@/components/navigation/TransitionLink";
import { FaArrowRight } from "react-icons/fa";
import { Film } from '@prisma/client';

export default function LandingPageContent({ featured_film }: { featured_film: Film }) {
    const aboutRef = useRef<HTMLDivElement>(null);
    const container = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"]
    });

    const handleClick = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            setNavMenuIsOpen(false);
        }
    };

    return (
        <div className="2xl:text-xl flex flex-col lg:flex-row w-full bg-warm-white text-typography-black">
            <div ref={ref} className={twMerge("lg:hidden border-b border-typography-black px-6 gap-y-6 fixed w-screen h-[30vh] -top-[30vh] z-20 bg-warm-white justify-center items-start transition ease-in-out duration-500 flex flex-col", navMenuIsOpen ? "translate-y-[40vh]" : "-translate-y-full")}>
                <motion.div className="w-full opacity-0"
                    variants={opacity} initial="initial" custom={1}
                    animate={isInView ? "inView" : "outView"}
                >
                    <TransitionLink href="films" className="w-full flex justify-between items-center">
                        <SectionHeader>
                            Film Collection
                        </SectionHeader>
                        <FaArrowRight size={24} />
                    </TransitionLink>
                </motion.div >
                <motion.div className="w-full opacity-0"
                    variants={opacity} initial="initial" custom={2}
                    animate={isInView ? "inView" : "outView"}
                >
                    <TransitionLink href="showings" className="w-full flex justify-between items-center">
                        <SectionHeader>
                            Showings
                        </SectionHeader>
                        <FaArrowRight size={24} />
                    </TransitionLink>
                </motion.div>
                <motion.button onClick={handleClick}
                    variants={opacity} initial="initial" custom={3}
                    animate={isInView ? "inView" : "outView"}
                    className="w-full flex justify-between items-center"
                >
                    <SectionHeader>
                        About North G8
                    </SectionHeader>
                    <FaArrowRight size={24} />
                </motion.button>
            </div>
            <div className="w-full lg:w-1/2 relative"> {/* Left side of page. Main content */}
                <div className="z-30 bg-warm-white lg:hidden sticky top-0 flex justify-between items-center px-6 w-full h-[10vh] border-typography-black border-b">
                    <AnimatedTitle />
                    <button onClick={() => navMenuIsOpen ? setNavMenuIsOpen(false) : setNavMenuIsOpen(true)}>
                        <RxHamburgerMenu size={36} />
                    </button>
                </div>
                <main className="relative">
                    <div ref={container} className="relative w-full group flex flex-col border-b border-typography-black">
                        {
                            featured_film.featured_clips.map((clip, idx) => {
                                const targetScale = 1 - (featured_film.featured_clips.length - idx) * 0.05;
                                return (<ParallaxClip key={idx} clip={clip} i={idx} range={[idx * 0.1, 1]} targetScale={targetScale} progress={scrollYProgress} />);
                            })
                        }
                    </div>
                    <FilmNavigationButton film={featured_film} />
                    <div ref={aboutRef} className="border-t border-typography-black w-full flex flex-col p-6 gap-y-6 justify-start items-start">
                        <SectionHeader>
                            About Us
                        </SectionHeader>
                        <p>
                            NorthG8 is a creative co-op focused on the output of quality media productions for entertainment. As co-founders, Rickey and Haleigh bring higher education and experience in all forms of artistry and entertainment, including music, acting, dancing, filming, editing, and more.
                        </p>
                        <div className="grid grid-cols-2 gap-x-6 w-full">
                            <div className="flex flex-col gap-y-6 w-full">
                                <div className="flex flex-col gap-y-3 w-full">
                                    <h2 className="font-semibold">More North G8</h2>
                                    <div className="text-md flex flex-col w-full">
                                        <Link className="hover:bg-typography-black hover:text-warm-white w-full" href="/instalink">Youtube</Link>
                                        <Link className="hover:bg-typography-black hover:text-warm-white w-full" href="/instalink">Instagram</Link>
                                        <Link className="hover:bg-typography-black hover:text-warm-white w-full" href="/twitter">Twitter</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-3 w-full">
                                    <h2 className="font-semibold">Contact us</h2>
                                    <div className="text-md flex flex-col w-full">
                                        <Link className="hover:bg-typography-black hover:text-warm-white w-full" href="/email">email@example.com</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center w-full">
                                <h1 className="text-5xl font-medium">LOGO</h1>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div className="hidden fixed left-1/2 lg:flex flex-col w-1/2 h-screen border-typography-black border-l">
                <div className="flex justify-center items-center w-full h-1/2 border-typography-black border-b">
                    <AnimatedTitle />
                </div>
                <div className="flex flex-col w-full h-1/2 justify-center">
                    <NavigationButton href="films" title="Film collection" />
                    <NavigationButton href="showings" title="Showings" />
                    <button onClick={handleClick} className="w-full h-full text-typography-black hover:text-warm-white relative border border-typography-black border-opacity-0 hover:border-opacity-100 
                    transition duration-300 ease-in-out group flex justify-center items-center z-20 text-xl 2xl:text-2xl font-semibold">
                        <div className="absolute flex rounded-sm -z-10 h-0 w-full group-hover:h-full bottom-0 bg-typography-black group-hover:border border-typography-black duration-300 ease-in-out" />
                        About North G8
                    </button>
                </div>
            </div>
        </div>
    );
};

