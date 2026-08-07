import { useTranslation } from "react-i18next";
import "./TourCard.scss";
import "../../../assets/styles/Card.scss";
import type { TourCardProps } from "../../../types/props";

function TourCard({ tour, activeCardNumber, index, setActiveCard }: TourCardProps) {
  const { t } = useTranslation();
  const isCardActive: boolean = activeCardNumber === index;

  return (
    <div
      className={`card tour-card ${isCardActive ? "active-card" : "inactive-card"}`}
      style={{ backgroundImage: `url(${tour.image})` }}
      onClick={() => setActiveCard(index)}>
      {tour.mostPopular && <span className="most-popular">{t("guidedTours.mostPopular")}</span>}

      <div className="card-content tour-card--content">
        <h2 className="card-title">{t(tour.titleKey)}</h2>

        <p className="tour-card--intro">{t(tour.introKey)}</p>

        <ul className="tour-card--features">
          {tour.features.map((feature) => (
            <li className="feature">{t(feature)}</li>
          ))}
        </ul>

        <p className="tour-card--price">
          {t("guidedTours.tourPrice")} <span>€{tour.price}</span>
        </p>
      </div>
    </div>
  );
}

export default TourCard;
