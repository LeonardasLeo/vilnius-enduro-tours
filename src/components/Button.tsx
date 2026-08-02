import "../assets/styles/components/Button.scss";

function Button({ className, onClick, text }: ButtonProps) {
  return (
    <button className={`custom-button ${className || ""}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
