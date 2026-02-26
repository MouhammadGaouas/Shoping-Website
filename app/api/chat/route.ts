import { GoogleGenAI } from "@google/genai";
import { NextResponse , NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    const { messages } = await request.json()


    if (!messages)
        return NextResponse.json({ message: "message not found" })

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    

    try {
        const contents = messages.map((msg: {role: string , content: any})  => ({
            role: msg.role === "assistant" ? "model" : "user" ,
            parts: [{text: msg.content}]
        }))

        const response = await ai.models.generateContent({ model: "gemini-3-flash-preview" , contents})

        return NextResponse.json({ answer: response.text })
    } catch (err) {
        console.error(err);
    }
}