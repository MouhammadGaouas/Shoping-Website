"use client"

import React, { useState } from 'react'

interface Info {
    firstName: string;
    lastName: string;
    phoneNumber: string
    email: string;
    password: string;
    agree: boolean;
}

const Page = () => {

    return (
        <div className='bg-[#262032] min-h-screen flex items-center justify-center p-6'>
            <main className='h-160 flex items-center justify-between gap-30'>

                <div className='flex-1 h-full overflow-hidden rounded-2xl'>
                    <img
                        className='h-full w-full object-cover'
                        src="/freestocks-_3Q3tsJ01nc-unsplash.jpg"
                        alt="background"
                    />
                </div>

                <div className='h-full flex-1 py-20 w-60'>
                    <h1 className='text-6xl tracking-wide font-semibold'>Welcome Back!</h1>

                    <div className='my-8'>
                        <p className='text-lg font-light tracking-wide'>Sign in to access your dashboard and many features.  </p>
                        <p className='text-lg font-light tracking-wide'>dont have account yet ? <span>SignUp</span></p>
                    </div>

                    <div className='flex flex-col gap-8 w-full'>
                        
                        <input className='bg-gray-100 text-gray-950 pl-4 text-xl font-semibold border-none py-4 rounded-xl outline-none' type="email" name="email" id="email" placeholder='Email'/>
                        <input className='bg-gray-100 text-gray-950 pl-4 text-xl font-semibold border-none py-4 rounded-xl outline-none' type="password" name="password" id="password" placeholder='Password'/>
                    </div>
                    <div className='mt-14'>
                        <button className='text-3xl font-bold w-full bg-white text-black py-3 rounded-2xl'> Submit</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Page;
