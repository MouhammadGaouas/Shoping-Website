"use client";
import { useRouter } from "next/navigation";
import { Warehouse } from 'lucide-react';
import { use, useEffect, useState } from "react";
import CreateField from "@/components/CreateField"

export default function DashboardPage() {

  const [count, setCount] = useState<number>(0)
  const [Show, setShow] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function handleFetch() {
      const response = await fetch("/api/admin/dashboard")
      const data = await response.json()

      if (response.ok) {
        setLoading(false)

        setCount(data.count)
        console.log(data)
      } else {
        setLoading(true)
      }

    }


    handleFetch()

  }, [])




  const router = useRouter();

  return (
    <main className="h-screen  px-12 pt-16">
      <div className="mt-8 w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-3xl">Dashboard</h1>
          <button onClick={() => setShow(!Show)} className="text-white text-xl font-semibold tracking-wider bg-[var(--forground-color)] px-8 py-2 rounded-sm border border-white/10">Create new product +</button>
          <CreateField show={Show} />
        </div>
        <div className="bg-black/5 border mt-8  border-white/10 p-8 flex items-center rounded-xl justify-between w-full gap-8 ">

          <div className="text-white flex items-center flex-col">
            <Warehouse size={42} />
            <p className="text-2xl font-semibold">In Stock</p>
            {
              loading ? <img className="w-8" src="/180-ring-with-bg.svg" alt="" /> : <p className="text-3xl font-semibold">{count}</p>
            }
          </div>
        </div>

      </div>
    </main>
  );
} 