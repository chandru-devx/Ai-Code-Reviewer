import { GoogleGenAI } from "@google/genai";
// console.log("ENV:", import.meta.env);
// console.log("KEY:", import.meta.env.VITE_GEMINI_API_KEY);


// use env variable
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

// export function
export async function googleApi(code, language) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
 ou are a senior code reviewer.

Return your response in JSON format:

{
  "summary": "",
  "issues": [],
  "improvements": [],
  "score": number
}

Code:
${code}
 
`
    });

    return response.text; // return result

  } catch (err) {
    console.error(err);
    return "Error generating review";
  }

}
// console.log("KEY:", import.meta.env.VITE_GEMINI_API_KEY);
