"use client";

import React from "react";

interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    image: string;
    description: string;
}

interface productProp {
    product: Product;
    onDelete: (id: string) => void
    onUpdate: (product: Product) => void
}

export default function ProductCard({ product, onDelete, onUpdate }: productProp) {
    const { id, name, price, stock, image, description } = product;

    return (
        <>
            <div className="m-6 w-80 rounded-2xl bg-white/10 border border-white/10 shadow-lg shadow-md hover:shadow-xl hover:scale-102  transition duration-300 overflow-hidden group flex flex-col">
                <div className="h-50 relative">
                    <img className="h-full w-full object-cover bg-cover" src={image} alt={name} />
                    <p className="absolute top-0 m-2 text-white bg-gray-900/70 px-4 py-0.5 rounded-sm text-sm">in stock: {stock}</p>
                </div>
                <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                        <p className="text-white text-lg tracking-wide">{name}</p>
                        <p className="text-yellow-400">${price}</p>
                    </div>
                    <div className="overflow-hidden">
                        <pre className="text-xs font-extralight text-white ">{description}</pre>
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={() => onUpdate(product)} className="text-white bg-blue-600/40 backdrop-blur-lg border border-white/20 rounded-sm px-8 py-1">Update</button>
                        <button onClick={() => onDelete(id)} className="text-white bg-red-600/40 border backdrop-blur-lg border-white/20 rounded-sm px-8 py-1">Delete</button>
                    </div>
                </div>

            </div>
        </>
    );
}