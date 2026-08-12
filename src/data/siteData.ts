import type {
  ContactsDataType,
  HighlightedBrandNameType,
  LinksType,
  RentalPricesType,
  TourPricesType,
} from "../types/data";

export const BRAND_NAME: string = "Vilnius Enduro Tours";
export const BRAND_NAME_HIGHLIGHT: HighlightedBrandNameType = {
  first: "Vilnius",
  highlight: "Enduro",
  last: "Tours",
};
export const CURRENT_YEAR: number = new Date().getFullYear();
export const DEPOSIT_AMOUNT: number = 250;
export const TOUR_PRICES: TourPricesType = {
  TWO_HOUR: 129,
  FOUR_HOUR: 169,
  FULL_DAY: 259,
};
export const RENTAL_PRICES: RentalPricesType = {
  WEEKDAYS: 70,
  WEEKENDS_AND_HOLIDAYS: 80,
};

export const LINKS: LinksType = {
  FACEBOOK: "https://www.facebook.com/profile.php?id=61572361613243",
  INSTAGRAM: "https://www.instagram.com/vilnius_enduro_tours/",
};

export const CONTACTS: ContactsDataType = {
  PHONE_NUMBER: "+37068881519",
  EMAIL: "mototuras@gmail.com",
  LOCATION: {
    ADDRESS: "Ramybės g. 4, Vilnius",
    MAPS_LINK: "https://www.google.com/maps/search/?api=1&query=Ramybės+g.+4,+Vilnius",
  },
};
