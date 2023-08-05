import * as Tone from "tone";

interface Props {
  noteId: number;
  note: string;
  segment: string;
  lastKey: boolean;
  firstKey: boolean;
  handleClick: () => void;
}

const Key = ({ note, segment, lastKey, firstKey, handleClick }: Props) => {
  //We have slightly different logic for the white keys section and black keys section.
  let activeKey =
    (segment === "whiteKeys" && note.length === 1) ||
    (segment === "blackKeys" && note.length === 2);
  // let synth = new Tone.Synth().toDestination();

  function getClasses(): string {
    //default class assignment for all notes. The css for the note name is setting the note's size ratio.
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
      //Certain notes require the row to shift. e.g., if starting on A, including that key-segment of Ab that extends into the A note fixes the pattern.
      let startingKeysThatShiftTheBlackKeyRow = ["d", "e", "g", "a", "b"];
      if (startingKeysThatShiftTheBlackKeyRow.includes(note)) {
        //The note name needs to be formatted to fit the CSS classes.
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
      <div className={getClasses()} onMouseDown={handleClick}></div>
    </>
  );
};

export default Key;
