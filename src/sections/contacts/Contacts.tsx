import "./Contacts.scss";
import { contactData } from "../../data/contacts";
import { useTranslation } from "react-i18next";
import type { ContactType } from "../../types/data";
import type { SectionProps } from "../../types/props";
import InfoBlock from "../../components/infoBlock/InfoBlock";

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
            <InfoBlock data={contact} iconHeight={40} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contacts;
