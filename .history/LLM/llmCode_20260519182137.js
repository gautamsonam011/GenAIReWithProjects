import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "AIzaSyD8zyZnhZVjulBpMTXO-dsEqshyKXvoTFs"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    // contents: "What is data structure algorithm?, explain in short",
    contents: [
        {
            role: 'user',
            parts: [{text: "Hi, I am Sonam"}]
        },
        {
            role: 'model',
            parts:[{text:"Hello Sonam! It's nice to meet you. How can I help you today?"}]
        },
        {
            role: "user",
            parts:[{text: "What is my name?"}]
        }

    ],
  });
  console.log(response.text);
}

await main();