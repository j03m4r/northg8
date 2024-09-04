import React from 'react'
import ShowingsPageContent from '@/components/ShowingsPageContent'
import { getFilms } from '@/actions/getFilms'

export default async function ShowingsPage() {
    const films = await getFilms();

    return (
        <ShowingsPageContent films={films} />
    )
}

