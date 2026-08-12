import { useTranslation } from "react-i18next";
import type { SectionProps } from "../../types/props";
import RentalCard from "../../components/cards/rentalCard/RentalCard";
import "../../assets/styles/Card.scss";
import "./Rental.scss";
import { rentals } from "../../data/rentals";

function Rentals({ sectionRef }: SectionProps) {
  const { t } = useTranslation();

  return (
    <section className="rentals-section" ref={sectionRef}>
      <h1 className="section-heading">{t("rentals.sectionHeading")}</h1>

      <p className="rental-description">{t("rentals.topText")}</p>
      <div className="rentals-content">
        {rentals.map((rental) => (
          <RentalCard className="rental-card--custom" rental={rental} key={rental.id} />
        ))}
      </div>
      <p className="rental-closing">{t("rentals.bottomText")}</p>
    </section>
  );
}

export default Rentals;
