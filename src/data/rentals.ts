import type { RentalType } from "../types/data";
import { RENTAL_PRICES } from "./siteData";

export const rentals: RentalType[] = [
  {
    id: 1,
    title: "rentals.weekdays",
    price: RENTAL_PRICES.WEEKDAYS,
  },
  {
    id: 2,
    title: "rentals.weekendsAndHolidays",
    price: RENTAL_PRICES.WEEKENDS_AND_HOLIDAYS,
  },
];
