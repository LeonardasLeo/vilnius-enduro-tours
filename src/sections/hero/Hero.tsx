import "./Hero.scss";
import Button from "../../components/button/Button";
import { BRAND_NAME_HIGHLIGHT } from "../../data/siteData";
import { useTranslation } from "react-i18next";
import { utils } from "../../utils";
import type { HeroProps } from "../../types/props";

function Hero({ sectionRef, paslaugosRef }: HeroProps) {
  const { t } = useTranslation();
  return (
    <header className="hero-section" ref={sectionRef}>
      <div className="hero-content">
        <h1 className="hero-title">
          {BRAND_NAME_HIGHLIGHT.first}{" "}
          <span className="hero-title--highlight">{BRAND_NAME_HIGHLIGHT.highlight}</span>{" "}
          {BRAND_NAME_HIGHLIGHT.last}
        </h1>
        <p className="hero-description">{t("hero.description")}</p>

        <Button
          className="hero-button"
          text={t("hero.button")}
          onClick={() => utils.scrollSectionIntoView(paslaugosRef)}
        />
      </div>
    </header>
  );
}

export default Hero;
