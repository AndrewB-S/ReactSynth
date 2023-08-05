interface props {
  leftArrow: string;
  rightArrow: string;
  keyBasis: number;
  startingNote: string;
  octave: number;
  handleKeyBasisDecrease: () => void;
  handleKeyBasisIncrease: () => void;
  handleStartingNoteDecrease: () => void;
  handleStartingNoteIncrease: () => void;
  handleOctaveDecrease: () => void;
  handleOctaveIncrease: () => void;
}

export default function Controls({
  leftArrow,
  rightArrow,
  handleKeyBasisDecrease,
  keyBasis,
  handleKeyBasisIncrease,
  handleStartingNoteDecrease,
  startingNote,
  handleStartingNoteIncrease,
  handleOctaveDecrease,
  octave,
  handleOctaveIncrease,
}: props) {
  return (
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
        <img src={leftArrow} alt="arrow left" onClick={handleOctaveDecrease} />
        <span>Starting Octave: {octave}</span>
        <img
          src={rightArrow}
          alt="arrow right"
          onClick={handleOctaveIncrease}
        />
      </div>
    </section>
  );
}
