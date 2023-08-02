import Keyboard from "./components/Keyboard";
import { useState } from "react";
import leftArrow from "./assets/chevron-left-solid.svg";
import rightArrow from "./assets/chevron-right-solid.svg";
import "./css/App.css";

function App() {
  const [keyBasis, setKeyBasis] = useState(40);
  const [startingNote, setStartingNote] = useState("c");
  const [octave, setOctave] = useState(1);
  var allowedStartingNotes = ["c", "d", "e", "f", "g", "a", "b"];

  const handleIncrease = (stateSelection: string) => {
    if (stateSelection === "keyBasis") {
      setKeyBasis(keyBasis + 1);
    } else if (stateSelection === "startingNote") {
      if (
        allowedStartingNotes.indexOf(startingNote) ===
        allowedStartingNotes.length - 1
      ) {
        setStartingNote(
          allowedStartingNotes[allowedStartingNotes.indexOf(startingNote) + 1]
        );
      }
      setStartingNote(
        allowedStartingNotes[allowedStartingNotes.indexOf(startingNote) + 1]
      );
    }

    if (stateSelection === "octave") {
    }
  };

  const handleDecrease = (stateSelection: string) => {
    //keyBasis
    if (stateSelection === "keyBasis") {
      if (keyBasis !== 1) {
        setKeyBasis(keyBasis - 1);
      }
    }
    //startingNote
    else if (stateSelection === "startingNote") {
      if (startingNote === "c") {
        setStartingNote(allowedStartingNotes[allowedStartingNotes.length - 1]);
      }

      setStartingNote(
        allowedStartingNotes[allowedStartingNotes.indexOf(startingNote) - 1]
      );
    }

    //Octave
    else if (stateSelection === "octave") {
      if (octave > 1) {
        setOctave(octave - 1);
      }
    }
  };

  const handleKeyBasis = (event: Event): void => {
    event.preventDefault();
    const target = event.currentTarget as HTMLInputElement;
    const value = target.value;

    try {
      let newKeyBasis = Number(value);
      setKeyBasis(newKeyBasis);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="keyboard-controls-wrapper">
        <div className="keyboard-keybasis-input">
          <img
            src={leftArrow}
            alt="arrow left"
            onClick={() => handleDecrease("keyBasis")}
          />
          <span>Number of Keys: {keyBasis}</span>
          <img
            src={rightArrow}
            alt="arrow right"
            onClick={() => handleIncrease("keyBasis")}
          />
        </div>
        <div className="keyboard-startingnote-input">
          <img
            src={leftArrow}
            alt="arrow left"
            onClick={() => handleDecrease("startingNote")}
          />
          <span>Starting Note: {startingNote}</span>
          <img
            src={rightArrow}
            alt="arrow right"
            onClick={() => handleIncrease("startingNote")}
          />
        </div>
        <div className="keyboard-octave-input">
          <img
            src={leftArrow}
            alt="arrow left"
            onClick={() => handleDecrease("octave")}
          />
          <span>Starting Octave: {octave}</span>
          <img
            src={rightArrow}
            alt="arrow right"
            onClick={() => handleIncrease("octave")}
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
