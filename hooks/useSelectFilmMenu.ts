import { Film } from "@prisma/client";
import { create } from "zustand";

interface SelectFilmMenuStore {
    isOpen: boolean;
    selectedFilm: Film|null;
    setSelectedFilm: (film: Film) => void;
    onOpen: () => void;
    onClose: () => void;
};

const useSelectedFilmMenu = create<SelectFilmMenuStore>((set) => ({
    isOpen: false,
    selectedFilm: null,
    setSelectedFilm: (film: Film) => set({ selectedFilm: film}),
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useSelectedFilmMenu;
