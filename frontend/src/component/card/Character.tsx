import { useRef, useEffect } from "react";
import HanziWriter from "hanzi-writer";

interface CharacterProps {
  char: string;
  width: number;
  height: number;
}

//Creates HanziWriter instance
const Character = ({ char, width, height }: CharacterProps) => {
  //The state of the character needs to be retained between rerenders
  const characterRef = useRef<HTMLSpanElement | null>(null);
  const writerRef = useRef<HanziWriter | null>(null);
  useEffect(() => {
    /*
      writerRef is here to keep track of the existance of a HanziWriter instance.
      Without it, when the componenet rerenders, a new instance will be created,
      and there will be duplicates.
    */
    if (characterRef.current && !writerRef.current) {
      writerRef.current = HanziWriter.create(characterRef.current, char, {
        width,
        height,
        padding: 0,
      });
    } else if (writerRef.current) {
      writerRef.current.setCharacter(char);
    }
  }, [char, width, height]);
  return <span ref={characterRef}></span>;
};

export default Character;
