"use client";
import React from "react"
import { dateToString, films } from "@/types";
import { twMerge } from "tailwind-merge";
import SectionHeader from "@/components/typography/SectionHeader";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";

export default function FilmsPage() {
    return (
        <main className="text-typography-black bg-warm-white 2xl:text-xl flex flex-col w-full h-full pt-[10vh]"> {/* Adjusted to h-full and overflow-hidden */}
            {
                films.map((film) => (
                    <div key={`film_${film.id}`} className="flex flex-col gap-y-6 mt-6">
                        <SectionHeader className={twMerge("ml-12", film.showings.length === 0 && "hidden")}>
                            {film.title}
                        </SectionHeader>
                        {
                            film.showings.length !== 0 &&
                            film.showings.map((showing, idx) => {
                                if (showing.date > new Date()) {
                                    return (
                                        <div key={`showing_${idx}`} className="flex gap-x-6 w-full h-fit items-center justify-start gap-y-6 p-6">
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
                ))}
        </main>
    );
}
