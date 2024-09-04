import { getFilms } from "@/actions/getFilms";
import FilmsPageContent from "@/components/FilmsPageContent";

export default async function FilmsPage() {
    const films = await getFilms();

    return (
        <FilmsPageContent films={films} />
    )
}
