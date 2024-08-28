import React from 'react';
import type { FC } from 'react';
import TransitionLink from './TransitionLink';

interface NavigationButtonProps {
    href: string;
    title: string;
}

const NavigationButton: FC<NavigationButtonProps> = ({
    href, title
}) => {
    return (
        <TransitionLink href={href} className="w-full h-full text-typography-black hover:text-warm-white relative 
        transition duration-300 ease-in-out group flex justify-center items-center z-20 text-xl 2xl:text-2xl font-semibold">
            <div className="absolute flex rounded-sm -z-10 h-0 w-full group-hover:h-full bottom-0 bg-typography-black duration-300 ease-in-out" />
            {title}
        </TransitionLink>
    );
}
export default NavigationButton;
