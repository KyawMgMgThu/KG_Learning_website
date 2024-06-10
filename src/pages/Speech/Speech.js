import React, { useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

function Speech({ text, voice, children }) {
  const [spokenText, setSpokenText] = useState(text);
  const { speak, voices } = useSpeechSynthesis();

  useEffect(() => {
    setSpokenText(text);
  }, [text]);

  const speakWithVoice = () => {
    const selectedVoice = voices.find(v => v.name === voice) || voices[0];
    speak({ text: spokenText, voice: selectedVoice });
  };

  return (
    <div onClick={speakWithVoice} onTouchStart={speakWithVoice}>
      {children}
    </div>
  );
}

export default Speech;
