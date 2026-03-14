import React, { useState } from 'react'

interface ProductProps {
    id: string
    name: string
    price: number
    stock: number
    description: string
    image: string
    onDelete?: (id: string) => void
}

export default function Product({
    id,
    name,
    price,
    stock,
    description,
    image,
    onDelete = () => { },
}: ProductProps) {
    const [deleting, setDeleting] = useState(false)

    const handleDelete = () => {
        setDeleting(true)
        setTimeout(() => onDelete(id), 300)
    }

    return (
        <div
            style={{
                fontFamily: "'DM Sans', sans-serif",
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                opacity: deleting ? 0 : 1,
                transform: deleting ? 'scale(0.95)' : 'scale(1)',
            }}
            className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-sm mx-auto"
        >

            <div className="relative h-40 sm:h-48 bg-gray-50 overflow-hidden">
                <img
                    src={image}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span
                    className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${stock > 0
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-red-50 text-red-600 border border-red-200'
                        }`}
                >
                    {stock > 0 ? `${stock} in stock` : 'Out of stock'}
                </span>
            </div>

            <div className="p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-gray-900 font-semibold text-base leading-tight">{name}</h3>
                    <span className="text-gray-900 font-bold text-base whitespace-nowrap">${price.toFixed(2)}</span>
                </div>

                {description && (
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{description}</p>
                )}

                <button
                    onClick={handleDelete}
                    disabled={deleting}
                    className="w-full mt-2 py-2 px-4 rounded-xl text-sm font-medium text-red-500 border border-red-100 hover:bg-red-50 hover:border-red-200 active:scale-95 transition-all duration-150 disabled:opacity-50">
                    Remove
                </button>
            </div>
        </div>
    )
}