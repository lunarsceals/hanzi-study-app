interface props {
  onClick?: () => void;
  className?: string;
  text?: string;
}

const Button = ({ onClick, className, text }: props) => {
  return (
    <button className={`w-10 h-10 ${className} `} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
