import { useTranslation } from "react-i18next";
import Helmet from "../../../assets/icons/Helmet";
import "../../../assets/styles/Card.scss";
import "./BeforeTripCard.scss";
import Armor from "../../../assets/icons/Armor";
import Boots from "../../../assets/icons/Boots";
import Gloves from "../../../assets/icons/Gloves";

function BeforeTripCard({ className }: { className?: string }) {
  const { t } = useTranslation();
  return (
    <div className={`card before-trip-card ${className}`}>
      <div className="card-content">
        <h2 className="card-title">{t("info.equipment.title")}</h2>
        <p >{t("info.equipment.intro")}</p>
        <div className="protective-gear--wrapper">
          <div className="protective-gear--card">
            <Helmet className="protective-gear--icon" />
            <p className="protective-gear--text">{t("info.equipment.helmet")}</p>
          </div>
          <div className="protective-gear--card">
            <Armor className="protective-gear--icon" />
            <p className="protective-gear--text">{t("info.equipment.armor")}</p>
          </div>
          <div className="protective-gear--card">
            <Gloves className="protective-gear--icon" />
            <p className="protective-gear--text">{t("info.equipment.gloves")}</p>
          </div>
          <div className="protective-gear--card">
            <Boots className="protective-gear--icon" />
            <p className="protective-gear--text">{t("info.equipment.boots")}</p>
          </div>
        </div>
        <p>
          {t("info.equipment.bootsDisclaimer")}
        </p>
        <p>{t("info.equipment.closingText")}</p>
      </div>
    </div>
  );
}

export default BeforeTripCard;
