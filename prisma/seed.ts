import { prisma } from "../prisma";

var bcrypt = require("bcryptjs");

async function main() {
    // UPSERTING PRIMARY ADMIN USER
    const password = await bcrypt.hashSync('northg8IsAwesome!', 12);
    const user = await prisma.user.upsert({
        where: {
            email: "keane085@umn.edu"
        },
        update: {},
        create: {
            email: "keane085@umn.edu",
            password: password
        }
    })
    console.log({ user })

    // UPSERTING EXAMPLE FILM RECORD
    const film = await prisma.film.upsert({
        where: { id: "cuid" }, // Use the appropriate id or unique field for the film
        update: {
            title: "Rite",
            description: "‘Rite’ follows young Miles as he navigates the forest while being hunted by a mysterious cult. Currently under production, we hope to be accepted into the 2025 Twin Cities Film Festival and shown at other local theaters after. ‘Rite’ is the first film produced by NG8 and will (hopefully) be completed by October-November 2024. Auditions are still open, resumés and headshots can be sent to the emails provided below.",
            featured_clips: [
                "/media/videos/cold sequence.mp4",
                "/media/videos/warm sequence-.mp4",
                "/media/videos/dark sequence.mp4"
            ],
            showings: {
                deleteMany: {}, // Clear existing showings if necessary
                create: [
                    {
                        id: "id1",
                        location: "Como Park",
                        date: new Date(2024, 8, 22, 18, 30).toISOString(),
                    },
                    {
                        id: "id2",
                        location: "Marcey Park",
                        date: new Date(2024, 8, 22, 18, 30).toISOString(),
                    }
                ]
            },
            youtube_clips: {
                deleteMany: {}, // Clear existing clips if necessary
                create: [
                    {
                        id: "id3",
                        youtube_id: "4guXh_aZecI",
                        title: "Full film",
                        description: "description"
                    }
                ]
            },
            year_created: 2024
        },
        create: {
            id: "cuid",
            title: "Rite",
            description: "‘Rite’ follows young Miles as he navigates the forest while being hunted by a mysterious cult. Currently under production, we hope to be accepted into the 2025 Twin Cities Film Festival and shown at other local theaters after. ‘Rite’ is the first film produced by NG8 and will (hopefully) be completed by October-November 2024. Auditions are still open, resumés and headshots can be sent to the emails provided below.",
            featured_clips: [
                "/media/videos/cold sequence.mp4",
                "/media/videos/warm sequence-.mp4",
                "/media/videos/dark sequence.mp4"
            ],
            showings: {
                create: [
                    {
                        id: "id1",
                        location: "Como Park",
                        date: new Date(2024, 8, 22, 18, 30).toISOString(),
                    },
                    {
                        id: "id2",
                        location: "Marcey Park",
                        date: new Date(2024, 8, 22, 18, 30).toISOString(),
                    }
                ]
            },
            youtube_clips: {
                create: [
                    {
                        id: "id3",
                        youtube_id: "4guXh_aZecI",
                        title: "Full film",
                        description: "description"
                    }
                ]
            },
            year_created: 2024
        }
    });
    console.log(film);

    const film1 = await prisma.film.upsert({
        where: { id: "cuid2" }, // Use the appropriate id or unique field for the film
        update: {
            title: "Rite",
            description: "‘Rite’ follows young Miles as he navigates the forest while being hunted by a mysterious cult. Currently under production, we hope to be accepted into the 2025 Twin Cities Film Festival and shown at other local theaters after. ‘Rite’ is the first film produced by NG8 and will (hopefully) be completed by October-November 2024. Auditions are still open, resumés and headshots can be sent to the emails provided below.",
            featured_clips: [
                "/media/videos/cold sequence.mp4",
                "/media/videos/warm sequence-.mp4",
                "/media/videos/dark sequence.mp4"
            ],
            showings: {
            },
            youtube_clips: {
            },
            year_created: 2024
        },
        create: {
            id: "cuid2",
            title: "Rite",
            description: "‘Rite’ follows young Miles as he navigates the forest while being hunted by a mysterious cult. Currently under production, we hope to be accepted into the 2025 Twin Cities Film Festival and shown at other local theaters after. ‘Rite’ is the first film produced by NG8 and will (hopefully) be completed by October-November 2024. Auditions are still open, resumés and headshots can be sent to the emails provided below.",
            featured_clips: [
                "/media/videos/cold sequence.mp4",
                "/media/videos/warm sequence-.mp4",
                "/media/videos/dark sequence.mp4"
            ],
            showings: {
            },
            youtube_clips: {
            },
            year_created: 2024
        }
    });
    console.log(film1)
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })
