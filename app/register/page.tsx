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

  const [info, setInfo] = useState<Info>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
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

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!info.agree) {
      alert("accept the terms first")
      return
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info)
      })

      console.log(response);
      if (response.ok)
        alert("Account created successfuly")
      if (response.status === 500)
        alert("internal server error")
      if (response.status === 409)
        alert("already exist")
    } catch (err) {
      console.error(err)
    }
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

        <div className='flex-1 h-full mt-20 px-20'>
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
                name="firstName"
                value={info.firstName}
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
                name="phoneNumber"
                value={info.phoneNumber}
                onChange={handleChange}
                className='bg-[#302840] w-full py-3 pl-4 rounded-lg'
                type="text"
                placeholder='Phone Number'
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
