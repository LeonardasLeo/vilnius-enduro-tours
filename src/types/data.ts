import type { IconComponent } from "./common";

export type GuidedTourType = {
  id: number;
  titleKey: string;
  introKey: string;
  features: string[];
  price: number;
  image: string;
  mostPopular: boolean;
};

export type FeatureBlockData = {
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

export type FeatureType = {
  id: number;
  headingKey: string;
  textKey: string;
  icon: IconComponent;
};

export type RentalType = {
  id: number;
  title: string;
  price: number;
};

export type HighlightedBrandNameType = {
  first: string;
  highlight: string;
  last: string;
};

export type TourPricesType = {
  TWO_HOUR: number;
  FOUR_HOUR: number;
  FULL_DAY: number;
};

export type RentalPricesType = {
  WEEKDAYS: number;
  WEEKENDS_AND_HOLIDAYS: number;
};

export type LinksType = {
  FACEBOOK: string;
  INSTAGRAM: string;
};

export type ContactsDataType = {
  PHONE_NUMBER: string;
  EMAIL: string;
  LOCATION: {
    ADDRESS: string;
    MAPS_LINK: string;
  };
};
