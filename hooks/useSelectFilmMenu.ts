import { Film, films } from "@/types";
import { create } from "zustand";

interface SelectFilmMenuStore {
    isOpen: boolean;
    selectedFilm?: Film;
    setSelectedFilm: (film: Film) => void;
    onOpen: () => void;
    onClose: () => void;
};

const useSelectedFilmMenu = create<SelectFilmMenuStore>((set) => ({
    isOpen: false,
    selectedFilm: films[0],
    setSelectedFilm: (film: Film) => set({ selectedFilm: film}),
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useSelectedFilmMenu;
