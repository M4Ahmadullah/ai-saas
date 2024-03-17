import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai/index.mjs";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit"; 
import { checkSubscription } from "@/lib/subscription";


const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
}) 

const instructionMessage: ChatCompletionMessageParam = {
    role: "system",
    content: "You are a code Generator. You must answer only in markdown code snippets. Use code comment for explanations. and generate the code after explanation and add a line break and please for answering each question start with an respectfull text please."
}

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if(!userId) {
            return new NextResponse("Unauthorised", { status: 401 });
        }

        if(!openai.apiKey) {
            return new NextResponse("OpenAi API Key not Configured", { status: 500 })
        }

        if(!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        const freeTrial = await checkApiLimit();
        const isPro = checkSubscription();
        
        if(!freeTrial && !isPro) {
            return new NextResponse("Free Trial has been expired!", { status: 403 })
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        })

        if(!isPro) {
          await increaseApiLimit();
        }
        
        return NextResponse.json(response.choices[0].message);

    } catch(error: any) {
        console.log("[CODE_ERROR]", error);
        return new NextResponse(`Internal error: ${error.message}`, { status: 500 });
    }
}