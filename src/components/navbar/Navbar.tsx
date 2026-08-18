import { useTranslation } from "react-i18next";
import "./Navbar.scss";
import UKIcon from "../../assets/icons/UKIcon";
import LithuaniaIcon from "../../assets/icons/LithuaniaIcon";
import type { NavbarProps } from "../../types/props";
import Logo from "../logo/Logo";
import BurgerMenu from "../../assets/icons/BurgerMenu";
import { useEffect, useState } from "react";

function Navbar({
  onToursClick,
  onGalleryClick,
  onContactsClick,
  onHomeClick,
  onLogoClick,
  onRentalsClick,
  onInfoClick,
}: NavbarProps) {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const clickMenuItem = (callback: () => void) => {
    setIsMenuOpen(false);
    callback();
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="background"></div>
      <div className="logo-wrapper">
        <Logo onClick={onLogoClick} className="logo-navbar" />
      </div>

      <div className="navigation">
        <p className="nav-link" onClick={() => clickMenuItem(onHomeClick)}>
          {t("nav.home")}
        </p>
        <p className="nav-link" onClick={() => clickMenuItem(onToursClick)}>
          {t("nav.tours")}
        </p>
        <p className="nav-link" onClick={() => clickMenuItem(onRentalsClick)}>
          {t("nav.rentals")}
        </p>
        <p className="nav-link" onClick={() => clickMenuItem(onInfoClick)}>
          {t("nav.info")}
        </p>
        <p className="nav-link" onClick={() => clickMenuItem(onGalleryClick)}>
          {t("nav.gallery")}
        </p>
        <p className="nav-link" onClick={() => clickMenuItem(onContactsClick)}>
          {t("nav.contacts")}
        </p>
      </div>
      <div className="languages">
        <button
          className={`language ${i18n.language === "lt" && "disable"}`}
          onClick={() => {
            if (i18n.language !== "lt") i18n.changeLanguage("lt");
          }}
        >
          <LithuaniaIcon />
        </button>
        <p
          className={`language ${i18n.language === "en" && "disable"}`}
          onClick={() => {
            if (i18n.language !== "en") i18n.changeLanguage("en");
          }}
        >
          <UKIcon />
        </p>
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="burger-button"
      >
        <BurgerMenu className="burger-icon" />
      </button>
    </nav>
  );
}

export default Navbar;
