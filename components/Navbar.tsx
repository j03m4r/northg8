"use client";
import React from 'react'
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';
import { NavigationLink } from '@/types';
import TransitionLink from './utils/TransitionLink';

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

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className={twMerge("fixed z-20 w-full flex justify-between items-center px-6 py-3 mix-blend-difference text-warm-white", pathname == "/" && "hidden")}>
            <TransitionLink href="/" className="hover:underline">
                Home
            </TransitionLink>
            <div className="flex gap-x-12">
                {navigation_links.map((link, idx) => (
                    <TransitionLink href={link.href} key={idx} className="hover:underline">
                        {link.title}
                    </TransitionLink>
                ))}
            </div>
        </div>
    )
}

