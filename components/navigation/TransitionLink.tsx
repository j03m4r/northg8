"use client";
import type { FC, ReactNode } from 'react';
import Link, { LinkProps } from "next/link"
import { useRouter } from 'next/navigation';

interface TransitionLinkProps extends LinkProps {
    children: ReactNode,
    href: string;
    className?: string;
};

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const TransitionLink: FC<TransitionLinkProps> = ({
    children, href, className, ...props
}) => {
    const router = useRouter();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | null) => {
        if (e != null) {
            e.preventDefault();
        }

        const transitionColumn1 = document.getElementById("transition-column-1");
        const transitionColumn2 = document.getElementById("transition-column-2");

        if (!(transitionColumn1 && transitionColumn2)) {
            router.push(href);
            return;
        }

        transitionColumn1.classList.add("transitionEnter");
        transitionColumn2.classList.add("transitionEnterDelayed");

        await sleep(750);
        router.push(href);
        await sleep(750);

        // Hack to keep the delayed column 2 from showing background for a split second
        transitionColumn1.style.top = "0";
        transitionColumn2.style.top = "0";

        // Animate back to original state after navigation
        transitionColumn1.classList.add("transitionExit");
        transitionColumn2.classList.add("transitionExitDelayed");

        await sleep(1000);
        transitionColumn1.classList.remove("transitionExit");
        transitionColumn2.classList.remove("transitionExitDelayed");
        transitionColumn1.classList.remove("transitionEnter");
        transitionColumn2.classList.remove("transitionEnterDelayed");

        // Ensure the elements are in their starting position
        transitionColumn1.style.height = "100%";
        transitionColumn1.style.top = "100%";
        transitionColumn2.style.height = "100%";
        transitionColumn2.style.top = "100%";
    };

    return (
        <Link onClick={handleTransition} href={href} className={className} {...props}>{children}</Link>
    );
};

export default TransitionLink;
