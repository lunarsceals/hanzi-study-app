interface CardfaceProps {
  className?: string;
}

const Cardface = ({ className }: CardfaceProps) => {
  return (
    <div className={`flex flex-col h-full w-full rounded-md p-6 ${className}`}>
      <div
        className={"p-1 flex border border-gray-400 rounded-md justify-center "}
      >
        +
      </div>
      <div
        className={
          "p-1 flex flex-grow border border-gray-400 rounded-md justify-center items-center text-center"
        }
      >
        <p>+</p>
      </div>
      <div
        className={"p-1 flex border border-gray-400 rounded-md justify-center"}
      >
        +
      </div>
    </div>
  );
};

export default Cardface;
