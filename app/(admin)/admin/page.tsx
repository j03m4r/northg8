"use client";
import SectionHeader from '@/components/typography/SectionHeader'
import React from 'react'
import SignInForm from '@/components/forms/SignInForm';

export default function AdminPage() {
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

