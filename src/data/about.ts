import HandshakeIcon from "../assets/icons/HandshakeIcon";
import MotorcycleIcon from "../assets/icons/MotorcycleIcon";
import TreeIcon from "../assets/icons/TreeIcon";

export const aboutData: AboutType[] = [
  //stores references to i18n text values
  {
    id: 1,
    headingKey: "info.motorcycle.heading",
    textKey: "info.motorcycle.text",
    icon: MotorcycleIcon,
  },
  {
    id: 2,
    headingKey: "info.route.heading",
    textKey: "info.route.text",
    icon: TreeIcon,
  },
  {
    id: 3,
    headingKey: "info.everyone.heading",
    textKey: "info.everyone.text",
    icon: HandshakeIcon,
  },
];
