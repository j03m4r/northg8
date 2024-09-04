import { prisma } from "@/prisma";

export type YouTubeClip = {
    title: string;
    description: string;
    youtube_id: string;
};

export type Showing = {
    location: string;
    date: Date
};

export type FilmData = {
    title: string;
    description: string;
    featured_clips: string[];
    year_created: number;
    showings?: Showing[];
    youtube_clips?: YouTubeClip[];
}

export async function postFilm(filmData: FilmData) {
    const film = await prisma.film.create({
        data: {
            title: filmData.title,
            description: filmData.description,
            year_created: filmData.year_created,
            featured_clips: filmData.featured_clips,
            showings: {
                create: filmData.showings
            },
            youtube_clips: {
                create: filmData.youtube_clips
            }
        }
    });

    console.log("Created film:", film);
}
