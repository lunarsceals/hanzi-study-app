interface props {
  onClick?: () => void;
  className?: string;
  text?: string;
}

const Button = ({ onClick, className, text }: props) => {
  return (
    <button className={`${className} `} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
