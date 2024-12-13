interface props {
  onClick?: () => void;
  className?: string;
  text?: string;
}

export default function Button({ onClick, className, text }: props) {
  return (
    <button className={`${className} `} onClick={onClick}>
      {text}
    </button>
  );
}
