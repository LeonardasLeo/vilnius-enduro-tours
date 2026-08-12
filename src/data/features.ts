import HandshakeIcon from "../assets/icons/HandshakeIcon";
import MotorcycleIcon from "../assets/icons/MotorcycleIcon";
import TreeIcon from "../assets/icons/TreeIcon";
import type { FeatureType } from "../types/data";

export const featuresData: FeatureType[] = [
  //stores references to i18n text values
  {
    id: 1,
    headingKey: "features.motorcycle.heading",
    textKey: "features.motorcycle.text",
    icon: MotorcycleIcon,
  },
  {
    id: 2,
    headingKey: "features.route.heading",
    textKey: "features.route.text",
    icon: TreeIcon,
  },
  {
    id: 3,
    headingKey: "features.everyone.heading",
    textKey: "features.everyone.text",
    icon: HandshakeIcon,
  },
];
