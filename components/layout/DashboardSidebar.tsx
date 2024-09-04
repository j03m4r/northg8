"use client";
import React from 'react'
import SectionHeader from '../typography/SectionHeader'
import { Film } from '@prisma/client'
import { useRouter } from 'next/navigation';
import { signOut } from '@/actions/authenticationActions';
import AdminSidebarFilmCard from '../cards/AdminSidebarFilmCard';

export default function DashboardSidebar({ films }: { films: Film[] }) {
    const router = useRouter(); // router for navigating to create-film page

    return (
        <div className='w-1/3 h-full flex flex-col justify-between items-start max-h-screen p-6 gap-y-6'>
            <div className='flex flex-col gap-y-6 w-full'>
                <div className='flex flex-row justify-between items-center w-full border-b border-typography-black pb-6'>
                    <SectionHeader>
                        Films
                    </SectionHeader>
                    <button onClick={() => router.push("/admin/films/create-film")} className='flex bg-typography-black justify-center items-center py-3 px-6 text-lg font-semibold text-warm-white rounded-md'>
                        Create Film
                    </button>
                </div>
                <div className='flex flex-col gap-y-6 overflow-y-scroll'>
                    {
                        films.map((film, idx) => (
                            <div key={film.id} className="flex flex-col gap-y-6">
                                <AdminSidebarFilmCard film={film} />
                                {idx < films.length - 1 && <div className='w-full border-t border-typography-black'/>}
                            </div>
                        ))
                    }
                </div>
            </div>
            <button onClick={() => signOut()} className='disabled:opacity-50 flex w-full bg-typography-black justify-center items-center py-3 text-lg font-semibold text-warm-white rounded-md'>
                Sign Out
            </button>
        </div>
    )
}

