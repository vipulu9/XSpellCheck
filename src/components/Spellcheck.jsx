import { useState } from "react";

const SpellcheckApp = () => {
  const customDictionary = {
    teh: "the",

    wrok: "work",

    fot: "for",

    exampl: "example",
  };

  const [input, setInput] = useState("");
  const [suggestedText, setSuggestedTex] = useState("");
  const handleChange = (e) => {
    const text = e.target.value;
    setInput(text);
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });
    //const correctText = correctedWords.join(" ");
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setSuggestedTex(firstCorrection || "");
  };
  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={input}
        placeholder="Enter text..."
        onChange={handleChange}
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
};

export default SpellcheckApp;