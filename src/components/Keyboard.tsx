import { PolySynth } from "tone";
import Key from "./Key";

interface Props {
  keyBasis: number;
  startingNote: string;
  initialOctave: number;
}

const Keyboard = ({ keyBasis, startingNote, initialOctave }: Props) => {
  const synth = new PolySynth().toDestination();
  //Used for generating keyboard
  //todo: move key generation into its own function, call that function when the user changes the props interfaced to them
  const keyMap: any = { a: 0, b: 2, c: 3, d: 5, e: 7, f: 8, g: 10 };
  const keysList = [
    "a",
    "bb",
    "b",
    "c",
    "db",
    "d",
    "eb",
    "e",
    "f",
    "gb",
    "g",
    "ab",
  ];
  let octave: number = initialOctave;
  const assignNote = (note: string, index: number) => {
    if (note === "c" && index !== 0) {
      octave++;
    }
    return octave;
  };

  const keyArray = (segment: string) => {
    octave = initialOctave;
    return Array(keyBasis)
      .fill("")
      .map((_, index, noteArray) => {
        let currentNote = keysList[(index + keyMap[startingNote]) % 12];
        let octave = assignNote(currentNote, index);

        return (
          <Key
            key={index}
            noteId={index}
            note={currentNote}
            segment={segment}
            lastKey={index === noteArray.length - 1}
            firstKey={index === 0}
            handleClick={() =>
              synth.triggerAttackRelease(currentNote + octave, "8n")
            }
          ></Key>
        );
      });
  };

  //End of keyboard generation logic
  //------------------------------------------------------------------------------------------

  return (
    <>
      <main className="keyboardContainer">
        <div className={"blackKeyContainer"}>
          {keyArray("blackKeys")}
          <div />
        </div>
        <div className="whiteKeyContainer">{keyArray("whiteKeys")}</div>
      </main>
    </>
  );
};

export default Keyboard;
