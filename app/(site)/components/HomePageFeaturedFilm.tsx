"use client";

import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import TransitionLink from '@/components/utils/TransitionLink';
import ParallaxClip from "@/components/ParallaxClip";
import { FaLongArrowAltUp } from 'react-icons/fa';
import { films } from '@/types';

function HomePageFeaturedFilm() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <>
            <div ref={container} className="relative w-full group flex flex-col border-b border-typography-black">
                {
                    films[0].featured_clips.map((clip, idx) => {
                        const targetScale = 1 - (films[0].featured_clips.length - idx) * 0.05;
                        return (<ParallaxClip key={idx} clip={clip} i={idx} range={[idx * 0.1, 1]} targetScale={targetScale} progress={scrollYProgress} />);
                    })
                }
            </div>
            <TransitionLink href="films/rite" className="min-h-[25vh] text-typography-black hover:text-warm-white relative group
                    ease-in-out z-20 transition duration-300">
                <div className="flex flex-col justify-between gap-y-6 p-6 border-b border-typography-black">
                    <div className="flex flex-row justify-between pr-4 items-center w-full">
                        <div className='gap-x-6 flex justify-between items-center'>
                            <h1 className="font-semibold text-5xl">Rite</h1>
                            <div className='px-2 py-1 bg-typography-black rounded-xl text-warm-white text-xs group-hover:bg-warm-white group-hover:text-typography-black ease-in-out transition duration-300'>Latest film</div>
                        </div>
                        <FaLongArrowAltUp className="z-20 opacity-0 group-hover:opacity-100 rotate-90 -translate-x-full group-hover:translate-x-0 duration-300 transition ease-in-out text-typography-black group-hover:text-warm-white" size={32} />
                    </div>
                    <p>
                        ‘Rite’ follows young Miles as he navigates the forest while being hunted by a mysterious cult. Currently under production, we hope to be accepted into the 2025 Twin Cities Film Festival and shown at other local theaters after. ‘Rite’ is the first film produced by NG8 and will (hopefully) be completed by October-November 2024. Auditions are still open, resumés and headshots can be sent to the emails provided below.
                    </p>
                </div>
                <div className="absolute flex -z-10 h-0 w-full group-hover:h-full bottom-0 bg-typography-black group-hover:border border-typography-black duration-300 ease-in-out" />
            </TransitionLink>
        </>
    )
}

export default HomePageFeaturedFilm
