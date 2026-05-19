import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "AIzaSyD8zyZnhZVjulBpMTXO-dsEqshyKXvoTFs"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "What is data structure algorithm?, explain in short",
  });
  console.log(response.text);
}

await main();