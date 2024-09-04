import { getFilms } from "@/actions/getFilms";
import LandingPageContent from "@/components/LandingPageContent";

export default async function Home() {
    const films = await getFilms();

    return (
        <LandingPageContent featured_film={films[films.length - 1]} />
    );
}

