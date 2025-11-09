import { GoogleGenAI } from "@google/genai";

// Fix: Initialize GoogleGenAI directly with process.env.API_KEY as per guidelines.
// The API key's availability is assumed to be handled externally.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export async function generateCharacterIdea(topic: string): Promise<string> {
  try {
    const prompt = `Generate a fun and quirky cartoon character description based on this idea: "${topic}".

    Follow this structure:
    **Name:** [A funny and fitting name]
    **Appearance:** [Describe their look in a vivid, cartoonish way]
    **Personality:** [Describe their personality, highlighting their main traits]
    **Quirk:** [A unique and funny habit or fear]

    Make the description whimsical, concise, and ready for an animation pitch.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    if (response.promptFeedback?.blockReason) {
      throw new Error(`Request blocked due to ${response.promptFeedback.blockReason}.`);
    }

    if (!response.text?.trim()) {
        throw new Error("Received an empty response from the API. The prompt might be too restrictive or unclear.");
    }

    return response.text;
  } catch (error) {
    console.error("Error generating character idea:", error);
    // Re-throw the original error to be handled by the UI component
    if (error instanceof Error) {
      throw error;
    }
    // Fallback for non-Error objects
    throw new Error("Failed to generate content from Gemini API.");
  }
}