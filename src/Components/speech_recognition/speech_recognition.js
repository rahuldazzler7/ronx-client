import React, { useState } from 'react';
import { useSpeechSynthesis, useSpeechRecognition  } from 'react-speech-kit';
 
function Text_Speech() {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();
 
  return (
    <div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => speak({ text: value })}>Speak</button>
    </div>
  );
}

function Speech_Text() {
    const [value, setValue] = useState('');
    const { listen, listening, stop } = useSpeechRecognition({
      onResult: (result) => {
        setValue(result);
      },
    });
   
    return (
      <div>
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={listen}>
                🎤
        </button>
        <button onClick={stop}>
          🎤
        </button>
        {listening && <div>Go ahead I'm listening</div>}
      </div>
    );
  }

export {Text_Speech, Speech_Text} 