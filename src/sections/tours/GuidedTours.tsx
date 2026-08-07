import { useState } from "react";
import "./GuidedTours.scss";
import TourCard from "../../components/cards/tourCard/TourCard";
import { useTranslation } from "react-i18next";
import type { GuidedTourType } from "../../types/data";
import type { SectionProps } from "../../types/props";
import { guidedTours } from "../../data/guidedTours";

function GuidedTours({ sectionRef }: SectionProps) {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState<number>(1);
  return (
    <section ref={sectionRef} className="tours-section">
      <h1 className="section-heading">{t("guidedTours.sectionHeading")}</h1>

      <div className="plan-wrapper">
        {guidedTours.map((tour: GuidedTourType, i: number) => (
          <TourCard
            tour={tour}
            activeCardNumber={activeCard}
            index={i}
            setActiveCard={setActiveCard}
            key={tour.id}
          />
        ))}
      </div>
    </section>
  );
}

export default GuidedTours;
