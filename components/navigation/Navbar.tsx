"use client";
import React from 'react'
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';
import { NavigationLink } from '@/types';
import TransitionLink from './TransitionLink';
import useSelectedFilmMenu from '@/hooks/useSelectFilmMenu';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';

const navigation_links: NavigationLink[] = [
    {
        href: "/films",
        title: "Film collection"
    },
    {
        href: "/showings",
        title: "Showings"
    }
];

export default function Navbar() {
    const pathname = usePathname();
    const { isOpen, onOpen, onClose, selectedFilm } = useSelectedFilmMenu();

    return (
        <div className={twMerge("text-lg lg:text-xl h-[10vh] bg-warm-white fixed z-30 top-0 w-screen flex justify-between items-center px-6 py-3 text-typography-black border-b border-typography-black", pathname == "/" && "hidden")}>
            <TransitionLink href="/" className="hover:underline">
                Home
            </TransitionLink>
            <button onClick={isOpen ? onClose : onOpen} className={twMerge('flex items-center justify-center gap-x-1 border border-typography-black rounded-sm px-2 py-1 lg:hidden', pathname !== "/films" && "hidden")}>
                {selectedFilm?.title} {isOpen ? <FaLongArrowAltUp size={12} />: <FaLongArrowAltDown size={12} />}
            </button>
            <div className="flex gap-x-6 lg:gap-x-12">
                {navigation_links.map((link, idx) => (
                    <TransitionLink href={link.href} key={idx} className={twMerge("hover:underline", pathname == link.href && "underline")}>
                        {link.title}
                    </TransitionLink>
                ))}
            </div>
        </div>
    )
}

