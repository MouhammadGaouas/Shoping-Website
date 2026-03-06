"use client";
import { useRouter } from "next/navigation";

export default function DashboardPage() {

  const router = useRouter();
  
  return (
    <main className="h-screen">
      <h1 className="text-white text-center text-2xl mt-6">Dashboard</h1>
    </main>
  );
}