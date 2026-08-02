import { useTranslation } from "react-i18next";
import "../assets/styles/components/OfferCard.scss";

function PricingCard({ offer, activeCardNumber, index, setActiveCard }: OfferCardProps) {
  const { t } = useTranslation();
  const isCardActive: boolean = activeCardNumber === index;

  return (
    <div
      className={`offer-card ${isCardActive ? "active-card" : "inactive-card"}`}
      style={{ backgroundImage: `url(${offer.image})` }}
      onClick={() => setActiveCard(index)}>
      {offer.mostPopular && <span className="most-popular">{t("offers.mostPopular")}</span>}

      <h2 className="offer-card--title">{t(offer.titleKey)}</h2>

      {isCardActive && <p className="offer-card--description">{t(offer.descriptionKey)}</p>}

      <p className="offer-card--price">
        {t("offers.tourPrice")} <span>€{offer.price}</span>
      </p>
    </div>
  );
}

export default PricingCard;
