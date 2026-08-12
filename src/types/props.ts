import type { Dispatch, RefObject, SetStateAction } from "react";
import type { FeatureBlockData, GuidedTourType, RentalType } from "./data";

export type IconProps = {
  className?: string;
  height?: number;
};

export type NavbarProps = {
  onToursClick: () => void;
  onGalleryClick: () => void;
  onContactsClick: () => void;
  onHomeClick: () => void;
  onLogoClick: () => void;
  onRentalsClick: () => void;
  onInfoClick: () => void;
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

export type FeatureBlockProps = {
  data: FeatureBlockData;
};

export interface HeroProps extends SectionProps {
  paslaugosRef: RefObject<HTMLElement | null>;
}

export type LogoProps = {
  onClick?: () => void;
  className?: string;
};

export type RentalCardProps = {
  className: string;
  rental: RentalType;
};
