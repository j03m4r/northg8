"use client";
import React from "react"
import { dateToString } from "@/types";
import { twMerge } from "tailwind-merge";
import SectionHeader from "@/components/typography/SectionHeader";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { Film } from "@prisma/client";

export default function ShowingsPageContent({ films }: { films: Film[] }) {
    return (
        <main className="mx-auto max-w-screen-lg text-typography-black bg-warm-white 2xl:text-xl flex flex-col w-full h-full pt-[10vh]"> {/* Adjusted to h-full and overflow-hidden */}
            {
                films.map((film, idx) => (
                    <div key={`film_${film.id}`} className="flex flex-col gap-y-6 mt-6">
                        <div className="w-full flex items-center justify-start">
                            {/* @ts-ignore */}
                            <SectionHeader className={twMerge("ml-12 w-full", film.showings.length === 0 && "hidden", idx < films.length - 1 && "pb-6 border-b border-typography-black")}>
                                {film.title}
                            </SectionHeader>
                        </div>
                        <div className="flex flex-col w-full justify-start items-center">
                            {
                                // @ts-ignore
                                film.showings.length !== 0 &&
                                // @ts-ignore
                                film.showings.map((showing, idx) => {
                                    if (showing.date > new Date()) {
                                        return (
                                            <div key={`showing_${idx}`} className="flex gap-x-6 h-fit items-center justify-start gap-y-6 p-6">
                                                <SectionHeader>
                                                    {idx + 1}.
                                                </SectionHeader>
                                                <div className="flex flex-col justify-center items-center gap-y-6">
                                                    <FaLocationDot size={60} />
                                                    <IoTimeOutline size={36} />
                                                </div>
                                                <div className="flex flex-col justify-center items-start gap-y-6">
                                                    <SectionHeader>
                                                        {showing.location}
                                                    </SectionHeader>
                                                    <p className="2xl:text-2xl">
                                                        {dateToString(showing.date)}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return null
                                    }
                                })
                            }

                        </div>
                    </div>
                ))}
        </main>
    );
}
