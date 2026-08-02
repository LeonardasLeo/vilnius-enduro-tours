import "../assets/styles/Hero.scss";
import Button from "../components/Button";
import { BRAND_NAME } from "../data/siteData";
import { useTranslation } from "react-i18next";
import { utils } from "../utils";

function Hero({ sectionRef, paslaugosRef }: HeroProps) {
  const { t } = useTranslation();
  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-content">
        <h1 className="hero-title">{BRAND_NAME}</h1>
        <p className="hero-description">{t("hero.description")}</p>

        <Button
          className="hero-button"
          text={t("hero.button")}
          onClick={() => utils.scrollSectionIntoView(paslaugosRef)}
        />
      </div>
    </section>
  );
}

export default Hero;
