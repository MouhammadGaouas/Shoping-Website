"use client";
import { X } from 'lucide-react';
import React from 'react'

interface MenuProp {
    onClose: () => void
    openMenu: boolean
}

export default function SlideMenu({ onClose, openMenu }: MenuProp) {
    return (
        <div className={`h-screen p-2 w-90 fixed top-0 buttom-0 right-0 ${openMenu ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
            <div className='bg-amber-100/5 rounded-2xl backdrop-blur-xl border-2 border-amber-50/10 h-full relative'>
                <div className='absolute top-4 left-4 flex items-center justify-between w-full pr-12'>
                    <X onClick={() => onClose?.()} size={40} className='text-white ' />
                    <h1 className='text-white text-2xl tracking-wider'>Menu</h1>
                </div>
            </div>
        </div>
    )
}
