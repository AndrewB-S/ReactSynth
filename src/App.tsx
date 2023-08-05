import Keyboard from "./components/Keyboard";
import { useState } from "react";
import leftArrow from "./assets/chevron-left-solid.svg";
import rightArrow from "./assets/chevron-right-solid.svg";
import "./css/App.css";

function App() {
  const [keyBasis, setKeyBasis] = useState(40);
  const [startingNote, setStartingNote] = useState("c");
  const [octave, setOctave] = useState(1);
  const allowedStartingNotes = ["c", "d", "e", "f", "g", "a", "b"];

  const handleKeyBasisIncrease = () => {
    setKeyBasis(keyBasis + 1);
  };

  const handleKeyBasisDecrease = () => {
    if (keyBasis !== 1) {
      setKeyBasis(keyBasis - 1);
    }
  };

  const handleStartingNoteIncrease = () => {
    if (startingNote === "b") {
      setStartingNote(allowedStartingNotes[0]);
    } else {
      let indexOfStartingNote = allowedStartingNotes.indexOf(startingNote);
      setStartingNote(allowedStartingNotes[indexOfStartingNote + 1]);
    }
  };

  const handleStartingNoteDecrease = () => {
    if (startingNote === "c") {
      setStartingNote("b");
    } else {
      let indexOfStartingNote = allowedStartingNotes.indexOf(startingNote);
      setStartingNote(allowedStartingNotes[indexOfStartingNote - 1]);
    }
  };

  const handleOctaveIncrease = () => {
    setOctave(octave + 1);
  };

  const handleOctaveDecrease = () => {
    if (octave !== 0) {
      setOctave(octave - 1);
    }
  };

  return (
    <>
      <section className="keyboard-controls-wrapper">
        <div className="keyboard-keybasis-input">
          <img
            src={leftArrow}
            alt="arrow left"
            onClick={handleKeyBasisDecrease}
          />
          <span>Number of Keys: {keyBasis}</span>
          <img
            src={rightArrow}
            alt="arrow right"
            onClick={handleKeyBasisIncrease}
          />
        </div>
        <div className="keyboard-startingnote-input">
          <img
            src={leftArrow}
            alt="arrow left"
            onClick={handleStartingNoteDecrease}
          />
          <span>Starting Note: {startingNote}</span>
          <img
            src={rightArrow}
            alt="arrow right"
            onClick={handleStartingNoteIncrease}
          />
        </div>
        <div className="keyboard-octave-input">
          <img
            src={leftArrow}
            alt="arrow left"
            onClick={handleOctaveDecrease}
          />
          <span>Starting Octave: {octave}</span>
          <img
            src={rightArrow}
            alt="arrow right"
            onClick={handleOctaveIncrease}
          />
        </div>
      </section>
      <Keyboard
        keyBasis={keyBasis}
        startingNote={startingNote}
        initialOctave={octave}
      />
    </>
  );
}

export default App;
