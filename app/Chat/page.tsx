"use client"
import React, { useState } from 'react'

export default function Chat() {
    const [message, setMessage] = useState<string | null>(null)

    async function handlemessage() {

        const response = await fetch("/api/chatbot", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "What is javaScript" })
        })

        if (response.ok) {
            const answer = await response.json()
            setMessage(answer.reply)
            console.log(answer.reply)
        }
    }

    return (
        <div className='bg-gray-900 min-h-screen'>
            <h1 className='text-3xl text-white'>
                {message}
            </h1>
            <button className='bg-white text-2xl px-8 py-1 rounded-lg mt-8' onClick={() => handlemessage()}>Send</button>
        </div>
    )
}
