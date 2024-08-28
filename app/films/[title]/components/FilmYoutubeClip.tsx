"use client";

import type { FC } from 'react';

interface FilmYoutubeClipProps {
    youtubeId: string;
    title: string;
    description: string;
}

const FilmYoutubeClip: FC<FilmYoutubeClipProps> = ({ youtubeId, title, description }) => {
    return (
        <div className="flex flex-col lg:flex-row items-start justify-start gap-x-6 gap-y-3">
            <iframe id="ytplayer" className="w-full lg:w-[640px]" width="640" height="360"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0`}
                ></iframe>
            <div className="flex flex-col gap-y-3 lg:gap-y-6">
                <h1 className="text-4xl lg:text-5xl font-semibold">
                    {title}
                </h1>
                <p className="text-wrap 2xl:max-w-[50vw]">
                    {description}
                </p>
            </div>
        </div>
    );
}
export default FilmYoutubeClip;
