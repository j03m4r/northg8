import React from 'react';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import { Film } from '@prisma/client';

interface props {
    children: React.ReactNode;
    films: Film[];
};

const DashboardWrapper: React.FC<props> = ({ children, films }) => {
    return (
        <div className='flex flex-row w-full h-full'>
            <DashboardSidebar films={films} />
            <main className='p-6 w-3/4 border-l border-typography-black h-full max-h-screen overflow-y-scroll'>
                {children}
            </main>
        </div>
    )
}

export default DashboardWrapper;
