import { useTranslation } from "react-i18next";
import "./RentalCard.scss";
import "../../../assets/styles/Card.scss";

function RentalCard({ className }: { className: string }) {
  const { t } = useTranslation();
  return (
    <div
      className={`card rental-card ${className}`}
      style={{ backgroundImage: `url(/images/image00014.jpeg)` }}>
      <div className="card-content">
        <h2 className="card-title">{t("rentals.rental.title")}</h2>
        <p>
          {t("rentals.rental.topText")}
        </p>
        <ul className="rental-card--list">
          <li>{t("rentals.rental.weekdays")}</li>
          <li>{t("rentals.rental.weekends")}</li>
        </ul>
        <p>
          {t("rentals.rental.bottomText")}
        </p>
      </div>
    </div>
  );
}

export default RentalCard;
