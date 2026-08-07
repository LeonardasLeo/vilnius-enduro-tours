import type { GuidedTourType } from "../types/data";

export const guidedTours: GuidedTourType[] = [
  {
    id: 1,
    titleKey: "guidedTours.tours.short.title",
    introKey: "guidedTours.tours.short.intro",
    features: [
      "guidedTours.tours.short.features.feature1",
      "guidedTours.tours.short.features.feature2",
      "guidedTours.tours.short.features.feature3",
      "guidedTours.tours.short.features.feature4",
    ],
    closing: "guidedTours.tours.short.closing",
    price: 129,
    image: "/images/image00010.jpeg",
    mostPopular: false,
  },
  {
    id: 2,
    titleKey: "guidedTours.tours.medium.title",
    introKey: "guidedTours.tours.medium.intro",
    features: [
      "guidedTours.tours.medium.features.feature1",
      "guidedTours.tours.medium.features.feature2",
      "guidedTours.tours.medium.features.feature3",
      "guidedTours.tours.medium.features.feature4",
    ],
    closing: "guidedTours.tours.medium.closing",
    price: 169,
    image: "/images/image00011.jpeg",
    mostPopular: true,
  },
  {
    id: 3,
    titleKey: "guidedTours.tours.fullDay.title",
    introKey: "guidedTours.tours.fullDay.intro",
    features: [
      "guidedTours.tours.fullDay.features.feature1",
      "guidedTours.tours.fullDay.features.feature2",
      "guidedTours.tours.fullDay.features.feature3",
      "guidedTours.tours.fullDay.features.feature4",
    ],
    closing: "guidedTours.tours.fullDay.closing",
    price: 259,
    image: "/images/image00019.jpeg",
    mostPopular: false,
  },
];
