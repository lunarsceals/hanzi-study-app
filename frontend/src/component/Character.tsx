import { useRef, useEffect } from "react";
import HanziWriter from "hanzi-writer";

interface CharacterProps {
  char: string;
}

const Character = (prop: CharacterProps) => {
  const characterRef = useRef<HTMLSpanElement | null>(null);
  const writerRef = useRef<HanziWriter | null>(null);

  useEffect(() => {
    if (characterRef.current && !writerRef.current) {
      writerRef.current = HanziWriter.create(characterRef.current, prop.char, {
        width: 70,
        height: 70,
        padding: 5,
      });
    } else if (writerRef.current) {
      writerRef.current.setCharacter(prop.char);
    }
  }, [prop.char]);

  return <span ref={characterRef}></span>;
};

export default Character;
