import Hero from "./sections//hero/Hero";
import Gallery from "./sections/gallery/Gallery";
import About from "./sections/about/About";
import Contacts from "./sections/contacts/Contacts";
import Navbar from "./components/navbar/Navbar";
import { useRef } from "react";
import Footer from "./sections/footer/Footer";
import { utils } from "./utils";
import Rentals from "./sections/rental/Rental";
import GuidedTours from "./sections/tours/GuidedTours";

function App() {
  const aboutRef: React.RefObject<HTMLElement | null> = useRef(null);
  const toursRef: React.RefObject<HTMLElement | null> = useRef(null);
  const galleryRef: React.RefObject<HTMLElement | null> = useRef(null);
  const contactsRef: React.RefObject<HTMLElement | null> = useRef(null);
  const heroRef: React.RefObject<HTMLElement | null> = useRef(null);
  const rentalsRef: React.RefObject<HTMLElement | null> = useRef(null);

  return (
    <>
      <Navbar
        onAboutClick={() => utils.scrollSectionIntoView(aboutRef)}
        onToursClick={() => utils.scrollSectionIntoView(toursRef)}
        onGalleryClick={() => utils.scrollSectionIntoView(galleryRef)}
        onContactsClick={() => utils.scrollSectionIntoView(contactsRef)}
        onHomeClick={() => utils.scrollSectionIntoView(heroRef)}
        onLogoClick={() => utils.scrollSectionIntoView(heroRef)}
        onRentalsClick={() => utils.scrollSectionIntoView(rentalsRef)}
      />
      <Hero sectionRef={heroRef} paslaugosRef={toursRef} />
      <About sectionRef={aboutRef} />
      <GuidedTours sectionRef={toursRef} />
      <Rentals sectionRef={rentalsRef} />
      <Gallery sectionRef={galleryRef} />
      <Contacts sectionRef={contactsRef} />
      <Footer />
    </>
  );
}

export default App;
