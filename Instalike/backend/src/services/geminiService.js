import { GoogleGenerativeAI } from "@google/generative-ai";

const generativeAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = generativeAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function generateDescriptionWithGemini(imageBuffer) {
  const prompt = "Generate a description in Brazilian Portuguese for the following image";
  const mimeType = "image/png";

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: mimeType,
      },
    };

    const response = await model.generateContent([prompt, image]);

    if (response?.response?.text) {
      return response.response.text;
    } else {
      console.warn("Description not available. Returning fallback text.");
      return "Alt-text not available.";
    }
  } catch (error) {
    console.error("Error generating alt-text:", error.message, error);
    throw new Error("Failed to generate alt-text using Gemini.");
  }
}