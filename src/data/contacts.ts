import EmailIcon from "../assets/icons/EmailIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import PinIcon from "../assets/icons/PinIcon";
import { BRAND_NAME, CONTACTS } from "./siteData";
import type { ContactType } from "../types/data";

export const contactData: ContactType[] = [
  //text is not translated, because it doesnt change regardless of language
  {
    id: 1,
    headingKey: "contacts.phone.heading",
    text: CONTACTS.PHONE_NUMBER,
    icon: PhoneIcon,
    link: `tel:${CONTACTS.PHONE_NUMBER}`,
  },
  {
    id: 2,
    headingKey: "contacts.email.heading",
    text: CONTACTS.EMAIL,
    icon: EmailIcon,
    link: `mailto:${CONTACTS.EMAIL}`,
  },
  {
    id: 3,
    headingKey: "contacts.location.heading",
    text: `${BRAND_NAME}, ${CONTACTS.LOCATION.ADDRESS}`,
    icon: PinIcon,
    link: CONTACTS.LOCATION.MAPS_LINK,
  },
];
