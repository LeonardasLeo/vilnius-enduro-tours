import "./FeatureBlock.scss";
import { useTranslation } from "react-i18next";
import type { FeatureBlockProps } from "../../types/props";

function FeatureBlock({ data }: FeatureBlockProps) {
  const { t } = useTranslation();
  return (
    <div className="feature-block">
      {data.icon && <data.icon className="feature-block--vector" />}

      <div>
        <h2 className="feature-block--heading">{t(data.headingKey)}</h2>
        <p className="feature-block--text">{data.textKey ? t(data.textKey) : data.text}</p>
      </div>
    </div>
  );
}

export default FeatureBlock;
