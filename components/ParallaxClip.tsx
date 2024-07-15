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

// Parallaxed feated clip on the landing page 
// Scales based on index. Higher index means it doesn't scale until later, lower means it scales at a sooner starting time.
// Top position increases with index as well
const ParallaxClip: React.FC<props> = ({
    clip, i, range, targetScale, progress
}) => {
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <motion.div className="w-full group sticky" style={{ scale: scale, top: `calc(0% + ${i * 25}px)`}}>
            <video className="w-full" loop muted autoPlay preload="none">
                <source src={clip.src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </motion.div>

    );
}

export default ParallaxClip;
