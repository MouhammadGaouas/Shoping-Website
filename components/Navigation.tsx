"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from "@/lib/auth-client";
import { LogOut, ShoppingBag } from 'lucide-react';


const Navigation = () => {



  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/sign-in");
    }
  }, [isPending, session, router]);

  return (
    <nav className='sticky  top-0 z-50 w-full backdrop-blur-lg bg-[var(--forground-color)]/80 border-b border-white/10 shadow-lg'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-12'>
          <button
            onClick={() => router.push("/")}
            className='flex items-center gap-2.5 group'
          >
            <div className='w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-shadow'>
              <ShoppingBag className='w-6 h-6 text-white' />
            </div>
            <span className='text-2xl font-bold text-white'>Shopi</span>
          </button>

          <ul className='flex items-center gap-2'>
            <li>
              <button
                onClick={() => router.push("/")}
                className='px-4 py-2 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200'
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => router.push("/dashboard")}
                className='px-4 py-2 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200'
              >
                Dashboard
              </button>
            </li>
          </ul>
        </div>

        <div className='flex items-center gap-3'>
          {!session?.user && !isPending ? (
            <>
              <button
                onClick={() => router.push("/sign-in")}
                className='px-5 py-2.5 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-200'
              >
                Sign In
              </button>
              <button
                onClick={() => router.push("/sign-up")}
                className='px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25'
              >
                Get Started
              </button>
            </>
          ) : (

            <button
              onClick={() => signOut()}
              className='px-5 py-2.5 bg-red-500/10 border border-red-500/20 text-red-400 font-medium rounded-xl hover:bg-red-500/20 transition-all duration-200  items-center gap-2 md:flex hidden'
            >
              <LogOut className='w-4 h-4' />
              Sign Out
            </button>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navigation;
