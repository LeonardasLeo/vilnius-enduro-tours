import type { UtilsType } from "./types/common";

export const utils: UtilsType = {
  scrollSectionIntoView: (section: React.RefObject<HTMLElement | null>) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
  },
};
