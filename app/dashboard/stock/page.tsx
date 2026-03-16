"use client"

import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'

interface Product {
  id: string
  name: string
  price: number
  stock: number
  description: string
}

export default function Stock() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function handleFetchProducts() {
      try {
        const response = await fetch("/api/admin/products/stock")
        if (response.ok) {
          const data = await response.json();
          setProducts(data.products)
          console.log(products)
        }
      } catch (error) {
        console.log(error)
      }
    }

    handleFetchProducts()
  }, [])

  return (
    <div className='flex items-center justify-center'>
      <div className='grid grid-cols-4'>
        {
          products ?
            products.map((val, index) => {
              return <ProductCard key={index} {...val}  />
            })
            : <div className='text-white text-center text-3xl'>The Stock in Empty</div>
        }
      </div>
    </div>
  )
}
