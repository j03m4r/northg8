"use client";
import AnimatedTitle from "@/components/typography/AnimatedTitle";
import NavigationButton from "@/components/buttons/NavigationButton";
import SectionHeader from "@/components/typography/SectionHeader";
import HomePageFeaturedFilm from "./components/HomePageFeaturedFilm";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function Home() {
    const aboutRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, []);

    const handleClick = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="flex w-full">
            <div className="w-1/2"> {/* Left side of page. Main content */}
                <main className="relative">
                    <HomePageFeaturedFilm />
                    <div ref={aboutRef} className="w-full h-screen flex flex-col p-6 gap-y-6 justify-start items-start">
                        <SectionHeader>
                            About Us
                        </SectionHeader>
                        <p>
                            NorthG8 is a creative co-op focused on the output of quality media productions for entertainment. As co-founders, Rickey and Haleigh bring higher education and experience in all forms of artistry and entertainment, including music, acting, dancing, filming, editing, and more.
                        </p>
                    </div>
                </main>
            </div>
            <div className="fixed left-1/2 flex flex-col w-1/2 h-screen border-typography-black border-l">
                <div className="flex justify-center items-center w-full h-1/2 border-typography-black border-b">
                    <AnimatedTitle />
                </div>
                <div className="flex flex-col w-full h-1/2 justify-center">
                    <NavigationButton href="films" title="Film collection" />
                    <NavigationButton href="showings" title="Showings" />
                    <button onClick={handleClick} className="w-full h-full text-typography-black hover:text-warm-white relative border border-typography-black border-opacity-0 hover:border-opacity-100 
                    transition duration-300 ease-in-out group flex justify-center items-center z-20 text-xl font-semibold">
                        <div className="absolute flex rounded-sm -z-10 h-0 w-full group-hover:h-full bottom-0 bg-typography-black group-hover:border border-typography-black duration-300 ease-in-out" />
                        About North G8
                    </button>
                </div>
            </div>
        </div>
    );
}

