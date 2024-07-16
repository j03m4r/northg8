"use client";
import AnimatedTitle from "@/components/typography/AnimatedTitle";
import ParallaxClip from "@/components/ParallaxClip";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import SectionHeader from "@/components/typography/SectionHeader";
import NavigationButton from "@/components/buttons/NavigationButton";
import TransitionLink from "@/components/utils/TransitionLink";
import { NavigationLink, Clip } from "@/types";

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

const navigation_links: NavigationLink[] = [
    {
        href: "/films",
        title: "Film collection"
    },
    {
        href: "/showings",
        title: "Showings"
    },
    {
        href: "/about",
        title: "About northg8"
    }
];

export default function Home() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <div className="flex w-full">
            <div className="w-1/2">
                <main>
                    {/* Could turn this into "featured clips element" */}
                    <div ref={container} className="relative w-full group flex flex-col border-b border-typography-black">
                        {
                            featured_clips.map((clip, idx) => {
                                const targetScale = 1 - (featured_clips.length - idx) * 0.05;
                                return (<ParallaxClip key={idx} clip={clip} i={idx} range={[idx * 0.1, 1]} targetScale={targetScale} progress={scrollYProgress} />);
                            })
                        }
                    </div>
                    <TransitionLink href="films/rite" className="min-h-[25vh] text-typography-black hover:text-warm-white relative group
                    ease-in-out z-20 transition duration-300">
                        <div className="flex flex-col justify-between gap-y-6 p-6 border-b border-typography-black">
                            <div className="flex flex-row justify-between pr-4 items-center w-full">
                                <h1 className="font-semibold text-5xl">Rite</h1>
                                <FaLongArrowAltUp className="z-20 opacity-0 group-hover:opacity-100 rotate-90 -translate-x-full group-hover:translate-x-0 duration-300 transition ease-in-out text-typography-black group-hover:text-warm-white" size={32} />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum sapien nisi, et ornare tortor varius sed. Etiam nec mi eu nisl volutpat congue sed finibus tellus. Phasellus venenatis orci in scelerisque eleifend. Fusce rutrum, augue nec feugiat elementum, nibh est feugiat eros, eu molestie massa odio sed urna. Nullam ultrices ante a feugiat faucibus. Proin in tincidunt metus. Pellentesque porta justo ut purus faucibus eleifend.
                            </p>
                        </div>
                        <div className="absolute flex -z-10 h-0 w-full group-hover:h-full bottom-0 bg-typography-black group-hover:border border-typography-black duration-300 ease-in-out" />
                    </TransitionLink>
                    <div className="p-6 flex flex-col gap-y-6 text-typography-black">
                        <SectionHeader>
                            About North G8
                        </SectionHeader>
                        <div className="flex flex-col indent-4 gap-y-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis mauris enim, non tristique magna consectetur sed. In sed mattis est. Curabitur placerat cursus viverra. Suspendisse facilisis sodales nunc, eu posuere erat pharetra non. Sed ac cursus odio. Morbi at metus quis dolor convallis mollis. Quisque quis magna a nibh bibendum aliquet non quis libero. Etiam placerat, leo sit amet lacinia laoreet, est ante volutpat erat, vel dignissim mi ante vitae risus. Nam nisi nisi, volutpat in sodales vel, suscipit eu lorem. Nulla hendrerit lacus mauris, non interdum nibh vehicula a. Ut tincidunt augue magna, sit amet vehicula nisl congue et. Curabitur imperdiet erat eget faucibus blandit. Mauris elementum aliquam tempus. Vestibulum ornare nisi elit, rhoncus lobortis libero dapibus in.
                            </p>
                            <p>
                                Pellentesque placerat fermentum ullamcorper. Morbi felis metus, elementum at lectus eget, dignissim vehicula massa. Proin ut ex at sem viverra ornare. Donec lacinia augue id tellus blandit posuere. Cras eget porta enim, non finibus nibh. Mauris rhoncus nibh eu augue ultrices, sed facilisis est fermentum. Aliquam erat volutpat. Cras volutpat id sapien at dictum. Cras magna nisl, consequat sed ligula vitae, dapibus iaculis elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris pellentesque euismod aliquam. Nam ac consectetur lacus, sed maximus risus. Maecenas leo dui, iaculis ut cursus eu, pulvinar nec ex. Maecenas gravida ipsum sit amet purus dictum accumsan. Donec quis justo ac ante rhoncus fermentum.
                            </p>
                            <p>
                                Nullam posuere, velit nec condimentum hendrerit, lacus leo molestie purus, sit amet efficitur augue metus sed orci. Phasellus lobortis felis enim, eu convallis orci tincidunt eget. Sed suscipit, est vel mattis consequat, tellus ante aliquet nunc, vitae commodo nunc turpis quis elit. Quisque dolor urna, molestie nec lobortis eget, malesuada nec ex. Vestibulum ultrices nibh suscipit sodales hendrerit. In commodo, ligula nec faucibus eleifend, turpis justo tincidunt erat, non rhoncus purus diam sit amet ex. Vivamus iaculis mi eget hendrerit scelerisque. Fusce pharetra augue nec nunc vulputate, sit amet ornare ipsum dignissim. Quisque a auctor sem. Phasellus bibendum tortor ipsum, non tincidunt libero dapibus ut. Mauris ac ante dolor. Praesent finibus dui at risus mattis pellentesque. Etiam ut nunc vel leo pellentesque varius. Aliquam erat volutpat.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
            <div className="fixed left-1/2 flex flex-col w-1/2 h-screen border-typography-black border-l">
                <div className="flex justify-center items-center w-full h-1/2 border-typography-black border-b">
                    <AnimatedTitle />
                </div>
                <div className="flex flex-col w-full h-1/2 justify-center">
                    {
                        navigation_links.map((link, idx) => (
                            <NavigationButton key={idx} href={link.href} title={link.title} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

