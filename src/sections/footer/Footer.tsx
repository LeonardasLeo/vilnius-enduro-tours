import { useTranslation } from "react-i18next";
import "./Footer.scss";
import { BRAND_NAME, CURRENT_YEAR, LINKS } from "../../data/siteData";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import Logo from "../../components/logo/Logo";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer-section">
      <div>
        <Logo />
      </div>
      <div className="footer-content">
        <p>
          © {CURRENT_YEAR} {BRAND_NAME}. {t("footer.rights")}
        </p>
        <div className="footer-socials">
          <a
            className="footer-link"
            href={LINKS.FACEBOOK}
            target="_blank"
            rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a
            className="footer-link"
            href={LINKS.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
