import "./InfoBlock.scss";
import { useTranslation } from "react-i18next";
import type { InfoBlockProps } from "../../types/props";

function InfoBlock({ data, iconHeight }: InfoBlockProps) {
  const { t } = useTranslation();
  return (
    <div className="info-block">
      {data.icon && <data.icon className="info-block--vector" height={iconHeight} />}

      <div>
        <h2 className="info-block--heading">{t(data.headingKey)}</h2>
        <p className="info-block--text">{data.textKey ? t(data.textKey) : data.text}</p>
      </div>
    </div>
  );
}

export default InfoBlock;
