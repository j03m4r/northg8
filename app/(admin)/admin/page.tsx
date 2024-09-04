"use client";
import SectionHeader from '@/components/typography/SectionHeader'
import React, { useEffect } from 'react'
import SignInForm from '@/components/forms/SignInForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push("/admin/films")
        }
    }, [session])

    return (
        <div className='mx-auto max-w-screen-lg h-screen flex flex-col'>
            <SectionHeader className='m-12'>
                Sign in
            </SectionHeader>
            <section className='flex justify-center items-center mt-24'>
                <SignInForm />
            </section>
        </div>
    )
}

