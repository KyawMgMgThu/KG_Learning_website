import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";

function Speech({ text, children }) {
  const { speak, supported } = useSpeechSynthesis();

  const speakWithVoice = () => {
    if (!supported) {
      console.error("Speech synthesis is not supported in this browser.");
      return;
    }
    
    speak({ text });
  };

  return (
    <div onClick={speakWithVoice} onTouchStart={speakWithVoice}>
      {children}
    </div>
  );
}

export default Speech;
