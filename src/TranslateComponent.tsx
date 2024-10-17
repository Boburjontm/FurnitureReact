import React, { useState } from "react";
import axios from "axios";

// Define types for API response structures
interface Detection {
  language: string;
  isReliable: boolean;
  confidence: number;
}

interface DetectionResponse {
  data: {
    detections: Detection[][];
  };
}

interface Translation {
  translatedText: string;
}

interface TranslationResponse {
  data: {
    translations: Translation[];
  };
}

const TranslateComponent: React.FC = () => {
  // Define state types as string
  const [text, setText] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");

  const detectAndTranslate = async (): Promise<void> => {
    const apiKey = 'YOUR_RAPIDAPI_KEY'; // Replace with your RapidAPI key
    const detectLanguageUrl = "https://google-translate1.p.rapidapi.com/language/translate/v2/detect";
    const translateUrl = "https://google-translate1.p.rapidapi.com/language/translate/v2";

    try {
      // Detect language
      const detectResponse = await axios.post<DetectionResponse>(
        detectLanguageUrl,
        new URLSearchParams({ q: text }),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "application/gzip",
            "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
            "X-RapidAPI-Key": apiKey,
          },
        }
      );

      const detectedLanguage = detectResponse.data.data.detections[0][0].language;

      // Translate the text
      const translateResponse = await axios.post<TranslationResponse>(
        translateUrl,
        new URLSearchParams({
          q: text,
          target: "en", // Target language (e.g., 'en' for English)
          source: detectedLanguage,
        }),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "application/gzip",
            "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
            "X-RapidAPI-Key": apiKey,
          },
        }
      );

      // Update the translated text in state
      setTranslatedText(translateResponse.data.data.translations[0].translatedText);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
        className="border p-2"
      />
      <button onClick={detectAndTranslate} className="ml-2 p-2 bg-blue-500 text-white">
        Translate
      </button>

      {translatedText && (
        <div className="mt-4">
          <p>Translated Text: {translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default TranslateComponent;
