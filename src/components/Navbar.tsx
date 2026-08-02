import { useTranslation } from "react-i18next";
import "../assets/styles/components/Navbar.scss";
import UKIcon from "../assets/icons/UKIcon";
import LithuaniaIcon from "../assets/icons/LithuaniaIcon";

function Navbar({
  onAboutClick,
  onOffersClick,
  onGalleryClick,
  onContactsClick,
  onHomeClick,
}: NavbarProps) {
  const { t, i18n } = useTranslation();

  return (
    <div className="navbar">
      <div className="background"></div>
      <div className="logo">
        <p>LOGO</p>
      </div>
      <div className="navigation">
        <p className="nav-link" onClick={onHomeClick}>
          {t("nav.home")}
        </p>
        <p className="nav-link" onClick={onAboutClick}>
          {t("nav.info")}
        </p>
        <p className="nav-link" onClick={onOffersClick}>
          {t("nav.offers")}
        </p>
        <p className="nav-link" onClick={onGalleryClick}>
          {t("nav.gallery")}
        </p>
        <p className="nav-link" onClick={onContactsClick}>
          {t("nav.contacts")}
        </p>
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
    </div>
  );
}

export default Navbar;
