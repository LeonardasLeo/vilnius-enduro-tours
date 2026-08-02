import "../assets/styles/Contacts.scss";
import { contactData } from "../data/contacts";
import InfoCard from "../components/InfoCard";
import { useTranslation } from "react-i18next";

function Contacts({ sectionRef }: SectionProps) {
  const { t } = useTranslation();
  return (
    <section ref={sectionRef} className="kontaktai-section">
      <h1 className="section-heading">{t("contacts.sectionHeader")}</h1>
      <div className="kontaktai-content">
        {contactData.map((contact: ContactType) => (
          <a
            className="kontaktai-link"
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            key={contact.id}>
            <InfoCard data={contact} iconHeight={40} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contacts;
