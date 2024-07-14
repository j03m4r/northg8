import React, { ReactNode } from "react";

interface props {
    children: ReactNode;
};

const SectionHeader: React.FC<props> = ({
    children
}) => {
    return (
        <h1 className="font-semibold text-5xl text-typography-black">
            {children}
        </h1>
    );
};

export default SectionHeader;
