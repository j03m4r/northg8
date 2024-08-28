import React from 'react'
import TransitionLink from './TransitionLink';
import { FaLongArrowAltUp } from "react-icons/fa";

interface props {
    title: string;
    description: string;
};

const FilmNavigationButton: React.FC<props> = ({
    title, description
}) => {
    return (
        <TransitionLink href="films/rite" className="2xl:text-xl w-full flex flex-col justify-center text-typography-black hover:text-warm-white relative group
                    ease-in-out z-10 transition duration-300 h-fit align-bottom md:h-full overflow-hidden">
            <div className="flex flex-col h-full justify-center gap-y-6 p-6">
                <div className="flex flex-row justify-between pr-4 items-center w-full">
                    <div className='gap-x-6 flex justify-between items-center'>
                        <h1 className="font-semibold text-5xl 2xl:text-6xl">{title}</h1>
                        <div className='px-2 py-1 bg-typography-black rounded-xl text-warm-white text-[1rem] group-hover:bg-warm-white group-hover:text-typography-black ease-in-out transition duration-300'>Click to see more</div>
                    </div>
                    <FaLongArrowAltUp className="2xl:hidden z-20 opacity-0 group-hover:opacity-100 rotate-90 -translate-x-full group-hover:translate-x-0 duration-300 transition ease-in-out text-typography-black group-hover:text-warm-white" size={36} />
                    <FaLongArrowAltUp className="hidden 2xl:block z-20 opacity-0 group-hover:opacity-100 rotate-90 -translate-x-full group-hover:translate-x-0 duration-300 transition ease-in-out text-typography-black group-hover:text-warm-white" size={48} />
                </div>
                <p className="truncate">
                    {description}
                </p>
            </div>
            <div className="absolute flex -z-10 h-0 w-full group-hover:h-full bottom-0 bg-typography-black group-hover:border border-typography-black duration-300 ease-in-out" />
        </TransitionLink>
    )
}

export default FilmNavigationButton;
