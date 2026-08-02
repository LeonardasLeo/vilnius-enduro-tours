// Global ambient declarations — no top-level import/export.
// These types are available in every file WITHOUT an import.

type IconProps = {
  className?: string;
  height?: number;
};

type IconComponent = import("react").ComponentType<IconProps>;

type NavbarProps = {
  onAboutClick: () => void;
  onOffersClick: () => void;
  onGalleryClick: () => void;
  onContactsClick: () => void;
  onHomeClick: () => void;
};

type OfferType = {
  id: number;
  titleKey: string;
  descriptionKey: string;
  price: number;
  image: string;
  mostPopular: boolean;
};

type OfferCardProps = {
  offer: OfferType;
  activeCardNumber: number | undefined;
  index: number;
  setActiveCard: import("react").Dispatch<import("react").SetStateAction<number>>;
};

type SectionProps = {
  sectionRef: import("react").RefObject<HTMLElement | null>;
};

type ButtonProps = {
  className: string;
  onClick: () => void;
  text: string;
};

type InfoCardData = {
  headingKey: string;
  textKey?: string;
  text?: string;
  icon?: IconComponent;
};

type InfoCardProps = {
  data: InfoCardData;
  iconHeight?: number;
};

interface HeroProps extends SectionProps {
  paslaugosRef: import("react").RefObject<HTMLElement | null>;
}

type PhotoType = {
  src: string;
  thumbnail: string;
  descriptionKey: string;
};

type TranslatedPhotos = {
  src: string;
  thumbnail: string;
  description: string;
  title: string;
};

type ContactType = {
  id: number;
  headingKey: string;
  text: string;
  icon: IconComponent;
  link: string;
};

type AboutType = {
  id: number;
  headingKey: string;
  textKey: string;
  icon: IconComponent;
};

type SectionRef = import("react").RefObject<HTMLElement | null>;

type ScrollHandler = (section: SectionRef) => void;

type UtilsType = {
  scrollSectionIntoView: ScrollHandler;
};
