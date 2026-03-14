"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "../../lib/auth-client";
import { User, Mail, Lock } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    const res = await signUp.email({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (res.error) {
      setError(res.error.message || "Something went wrong.");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      
      <main className="w-full max-w-md p-8 space-y-6 
      backdrop-blur-xl bg-black
      rounded-2xl shadow-2xl text-white">

        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3.5 text-neutral-400" size={18}/>
            <input
              name="name"
              placeholder="Full Name"
              required
              className="w-full pl-10 pr-3 py-2 rounded-md 
              bg-neutral-900/60 border border-neutral-700
              focus:outline-none focus:ring-2 focus:ring-white/40
              transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-neutral-400" size={18}/>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full pl-10 pr-3 py-2 rounded-md
              bg-neutral-900/60 border border-neutral-700
              focus:outline-none focus:ring-2 focus:ring-white/40
              transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-neutral-400" size={18}/>
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              minLength={8}
              className="w-full pl-10 pr-3 py-2 rounded-md
              bg-neutral-900/60 border border-neutral-700
              focus:outline-none focus:ring-2 focus:ring-white/40
              transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-md font-medium
            bg-white text-black
            hover:bg-gray-200
            transition-all duration-200"
          >
            Create Account
          </button>

        </form>
      </main>
    </div>
  );
}