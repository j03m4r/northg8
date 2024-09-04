export type NavigationLink = {
    href: string;
    title: string;
};

export type Clip = {
    src: string;
};

export type Showing = {
    id: number;
    location: string;
    date: Date;
};

export type YoutubeClip = {
    id: number;
    youtube_id: string;
    title: string;
    description?: string;
};

export type Film = {
    id: number;
    title: string;
    description: string;
    featured_clips: Clip[];
    showings: Showing[];
    youtube_clips: YoutubeClip[];
    year_created: number;
};

export const films: Film[] = [
    {
        id: 0,
        title: "Rite",
        description: "‘Rite’ follows young Miles as he navigates the forest while being hunted by a mysterious cult. Currently under production, we hope to be accepted into the 2025 Twin Cities Film Festival and shown at other local theaters after. ‘Rite’ is the first film produced by NG8 and will (hopefully) be completed by October-November 2024. Auditions are still open, resumés and headshots can be sent to the emails provided below.",
        featured_clips: [
            {
                src: "/media/videos/cold sequence.mp4"
            },
            {
                src: "/media/videos/warm sequence-.mp4"
            },
            {
                src: "/media/videos/dark sequence.mp4"
            }
        ],
        showings: [
            {
                id: 0,
                location: "Como Park",
                date: new Date(2024, 8, 22, 18, 30)
            },
            {
                id: 1,
                location: "Marcey Park",
                date: new Date(2024, 8, 22, 18, 30)
            }
        ],
        youtube_clips: [
            {
                id: 0,
                youtube_id: "4guXh_aZecI",
                title: "Full film",
                description: "description"
            }
        ],
        year_created: 2024
    },
    {
        id: 1,
        title: "Haleigh",
        description: "‘Rite’ follows young Miles as he navigates the forest while being hunted by a mysterious cult. Currently under production, we hope to be accepted into the 2025 Twin Cities Film Festival and shown at other local theaters after. ‘Rite’ is the first film produced by NG8 and will (hopefully) be completed by October-November 2024. Auditions are still open, resumés and headshots can be sent to the emails provided below.",
        featured_clips: [
            {
                src: "/media/videos/warm sequence-.mp4"
            },
            {
                src: "/media/videos/cold sequence.mp4"
            },
            {
                src: "/media/videos/dark sequence.mp4"
            }
        ],
        showings: [],
        youtube_clips: [],
        year_created: 2024
    },
    {
        id: 2,
        title: "Ricky",
        description: "‘Rite’ follows young Miles as he navigates the forest while being hunted by a mysterious cult. Currently under production, we hope to be accepted into the 2025 Twin Cities Film Festival and shown at other local theaters after. ‘Rite’ is the first film produced by NG8 and will (hopefully) be completed by October-November 2024. Auditions are still open, resumés and headshots can be sent to the emails provided below.",
        featured_clips: [
            {
                src: "/media/videos/dark sequence.mp4"
            },
            {
                src: "/media/videos/cold sequence.mp4"
            },
            {
                src: "/media/videos/warm sequence-.mp4"
            },
        ],
        showings: [],
        youtube_clips: [],
        year_created: 2025
    }
]

export function dateToString(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()-12);
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}/${month}/${day} AT ${hours}:${minutes}`;
};
