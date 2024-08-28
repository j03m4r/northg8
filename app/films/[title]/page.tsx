import SectionHeader from "@/components/typography/SectionHeader";
import { Film, getFilmByTitle } from "@/types";
import Link from "next/link";
import FilmYoutubeClip from "./components/FilmYoutubeClip";

interface FilmPageParams {
    params: {
        title: string;
    }
};

export default function FilmDetails({ params }: FilmPageParams) {
    const { title } = params;
    const film: Film | undefined = getFilmByTitle(title);

    return (
        <main className="pt-[10vh] bg-warm-white relative text-typography-black 2xl:text-xl w-full h-full overflow-y-scroll overflow-x-hidden">
            {film ? (
                <div className="flex flex-col w-full">
                    <div className="grid grid-cols-1">
                        <video className="w-full" loop muted autoPlay preload="none">
                            <source src={film.featured_clips[0].src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="flex">
                            <video className="w-1/2" loop muted autoPlay preload="none">
                                <source src={film.featured_clips[1].src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <video className="w-1/2" loop muted autoPlay preload="none">
                                <source src={film.featured_clips[2].src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="flex flex-col border-t border-typography-black min-h-screen">
                        <div className="flex w-full border-b border-typography-black">
                            <div className="p-6 lg:p-12 min-h-full w-1/3 border-r border-typography-black">
                                <SectionHeader>
                                    {title.charAt(0).toUpperCase() + title.slice(1)}
                                </SectionHeader>
                            </div>
                            <div className="p-6 lg:p-12 flex flex-col w-2/3 gap-y-6">
                                <SectionHeader>
                                    Description
                                </SectionHeader>
                                <p>
                                    {film.description}
                                </p>
                            </div>
                        </div>
                        <div className="p-6 lg:p-12 w-full flex flex-col gap-y-6 lg:gap-y-12">
                            <SectionHeader>
                                Clips
                            </SectionHeader>
                            <div className="flex flex-col gap-y-12">
                                {film.youtube_clips.map((youtube_clip, idx) => 
                                    <FilmYoutubeClip key={`youtube_clip_${idx}`} youtubeId={youtube_clip.youtube_id} title={youtube_clip.title} description={youtube_clip.description || ""} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="p-6 lg:p-12 border-t border-typography-black bg-typography-black text-warm-white grid grid-cols-2 gap-x-6 w-full">
                        <div className="flex flex-col gap-y-6">
                            <div className="flex flex-col gap-y-3 w-full">
                                <h2 className="text-xl font-semibold">More North G8</h2>
                                <div className="text-md flex flex-col w-full">
                                    <Link className="hover:bg-typography-black hover:text-warm-white w-full" href="/instalink">Youtube</Link>
                                    <Link className="hover:bg-typography-black hover:text-warm-white w-full" href="/instalink">Instagram</Link>
                                    <Link className="hover:bg-typography-black hover:text-warm-white w-full" href="/twitter">Twitter</Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <h2 className="text-xl font-semibold">Contact us</h2>
                                <div className="text-md flex flex-col w-full">
                                    <Link className="hover:bg-typography-black hover:text-warm-white w-full" href="/email">email@example.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full">
                            <h1 className="text-5xl font-medium">LOGO</h1>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full h-full flex flex-col justify-center items-center gap-y-6">
                    <SectionHeader>No film with this title.</SectionHeader>
                    <div className="flex gap-x-6 justify-center items-center">
                        <Link href="/" className="hover:underline">Home</Link>
                        <Link href="/films" className="hover:underline">Film collection</Link>
                        <Link href="/showings" className="hover:underline">Showings</Link>
                    </div>
                </div>
            )
            }
            <p className="fixed bottom-6 left-12 text-warm-white mix-blend-difference">(scroll)</p>
        </main >
    );
}

