import React from 'react'
import { useFormStatus } from "react-dom";

interface props {
    title: string;
};

export default function SubmitButton({ title }: props) {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending} type="submit" className='disabled:opacity-50 flex w-full bg-typography-black justify-center items-center py-3 text-lg font-semibold text-warm-white rounded-md'>
            {pending ? "Loading..." : title}
        </button>
    )
}

