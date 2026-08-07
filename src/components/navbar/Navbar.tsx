import { useTranslation } from "react-i18next";
import "./Navbar.scss";
import UKIcon from "../../assets/icons/UKIcon";
import LithuaniaIcon from "../../assets/icons/LithuaniaIcon";
import type { NavbarProps } from "../../types/props";
import Logo from "../logo/Logo";

function Navbar({
  onAboutClick,
  onToursClick,
  onGalleryClick,
  onContactsClick,
  onHomeClick,
  onLogoClick,
  onRentalsClick,
}: NavbarProps) {
  const { t, i18n } = useTranslation();

  return (
    <div className="navbar">
      <div className="background"></div>
      <div className="logo-wrapper">
        <Logo onClick={onLogoClick} className="logo-navbar" />
      </div>

      <div className="navigation">
        <p className="nav-link" onClick={onHomeClick}>
          {t("nav.home")}
        </p>
        <p className="nav-link" onClick={onAboutClick}>
          {t("nav.info")}
        </p>
        <p className="nav-link" onClick={onToursClick}>
          {t("nav.tours")}
        </p>
        <p className="nav-link" onClick={onRentalsClick}>
          {t("nav.rentals")}
        </p>
        <p className="nav-link" onClick={onGalleryClick}>
          {t("nav.gallery")}
        </p>
        <p className="nav-link" onClick={onContactsClick}>
          {t("nav.contacts")}
        </p>
      </div>
      <div className="languages">
        <button
          className={`language ${i18n.language === "lt" && "disable"}`}
          onClick={() => {
            if (i18n.language !== "lt") i18n.changeLanguage("lt");
          }}>
          <LithuaniaIcon />
        </button>
        <p
          className={`language ${i18n.language === "en" && "disable"}`}
          onClick={() => {
            if (i18n.language !== "en") i18n.changeLanguage("en");
          }}>
          <UKIcon />
        </p>
      </div>
    </div>
  );
}

export default Navbar;
