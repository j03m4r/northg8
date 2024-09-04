import { getFilms } from '@/actions/getFilms';
import DashboardWrapper from '@/components/layout/DashboardWrapper'
import React from 'react'
import AdminFilmPageContent from "@/components/AdminFilmPageContent"

export default async function AuthFilmsPage({ searchParams }: {searchParams: { film: string }}) {
    const films = await getFilms();
    const film = films.find((film) => film.id == searchParams.film);

    return (
        <DashboardWrapper films={films}>
            <AdminFilmPageContent film={film} />
        </DashboardWrapper>
    )
}

