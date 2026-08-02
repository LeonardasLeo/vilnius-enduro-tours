import { useState } from "react";
import "../assets/styles/Offers.scss";
import PricingCard from "../components/OfferCard";
import { offers } from "../data/offers";
import { useTranslation } from "react-i18next";

function Offers({ sectionRef }: SectionProps) {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState<number>(1);
  return (
    <section ref={sectionRef} className="offers-section">
      <h1 className="section-heading">{t("offers.sectionHeading")}</h1>

      <div className="plan-wrapper">
        {offers.map((offer: OfferType, i: number) => (
          <PricingCard
            offer={offer}
            activeCardNumber={activeCard}
            index={i}
            setActiveCard={setActiveCard}
            key={offer.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Offers;
