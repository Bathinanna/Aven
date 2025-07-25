import { createEmbeddings, generateText } from "@/lib/gemini";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });

async function testGeminiAPI() {
  try {
    console.log("Testing Gemini API...");
    
    // Test text generation
    console.log("Testing text generation...");
    const generatedText = await generateText("What are the benefits of using home equity as a credit line?");
    console.log("Generated text:", generatedText);
    
    // Test embedding generation
    console.log("\nTesting embedding generation...");
    const embeddings = await createEmbeddings(["This is a test sentence for embeddings."]);
    console.log(`Generated embedding with ${embeddings[0].length} dimensions`);
    console.log("First few values:", embeddings[0].slice(0, 5));
    
    console.log("\nGemini API tests completed successfully!");
  } catch (error) {
    console.error("Error testing Gemini API:", error);
    process.exit(1);
  }
}

testGeminiAPI();
