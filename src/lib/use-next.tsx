import { useCallback } from "react";

export const useNextSection = () => {
  const scrollToNextSection = useCallback((nextSectionId: string) => {
    const section = document.getElementById(nextSectionId);
    if (section) {
      const headerHeight = 100; // Altura do header fixo
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollToPreviousSection = useCallback((previousSectionId: string) => {
    const section = document.getElementById(previousSectionId);
    if (section) {
      const headerHeight = 100; // Altura do header fixo
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 100; // Altura do header fixo
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return {
    scrollToNextSection,
    scrollToPreviousSection,
    scrollToSection,
  };
};
