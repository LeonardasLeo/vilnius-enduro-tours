import type { ComponentType, RefObject } from "react";
import type { IconProps } from "./props";

export type SectionRef = RefObject<HTMLElement | null>;

export type ScrollHandler = (section: SectionRef) => void;

export type UtilsType = {
  scrollSectionIntoView: ScrollHandler;
};

export type IconComponent = ComponentType<IconProps>;
