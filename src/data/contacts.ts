import EmailIcon from "../assets/icons/EmailIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import PinIcon from "../assets/icons/PinIcon";
import { BRAND_NAME } from "./siteData";
import type { ContactType } from "../types/data";

export const contactData: ContactType[] = [
  //text is not translated, because it doesnt change regardless of language
  {
    id: 1,
    headingKey: "contacts.phone.heading",
    text: "+37068881519",
    icon: PhoneIcon,
    link: "tel:+37068881519",
  },
  {
    id: 2,
    headingKey: "contacts.email.heading",
    text: "mototuras@gmail.com",
    icon: EmailIcon,
    link: "mailto:mototuras@gmail.com",
  },
  {
    id: 3,
    headingKey: "contacts.location.heading",
    text: `${BRAND_NAME}, Ramybės g. 4, Vilnius`,
    icon: PinIcon,
    link: "https://www.google.com/maps/search/?api=1&query=Ramybės+g.+4,+Vilnius",
  },
];
