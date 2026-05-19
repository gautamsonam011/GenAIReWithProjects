import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({apiKey: "AIzaSyD8zyZnhZVjulBpMTXO-dsEqshyKXvoTFs"});

const History = []

async function Chatting() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    // contents: "What is data structure algorithm?, explain in short", ---(1)
    // contents: [
    //     {
    //         role: 'user',
    //         parts: [{text: "Hi, I am Sonam"}]
    //     },
    //     {
    //         role: 'model',
    //         parts:[{text:"Hello Sonam! It's nice to meet you. How can I help you today?"}]
    //     },
    //     {
    //         role: "user",
    //         parts:[{text: "What is my name?"}]
    //     }

    // ], -------> (2)

    contents: History

  });
  console.log(response.text);
}

async function main() {
    const userProblem = readlineSync.question("Ask me anything:");
    Chatting(userProblem);
}
await main();