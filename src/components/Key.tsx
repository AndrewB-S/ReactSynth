import * as Tone from "tone";

interface Props {
  noteId: number;
  note: string;
  octave: any;
  segment: string;
  lastKey: boolean;
  firstKey: boolean;
}

const Key = ({ note, octave, segment, lastKey, firstKey }: Props) => {
  let activeKey =
    (segment === "whiteKeys" && note.length === 1) ||
    (segment === "blackKeys" && note.length === 2);
  let synth = new Tone.Synth().toDestination();

  function getClasses(): string {
    let keyClasses = `${note} `;
    if (activeKey) {
      if (segment === "whiteKeys") {
        keyClasses += "whiteKey ";
      } else if (segment === "blackKeys") {
        keyClasses += "blackKey ";
      }
    }
    //Black Key row class assignment
    if (firstKey && segment === "blackKeys") {
      //Certain notes require the row to shift. e.g., if starting on A, including that would-be portion of Ab fixes the pattern at the start.
      let startingKeysThatShiftTheBlackKeyRow = ["d", "e", "g", "a", "b"];
      if (startingKeysThatShiftTheBlackKeyRow.includes(note)) {
        keyClasses += `startsWith${note[0].toUpperCase() + note.slice(1)} `;
      }
    } else if (lastKey && segment === "blackKeys") {
      let endingKeysThatShiftTheBlackKeyRow = ["c", "d", "f", "g", "a"];
      if (endingKeysThatShiftTheBlackKeyRow.includes(note)) {
        keyClasses += `endsWith${note[0].toUpperCase() + note.slice(1)} `;
      }
    }

    //White Key row class assignment
    if (firstKey && segment === "whiteKeys") {
      let startingKeysThatShiftTheWhiteKeyRow = ["db", "eb", "gb", "ab", "bb"];
      if (startingKeysThatShiftTheWhiteKeyRow.includes(note)) {
        keyClasses += `startsWith${note[0].toUpperCase() + note.slice(1)} `;
      }
    } else if (lastKey && segment === "whiteKeys") {
      let endingKeysThatShiftTheWhiteKeyRow = ["db", "eb", "gb", "ab", "bb"];
      if (endingKeysThatShiftTheWhiteKeyRow.includes(note)) {
        keyClasses += `endsWith${note[0].toUpperCase() + note.slice(1)} `;
      }
    }
    return keyClasses;
  }

  return (
    <>
      <div
        className={getClasses()}
        onClick={() => synth.triggerAttackRelease(`${note + octave}`, "4n")}
      ></div>
    </>
  );
};

export default Key;
