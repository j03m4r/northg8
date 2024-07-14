"use client";
import { motion, MotionValue, useTransform } from "framer-motion";

export type Clip = {
    src: string;
}

interface props {
    clip: Clip;
    i: number;
    range: number[];
    targetScale: number;
    progress: MotionValue<number>;
};

const FeaturedClip: React.FC<props> = ({
    clip, i, range, targetScale, progress
}) => {
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <motion.div className="w-full group sticky" style={{ scale: scale, top: `calc(0% + ${i * 25}px)`}}>
            <video className="w-full" loop muted autoPlay preload="none">
                <source src={clip.src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="text-xl absolute opacity-0 duration-200 transition ease-in-out text-warm-white top-2 left-2">Rite</div>
        </motion.div>

    );
}

export default FeaturedClip;
