import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({ apiKey: "AIzaSyD8zyZnhZVjulBpMTXO-dsEqshyKXvoTFs" });

const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    history:[]
})

async function main() {
    const userProblem = readlineSync.question("Ask me anything:");
    const response1 = await chat.sendMessage({
        message: "I have "
    })
    main();
}
await main();