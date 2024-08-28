import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface props {
    children: ReactNode;
    className?: string;
};

const SectionHeader: React.FC<props> = ({
    children, className
}) => {
    return (
        <h1 className={twMerge("font-semibold text-5xl 2xl:text-6xl text-typography-black", className)}>
            {children}
        </h1>
    );
};

export default SectionHeader;
