import { useState } from "react";
// import Cardface from "./Cardface";

const Flashcard = () => {
  const [isFlipped, setIsFlipped] = useState(true);

  // // const cardFront = <Cardface />;
  // // const cardBack = <Cardface />;

  const cardFront = "FRONT";
  const cardBack = "BACK";

  return (
    <div
      className="group w-96 h-64 perspective-1000 hover:cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`h-full w-full transition-all duration-300 preserve-3d ${isFlipped ? "rotate-x-180" : ""}`}
      >
        <div
          className={`flex justify-center rounded-lg items-center h-full w-full border border-gray-800 backface-hidden ${isFlipped ? "rotate-x-180" : ""}`}
        >
          {isFlipped ? cardFront : cardBack}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
