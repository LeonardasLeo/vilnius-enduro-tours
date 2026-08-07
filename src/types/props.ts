import type { Dispatch, RefObject, SetStateAction } from "react";
import type { InfoBlockData, GuidedTourType } from "./data";

export type IconProps = {
  className?: string;
  height?: number;
};

export type NavbarProps = {
  onAboutClick: () => void;
  onToursClick: () => void;
  onGalleryClick: () => void;
  onContactsClick: () => void;
  onHomeClick: () => void;
  onLogoClick: () => void;
  onRentalsClick: () => void;
};

export type TourCardProps = {
  tour: GuidedTourType;
  activeCardNumber: number | undefined;
  index: number;
  setActiveCard: Dispatch<SetStateAction<number>>;
};

export type SectionProps = {
  sectionRef: RefObject<HTMLElement | null>;
};

export type ButtonProps = {
  className?: string;
  onClick: () => void;
  text: string;
};

export type InfoBlockProps = {
  data: InfoBlockData;
  iconHeight?: number;
};

export interface HeroProps extends SectionProps {
  paslaugosRef: RefObject<HTMLElement | null>;
}

export type LogoProps = {
  onClick?: () => void;
  className?: string;
};
