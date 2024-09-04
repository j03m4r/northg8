import { prisma } from "@/prisma";
import { Film } from "@prisma/client";

export async function getFilms(): Promise<Film[]> {
    const films = await prisma.film.findMany({
        include: {
            youtube_clips: true,  // Include youtube_clips related to the film
            showings: true,       // Include showings related to the film
        },
    });

    if (!films) {
        return [];
    }

    return films;
};
