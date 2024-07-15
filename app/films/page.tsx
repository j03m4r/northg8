"use client";
import React from "react"
import { Clip } from "@/components/ParallaxClip";

const featured_clips: Clip[] = [
    {
        src: "/media/videos/cold sequence.mp4"
    },
    {
        src: "/media/videos/warm sequence-.mp4"
    },
    {
        src: "/media/videos/dark sequence.mp4"
    }
]

export default function FilmsPage() {
    return (
        <main className="flex flex-col justify-center items-center w-full h-full">
            <div className="w-4/5">
                <video className="w-full" loop muted autoPlay preload="none">
                    <source src={featured_clips[1].src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </main>
    )
}

