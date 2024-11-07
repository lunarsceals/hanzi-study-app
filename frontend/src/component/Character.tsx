import { useRef, useEffect } from "react";
import HanziWriter from "hanzi-writer";

interface CharacterProps {
  char: string;
}

//Creates HanziWriter instance
const Character = (prop: CharacterProps) => {
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
