"use client";
import SectionHeader from '@/components/typography/SectionHeader'
import React, { useState } from 'react'
import SubmitButton from '@/components/buttons/SubmitButton'
import { SubmitHandler, useForm } from "react-hook-form";
import { postFilmClip } from '@/actions/postFilmClip';
import StyledFileInput from '@/components/forms/inputs/StyledFileInput';
import { FaPlus } from 'react-icons/fa';
import DatePickerInput from '@/components/forms/inputs/DatePickerInput';
import { FilmData, YouTubeClip, Showing } from '@/actions/postFilm';
import { useRouter } from 'next/navigation';

type Inputs = {
    title: string;
    description: string;
    videoClip1: FileList;
    videoClip2: FileList;
    videoClip3: FileList;
};

export default function CreateFilmPage() {
    const [error, setError] = useState<string | null>(null);
    const [isAddingYoutubeClip, setIsAddingYoutubeClip] = useState(false);
    const [youtubeClips, setYoutubeClips] = useState<YouTubeClip[]>([]);
    const [youtubeClipTitle, setYoutubeClipTitle] = useState<string>("");
    const [youtubeClipId, setYoutubeClipId] = useState<string>("");
    const [youtubeClipDescription, setYoutubeClipDescription] = useState<string>("");
    const [showingLocation, setShowingLocation] = useState<string>("");
    const [showingDate, setShowingDate] = useState<Date | null>(null);
    const [isAddingShowing, setIsAddingShowing] = useState(false);
    const [showings, setShowings] = useState<Showing[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const router = useRouter();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setIsLoading(true);
        const files = [data.videoClip1, data.videoClip2, data.videoClip3];
        const uploadPromises = Object.entries(files).map(async ([_, fileList]) => {
            const url = await postFilmClip(fileList);
            return url;
        });

        const uploadedUrls = await Promise.all(uploadPromises);
        // if (uploadedUrls.length !== 3) {
        //     setError("File upload failed. Video file may be greater than 50MB.");
        //     return;
        // }

        const filmData: FilmData = {
            title: data.title,
            description: data.description,
            featured_clips: uploadedUrls,
            youtube_clips: youtubeClips,
            year_created: new Date().getFullYear(),
            showings: showings
        }

        try {
            const response = await fetch('/api/films', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(filmData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            if (result != null) {
                setIsLoading(false)
                return router.push("admin/films");
            }
            
        } catch (error) {
            setError(`Error creating film: ${error}`);
        }

        setIsLoading(false);
    };

    return (
        <div className='m-12 mx-auto max-w-screen-lg h-screen flex flex-col gap-y-12'>
            <SectionHeader>
                Create Film
            </SectionHeader>
            <section className='flex justify-center items-center pb-12'>
                {error && <div className='w-full flex justify-center items-center text-red-800 border border-red-800 bg-red-400'>{error}</div>}
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[600px] gap-y-6 justify-center items-start'>
                    <div className='w-full border-b border-typography-black pb-6 flex flex-col gap-y-3'>
                        <label className='block text-5xl text-typography-black font-medium'>Film title</label>
                        <input type="text" placeholder="Awesome film title" id="title" {...register("title", { required: "Title is required" })} className='border border-typography-black mt-2 w-full bg-transparent rounded-md px-6 py-3' />
                    </div>
                    <div className='w-full border-b border-typography-black pb-6 flex flex-col gap-y-3'>
                        <label className='block text-5xl text-typography-black font-medium'>Film description</label>
                        <textarea placeholder="This movie is about..." rows={6} id="description" {...register("description", { required: "Description is required" })} className='border border-typography-black mt-2 w-full bg-transparent rounded-md px-6 py-3' />
                    </div>
                    <div className='flex flex-col gap-y-6 w-full border-b border-typography-black pb-6'>
                        <h1 className='text-5xl text-typography-black font-medium'>Featured clips</h1>
                        <StyledFileInput
                            id="videoClip1"
                            label="Upload featured clip 1"
                            register={register}
                            required={true}
                            error={errors.videoClip1}
                        />
                        <StyledFileInput
                            id="videoClip2"
                            label="Upload featured clip 2"
                            register={register}
                            required={true}
                            error={errors.videoClip2}
                        />
                        <StyledFileInput
                            id="videoClip3"
                            label="Upload featured clip 3"
                            register={register}
                            required={true}
                            error={errors.videoClip3}
                        />
                    </div>
                    <div className='flex flex-col gap-y-6 w-full border-b border-typography-black pb-6'>
                        <h1 className='text-5xl text-typography-black font-medium'>Youtube clips</h1>
                        <button onClick={(e) => { e.preventDefault(), setIsAddingYoutubeClip((prev) => !prev) }} className='w-full py-6 px-6 flex justify-center items-center text-typography-black border border-typography-black rounded-md'><FaPlus size={12} /></button>
                        {
                            isAddingYoutubeClip && (
                                <div className='border border-typography-black rounded-md p-6 flex flex-col gap-y-3'>
                                    <div className='flex gap-x-3'>
                                        <div className='w-full'>
                                            <label className='block text-sm text-typography-black font-medium'>Youtube clip title</label>
                                            <input type="email" placeholder="Clip title" id="youtubeClipTitle" name="youtubeClipTitle" className='border border-typography-black mt-2 w-full bg-transparent rounded-md px-6 py-3' value={youtubeClipTitle} onChange={(e) => setYoutubeClipTitle(e.target.value)} />
                                        </div>
                                        <div className='w-full'>
                                            <label className='block text-sm text-typography-black font-medium'>Youtube clip ID</label>
                                            <input type="text" placeholder="sQ3fPyko6o8" id="youtubeClipId" name="youtubeClipId" className='border border-typography-black mt-2 w-full bg-transparent rounded-md px-6 py-3' value={youtubeClipId} onChange={(e) => setYoutubeClipId(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <label className='block text-sm text-typography-black font-medium'>Youtube clip description</label>
                                        <textarea placeholder="Youtube clip description" id="youtubeClipDescription" onChange={(e) => setYoutubeClipDescription(e.target.value)} value={youtubeClipDescription} rows={3} name="youtubeClipDescription" className='border border-typography-black mt-2 w-full bg-transparent rounded-md px-6 py-3' />
                                    </div>
                                    <button className='w-full py-6 px-6 flex justify-center items-center text-typography-black border border-typography-black rounded-md' onClick={(e) => { e.preventDefault, setYoutubeClips((prev) => [...prev, { title: youtubeClipTitle, description: youtubeClipDescription, youtube_id: youtubeClipId }]), setIsAddingYoutubeClip(false) }}>Add Youtube clip</button>
                                </div>
                            )
                        }
                        {
                            youtubeClips.map((clip, idx) => (
                                <div key={`youtube_clip_${idx}`} className='flex flex-col gap-y-3'>
                                    <div className='flex gap-x-3'>
                                        <div className='w-full'>
                                            <label className='block text-sm text-typography-black font-medium'>Youtube clip title</label>
                                            <h1 className='mt-2 w-full bg-transparent px-6 py-3'>{clip.title}</h1>
                                        </div>
                                        <div className='w-full'>
                                            <label className='block text-sm text-typography-black font-medium'>Youtube clip ID</label>
                                            <h1 className='mt-2 w-full bg-transparent px-6 py-3'>{clip.youtube_id}</h1>
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <label className='block text-sm text-typography-black font-medium'>Youtube clip description</label>
                                        <p className='mt-2 w-full bg-transparent px-6 py-3'>{clip.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex flex-col gap-y-6 w-full border-b border-typography-black pb-6'>
                        <h1 className='text-5xl text-typography-black font-medium'>Film showings</h1>
                        <button onClick={(e) => { e.preventDefault(), setIsAddingShowing((prev) => !prev) }} className='w-full py-6 px-6 flex justify-center items-center text-typography-black border border-typography-black rounded-md'><FaPlus size={12} /></button>
                        {
                            isAddingShowing && (
                                <div className='border border-typography-black rounded-md p-6 flex flex-col w-full gap-y-6'>
                                    <div className='w-full'>
                                        <label className='block text-sm text-typography-black font-medium'>Showing Location</label>
                                        <input type="text" placeholder="Como Park" id="showingLocation" name="showingLocation" className='border border-typography-black mt-2 w-full bg-transparent rounded-md px-6 py-3' value={showingLocation} onChange={(e) => setShowingLocation(e.target.value)} />
                                    </div>
                                    <div className='w-full'>
                                        <label className='block text-sm text-typography-black font-medium'>Showing Date</label>
                                        <DatePickerInput onDateChange={(date: Date | null) => setShowingDate(date)} />
                                    </div>
                                    <button type='button' className='w-full py-6 px-6 flex justify-center items-center text-typography-black border border-typography-black rounded-md' onClick={(e) => { e.preventDefault, setShowings((prev) => [...prev, { location: showingLocation, date: showingDate || new Date() }]), setIsAddingShowing(false) }}>Add showing</button>
                                </div>
                            )
                        }
                        {
                            showings.map((showing, idx) => (
                                <div key={`showing_${idx}`} className='flex flex-col gap-y-6 w-full'>
                                    <h1 className='text-xl'>{showing.location}</h1>
                                    <h1>{showing.date.toString()}</h1>
                                </div>
                            ))
                        }
                    </div>
                    <SubmitButton title="Create film" disabled={isLoading} />
                </form>
            </section>
        </div>
    );
};

