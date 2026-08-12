import { useTranslation } from "react-i18next";
import BeforeTripCard from "../../components/cards/beforeTripCard/BeforeTripCard";
import DepositCard from "../../components/cards/depositCard/DepositCard";
import type { SectionProps } from "../../types/props";
import "./Info.scss";

function Info({ sectionRef }: SectionProps) {
  const { t } = useTranslation();

  return (
    <section className="info-section" ref={sectionRef}>
      <h1 className="section-heading">{t("info.sectionHeading")}</h1>
      <p className="info-intro">{t("info.description")}</p>
      <div className="info-content">
        <BeforeTripCard className="before-trip-card--custom" />
        <DepositCard />
      </div>
    </section>
  );
}

export default Info;
