import { prisma } from "@/prisma";
import { Film } from "@prisma/client";

export async function getFilmById(id: string): Promise<Film | null> {
    const film = await prisma.film.findFirst({
        include: {
            youtube_clips: true,  // Include youtube_clips related to the film
            showings: true,       // Include showings related to the film
        },
        where: {
            id: id
        }
    });

    return film;
}
