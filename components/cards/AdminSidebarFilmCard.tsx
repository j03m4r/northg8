"use client";
import { Film } from '@prisma/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { FC } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface AdminSidebarFilmCardProps {
    film: Film
};

const AdminSidebarFilmCard: FC<AdminSidebarFilmCardProps> = ({ film }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const handleOnClick = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("film", film.id);
        router.push(pathname + "?" + params.toString())
    };

    return (
        <button onClick={handleOnClick} className={twMerge('w-full px-6 py-6 text-typography-black rounded-md flex justify-start items-center gap-x-3', searchParams.get("film") === film.id && "bg-typography-black text-warm-white")}>
            <h1 className='text-5xl font-medium'>
                {film.title}
            </h1>
            <h1 className='text-2xl'>|</h1>
            <h1 className='text-2xl'>{film.year_created}</h1>
        </button>
    );
}

export default AdminSidebarFilmCard;
