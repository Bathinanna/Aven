import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import path from "path";
import { env } from "@/lib/env";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });

async function listModels() {
  try {
    console.log("Listing available Gemini models...");
    
    const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY || "");
    
    // Use the generative AI client to list available models
    // For v1beta API, we need to ensure we use the correct API version
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": env.GEMINI_API_KEY || "",
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("Available models:", JSON.stringify(data, null, 2));
    
  } catch (error) {
    console.error("Error listing Gemini models:", error);
  }
}

listModels();
