import { useTranslation } from "react-i18next";
import type { SectionProps } from "../../types/props";
import RentalCard from "../../components/cards/rentalCard/RentalCard";
import BeforeTripCard from "../../components/cards/beforeTripCard/BeforeTripCard";
import "./Rental.scss";

function Rentals({ sectionRef }: SectionProps) {
  const { t } = useTranslation();

  return (
    <section className="rentals-section" ref={sectionRef}>
      <h1 className="section-heading">{t("rentals.sectionHeading")}</h1>
      <div className="rentals-content">
        <RentalCard className="rental-card--custom" />
        <BeforeTripCard className="before-trip-card--custom" />
      </div>
    </section>
  );
}

export default Rentals;
