import "./Logo.scss";
import type { LogoProps } from "../../types/props";

function Logo({ onClick, className }: LogoProps) {
  return (
    <img onClick={onClick} className={`logo ${className ?? ""}`} src="/images/logo.png" alt="" />
  );
}

export default Logo;
