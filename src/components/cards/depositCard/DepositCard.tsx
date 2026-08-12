import { useTranslation } from "react-i18next";
import { DEPOSIT_AMOUNT } from "../../../data/siteData";
import "./DepositCard.scss";

function DepositCard() {
  const { t } = useTranslation();

  return (
    <div className="card deposit-card">
      <h1 className="card-title">{t("info.deposit.title")}</h1>
      <p>{t("info.deposit.description")}</p>
      <div className="deposit">
        <p className="deposit-price">€{DEPOSIT_AMOUNT}</p>
        <p className="deposit-message">{t("info.deposit.amountLabel")}</p>
      </div>
      <p>{t("info.deposit.returnPolicy")}</p>
    </div>
  );
}

export default DepositCard;
