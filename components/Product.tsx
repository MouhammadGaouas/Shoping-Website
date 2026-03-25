"use client"
import React, { use } from 'react'

interface Product {
    id: string
    name: string
    price: number
    stock: number
    image: string
    description: string
}


export default function Product({ id, name, price, stock, image, description }: Product) {
    return (
        <div className=' bg-gray-100 w-90 rounded-xl p-4'>
            <div className='rounded-xl overflow-hidden relative'>
                <div className='absolute p-2 inset-0 opacity-60 bg-gray-950'><p className='text-sm text-white font-normal'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                <img className='h-full w-full object-cover' src="https://cdn.thewirecutter.com/wp-content/media/2025/05/BEST-OVER-EAR-HEADPHONES-3x2-1.jpg?auto=webp&quality=75&crop=4:3,smart&width=1024" alt="" />
            </div>
            <div className='mt-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-lg'>P90 Head Phones</h1>
                    <p className='text-2xl font-semibold'>$ 90</p>
                </div>
                <div className='mt-2'>
                    <p>in Stock : </p>
                </div>
                <div className='mt-4 flex items-center justify-between gap-6 '>
                    <button className='text-white text-lg bg-black px-6 py-1 flex-1 rounded-sm'>add to Cart</button>
                    <button className='text-white text-lg bg-black px-6 py-1 flex-1 rounded-sm'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}
