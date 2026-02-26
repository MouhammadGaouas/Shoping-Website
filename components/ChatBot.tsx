"use client"
import React, { useState } from 'react'
import { Sparkles } from 'lucide-react';



export const ChatBot = () => {

    const [messages, setMessages] = useState<{ role: string, content: string }[]>([{role:"assistant" , content: "Welcome to CareHub Chatbot, ask any thing you want"}]);
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSetMessage = async () => {
        if (!input.trim()) return
        setMessages(prev => [...prev, { role: "user", content: input }])
        setInput("")
        setLoading(true)

        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: messages }),
        });

        const data = await res.json()

        console.log(data)

        setMessages(prev => [...prev, { role: "assistant", content: data.answer }])

        setLoading(false)
    }


    return (
        <div className="bg-white/10 w-100 border border-white/20 py-4 px-6 h-145 rounded-xl flex items-start justify-between flex-col gap-4">
            <div>
                <div className="text-white flex items-center justify-between w-max text-2xl gap-4"><Sparkles /> CareHub AI</div>
            </div>
            <div className="h-full w-full bg-white/5 border border-white/10  rounded-xl p-2 overflow-scroll ">

                <div className="space-y-4 ">
                    {
                        messages.map((value, index) => {
                            return <span key={index} className={` rounded-b-3xl rounded-tr-3xl inline-block bg-gray-200 px-3 py-2 `}>
                                {value.content}
                            </span>
                        })
                    }
                     

                    {loading && <p>Typing...</p>}
                </div>

            </div>
            <div className="flex items-center justify-between gap-4 w-full">
                <input onChange={(e) => setInput(e.target.value)} value={input} className="w-full py-2 rounded-xl px-2 text-lg font-medium bg-white" type="text" />
                <button onClick={handleSetMessage} className="bg-indigo-700  text-white h-full w-40 rounded-lg">Send</button>
            </div>
        </div>
    )
}
