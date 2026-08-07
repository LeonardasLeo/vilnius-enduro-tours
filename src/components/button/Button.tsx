import "./Button.scss";
import type { ButtonProps } from "../../types/props";

function Button({ className, onClick, text }: ButtonProps) {
  return (
    <button className={`custom-button ${className || ""}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
