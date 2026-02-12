"use client"

import React, { useState } from 'react'
import { POST } from '../api/auth/login/route';

interface Info {
  firstname: string;
  lastName: string;
  email: string;
  password: string;
  agree: boolean;
}

const Page = () => {

  const [info, setInfo] = useState<Info>({
    firstname: "",
    lastName: "",
    email: "",
    password: "",
    agree: false
  });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setInfo(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const  handleSubmit = async (e : React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault()

    await fetch("http://localhost:3000/auth/login" , {
    
    })
  };    

  return (
    <div className='bg-[#262032] min-h-screen flex items-center justify-center p-6'>
      <main className='h-160 flex items-center justify-between gap-10'>

        <div className='flex-1 h-full overflow-hidden rounded-2xl'>
          <img
            className='h-full w-full object-cover'
            src="/freestocks-_3Q3tsJ01nc-unsplash.jpg"
            alt="background"
          />
        </div>

        <div className='flex-1 h-full py-20 px-20'>
          <h1 className='text-5xl'>Create an account</h1>

          <p className='mt-10 mb-8 tracking-widest'>
            already have account?
            <a className='underline ml-2 text-lg text-[#8476a0]' href="#">
              Log in
            </a>
          </p>

          <div className='space-y-8'>

            <div className='flex gap-10'>
              <input
                name="firstname"
                value={info.firstname}
                onChange={handleChange}
                className='bg-[#302840] flex-1 py-3 pl-4 rounded-lg'
                type="text"
                placeholder='firstname'
              />

              <input
                name="lastName"
                value={info.lastName}
                onChange={handleChange}
                className='bg-[#302840] flex-1 py-3 pl-4 rounded-lg'
                type="text"
                placeholder='lastname'
              />
            </div>

            <div className='space-y-8'>
              <input
                name="email"
                value={info.email}
                onChange={handleChange}
                className='bg-[#302840] w-full py-3 pl-4 rounded-lg'
                type="email"
                placeholder='Email'
              />

              <input
                name="password"
                value={info.password}
                onChange={handleChange}
                className='bg-[#302840] w-full py-3 pl-4 rounded-lg'
                type="password"
                placeholder='Enter your password'
              />
            </div>

            <div className='flex items-center gap-2'>
              <input
                name="agree"
                checked={info.agree}
                onChange={handleChange}
                type="checkbox"
              />
              <p>I agree to the <span className='underline'>Terms & Conditions</span></p>
            </div>

            <button
              onClick={handleSubmit}
              className='block w-full bg-[#6c5a90] py-3 text-xl cursor-pointer font-semibold rounded-xl'
            >
              Create account
            </button>

          </div>
        </div>

      </main>
    </div>
  )
}

export default Page;
