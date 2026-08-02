import "../assets/styles/components/InfoCard.scss";
import { useTranslation } from "react-i18next";

function InfoCard({ data, iconHeight }: InfoCardProps) {
  const { t } = useTranslation();
  return (
    <div className="info-card">
      {data.icon && <data.icon className="info-card--vector" height={iconHeight} />}

      <div>
        <h2 className="info-card--heading">{t(data.headingKey)}</h2>
        <p className="info-card--text">{data.textKey ? t(data.textKey) : data.text}</p>
      </div>
    </div>
  );
}

export default InfoCard;
