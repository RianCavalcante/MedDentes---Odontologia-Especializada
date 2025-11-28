import { GoogleGenAI } from "@google/genai";

// Safely access API key to prevent "process is not defined" crashes in browser
const getApiKey = () => {
  try {
    // Check if process is defined (Node/Webpack/Vite with define)
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    console.warn("Could not access environment variables safely.");
  }
  return '';
};

const apiKey = getApiKey();
const ai = new GoogleGenAI({ apiKey });

// In-memory cache to prevent refetching images on simple re-renders
const imageCache: Record<string, string> = {};

// Helper to compress base64 image
const compressImage = async (base64Str: string, quality = 0.7): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64Str;
    img.crossOrigin = "Anonymous"; // Handle cross-origin if necessary, though base64 is local
    img.onload = () => {
      const canvas = document.createElement('canvas');
      // Resize if too large (e.g., max 1024px width) to save more KB
      const maxWidth = 1024;
      const scale = img.width > maxWidth ? maxWidth / img.width : 1;
      
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        // Export as JPEG with reduced quality
        resolve(canvas.toDataURL('image/jpeg', quality));
      } else {
        resolve(base64Str);
      }
    };
    img.onerror = () => {
        console.warn("Image compression failed, using original.");
        resolve(base64Str);
    };
  });
};

export const generateDentalImage = async (prompt: string): Promise<string | null> => {
  if (!apiKey) {
    console.warn("API Key is missing. Using fallback images.");
    return null;
  }

  // Check cache first
  if (imageCache[prompt]) {
    return imageCache[prompt];
  }

  try {
    // Append 'minimalist, clean, high quality' to prompt to encourage cleaner images
    const enhancedPrompt = `${prompt}, minimalist, clean composition, soft lighting, 4k, highly detailed but not cluttered`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image', // Nano Banana
      contents: {
        parts: [
          {
            text: enhancedPrompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "4:3",
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const rawBase64 = `data:image/png;base64,${part.inlineData.data}`;
        
        // Compress the image before returning
        const compressedImage = await compressImage(rawBase64, 0.75); // 75% quality
        
        imageCache[prompt] = compressedImage;
        return compressedImage;
      }
    }
    
    return null;
  } catch (error) {
    console.error("Error generating image with Gemini:", error);
    return null;
  }
};