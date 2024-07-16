export type NavigationLink = {
    href: string;
    title: string;
};

export type Clip = {
    src: string;
};

export type Film = {
    id: number;
    title: string;
    featured_clips: Clip[];
};

export const films: Film[] = [
    {
        id: 0,
        title: "Rite",
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
        ]
    },
    {
        id: 1,
        title: "Haleigh",
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
        ]
    },
    {
        id: 2,
        title: "Ricky",
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
        ]
    }
]
