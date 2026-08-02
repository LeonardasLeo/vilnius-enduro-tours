export const utils: UtilsType = {
  scrollSectionIntoView: (section: React.RefObject<HTMLElement | null>) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
  },
};
