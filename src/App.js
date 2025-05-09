import React, { useState } from 'react';
import './styles.css';
import { emailSamples } from './data';

function App() {
  const [index, setIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showIntro, setShowIntro] = useState(true);


  const currentEmail = emailSamples[index];

  const handleAnswer = (answer) => {
    setSelected(answer);
    setShowResult(true);
    if (answer === currentEmail.isPhishing) {
      setScore(score + 1);
    }
  };

  const nextEmail = () => {
    setSelected(null);
    setShowResult(false);
    setIndex(index + 1);
  };

  if (index >= emailSamples.length) {
    return (
      <div className="container">
        <h1>✅ Trainer Complete!</h1>
        <p>You scored {score} out of {emailSamples.length}</p>
      </div>
    );
  }

  if (showIntro) {
    return (
      <div className="container">
        <h1>🛡️ Phishing Email Trainer</h1>
        <p>Learn how to spot suspicious emails by practicing with real examples.</p>
        <p>You'll be shown a series of emails. For each one, decide if it's phishing or legitimate.</p>
        <button onClick={() => setShowIntro(false)}>Start Training</button>
      </div>
    );
  }
  

  return (
    <div className="container">
      <h1>📬 Phishing Email Trainer</h1>
      <div className="email-box">
        <p><strong>From:</strong> {currentEmail.from}</p>
        <p><strong>Subject:</strong> {currentEmail.subject}</p>
        <p className="body">{currentEmail.body}</p>
      </div>

      {!showResult ? (
        <div className="btns">
          <button onClick={() => handleAnswer(true)}>Phishing</button>
          <button onClick={() => handleAnswer(false)}>Legit</button>
        </div>
      ) : (
        <div className="result">
          <p>
            {selected === currentEmail.isPhishing
              ? "✅ Correct!"
              : "❌ Oops! That was " + (currentEmail.isPhishing ? "phishing." : "legit.")}
          </p>
          <ul>
            {currentEmail.clues.map((clue, i) => (
              <li key={i}>🧠 {clue}</li>
            ))}
          </ul>
          <button onClick={nextEmail}>Next</button>
        </div>
      )}
    </div>
  );
}

export default App;
