"use client";
import React from 'react'
import { Film } from '@prisma/client';
import SectionHeader from './typography/SectionHeader';

interface props {
    film?: Film;
};

const AdminFilmPageContent: React.FC<props> = ({ film }) => {
    return (
        <div className='w-full h-full'>
            {
                film ? (
                    <SectionHeader>
                        {film.title}
                    </SectionHeader>
                ) : (
                    <div className='w-full h-full flex justify-center items-center'>
                        <SectionHeader>
                            Select a film on sidebar to edit.
                        </SectionHeader>
                    </div>
                )
            }
        </div>
    )
}

export default AdminFilmPageContent;
