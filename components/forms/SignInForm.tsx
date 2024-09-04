import React from 'react'
import SubmitButton from '../buttons/SubmitButton'
import { signIn } from '@/actions/authenticationActions'

export default function SignInForm() {
    return (
        <form action={signIn} className='flex flex-col w-[400px] gap-y-6 justify-center items-center'>
            <div className='w-full'>
                <label className='block text-sm text-typography-black font-medium'>Email</label>
                <input type="email" placeholder="Email" id="emailInput" name="email" className='border border-typography-black mt-2 w-full bg-transparent rounded-md px-6 py-3' />
            </div>
            <div className='w-full'>
                <label className='block text-sm text-typography-black font-medium'>Password</label>
                <input type="password" placeholder="Password" id="passwordInput" name="password" className='border border-typography-black mt-2 w-full bg-transparent rounded-md px-6 py-3' />
            </div>
            <SubmitButton title='Sign in'/>
        </form>
    )
}

