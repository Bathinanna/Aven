import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "@/lib/env";

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY || "");

// Text embedding model (equivalent to OpenAI's text-embedding models)
export async function createEmbeddings(texts: string[]): Promise<number[][]> {
  try {
    // Use embedding model that's available in free tier
    const embeddingModel = genAI.getGenerativeModel({ model: "embedding-001" });
    
    // Process texts in batches if needed
    const results = await Promise.all(
      texts.map(async (text) => {
        const result = await embeddingModel.embedContent(text);
        return result.embedding.values;
      })
    );
    
    return results;
  } catch (error) {
    console.error("Error creating embeddings with Gemini:", error);
    throw error;
  }
}

// Text generation model (equivalent to OpenAI's completion models)
export async function generateText(prompt: string): Promise<string> {
  try {
    // Use a free tier model that's available in the API
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating text with Gemini:", error);
    throw error;
  }
}

export default {
  createEmbeddings,
  generateText,
};
