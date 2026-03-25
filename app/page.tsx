"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Product from '@/components/Product';
import { map } from 'better-auth';

interface Product {
  id: string
  name: string
  price: number
  stock: number
  image: string
  description: string
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  const router = useRouter();

  async function HandleFetchProducts() {
    try {
      const response = await fetch("/api/customer/products")
      const data = await response.json()
      console.log(data)
      setProducts(data.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    HandleFetchProducts();
  },[])


  return (
    <div className="min-h-screen p-6">

      <h1 className='text-white text-2xl font-semibold'>| <span className='ml-6'>Home</span></h1>

      <div className='mt-6 grid grid-cols-4'>
        {
          products.map((val) => {
            return <Product {...val} />
          })
        }
      </div>

      {/* CTA Section */}
      <section className="px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-400 mb-8">
              Create an account and start managing your inventory today.
            </p>
            <button
              onClick={() => router.push("/sign-up")}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
            >
              Create Free Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
