import type { IconComponent } from "./common";

export type GuidedTourType = {
  id: number;
  titleKey: string;
  introKey: string;
  features: string[];
  closing: string;
  price: number;
  image: string;
  mostPopular: boolean;
};

export type InfoBlockData = {
  headingKey: string;
  textKey?: string;
  text?: string;
  icon?: IconComponent;
};

export type PhotoType = {
  src: string;
  thumbnail: string;
  descriptionKey: string;
};

export type TranslatedPhotos = {
  src: string;
  thumbnail: string;
  description: string;
  title: string;
};

export type ContactType = {
  id: number;
  headingKey: string;
  text: string;
  icon: IconComponent;
  link: string;
};

export type AboutType = {
  id: number;
  headingKey: string;
  textKey: string;
  icon: IconComponent;
};
