import { useTranslation } from "react-i18next";
import "./RentalCard.scss";
import "../../../assets/styles/Card.scss";
import type { RentalCardProps } from "../../../types/props";

function RentalCard({ className, rental }: RentalCardProps) {
  const { t } = useTranslation();
  return (
    <div className={`card rental-card ${className}`}>
      <h3 className="rental-card--title">{t(rental.title)}</h3>
      <p>
        <span className="rental-card--price">€{rental.price}</span>{" "}
        <span className="per-day">{t("rentals.perDay")}</span>
      </p>
    </div>
  );
}

export default RentalCard;
