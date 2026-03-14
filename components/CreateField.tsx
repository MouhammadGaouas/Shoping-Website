import React, { useState } from 'react'

export default function CreateField({ show }: { show: boolean }) {

    const [name , setName] = useState("")
    const [price , setPrice] = useState("")


    return (
        <div className={`fixed ${show ? "block" : "hidden"} w-180 right-1/2 translate-x-1/2 translate-y-1/2 p-6 bg-white rounded-lg`}>
            <h1 className='text-black text-2xl font-semibold'>Create Product</h1>
            <form>
                <div className='space-y-4 mt-4 grid grid-cols-2 gap-8'>
                    <div>
                        <label className='font-medium' htmlFor="name">Product Name</label>
                        <input className='w-full border-blue-600/50 border-2 rounded-lg py-1 px-4  outline-none' id='name' name='name' type="text" />
                    </div>
                    <div>
                        <label className='font-medium' htmlFor="name">Product Price</label>
                        <input className='w-full border-blue-600/50 border-2 rounded-lg py-1 px-4  outline-none' id='name' name='price' type="number" />
                    </div>
                    <div>
                        <label className='font-medium' htmlFor="name">In Stock</label>
                        <input className='w-full border-blue-600/50 border-2 rounded-lg py-1 px-4  outline-none' id='name' name='name' type="text" />
                    </div>
                    <div>
                        <label className='font-medium' htmlFor="name">Product Image</label>
                        <input className='w-full bg-re border-blue-600/50 border-2 rounded-lg py-1 px-4  outline-none' id='name' name='name' type="file" />
                    </div>
                    <div>
                        <label className='font-medium' htmlFor="name">Description</label>
                        <textarea className='w-full max-h-40 text-sm border outline-none px-1' name="description" id=""></textarea>
                    </div>
                </div>
                <button className='w-full text-white bg-orange-400 font-semibold text-xl py-2 rounded-lg mt-6 '>Create</button>
                <button className='w-full text-black border-2 border-red-500/40 font-semibold text-xl py-2 rounded-lg mt-6 '>Close</button>
            </form>
        </div>
    )
}
