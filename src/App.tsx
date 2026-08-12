import Hero from "./sections/hero/Hero";
import Gallery from "./sections/gallery/Gallery";
import Features from "./sections/features/Features";
import Contacts from "./sections/contacts/Contacts";
import Navbar from "./components/navbar/Navbar";
import { useRef } from "react";
import Footer from "./sections/footer/Footer";
import { utils } from "./utils";
import Rentals from "./sections/rental/Rental";
import GuidedTours from "./sections/tours/GuidedTours";
import Info from "./sections/info/Info";

function App() {
  const toursRef = useRef<HTMLElement | null>(null);
  const galleryRef = useRef<HTMLElement | null>(null);
  const contactsRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const rentalsRef = useRef<HTMLElement | null>(null);
  const infoRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <Navbar
        onToursClick={() => utils.scrollSectionIntoView(toursRef)}
        onGalleryClick={() => utils.scrollSectionIntoView(galleryRef)}
        onContactsClick={() => utils.scrollSectionIntoView(contactsRef)}
        onHomeClick={() => utils.scrollSectionIntoView(heroRef)}
        onLogoClick={() => utils.scrollSectionIntoView(heroRef)}
        onRentalsClick={() => utils.scrollSectionIntoView(rentalsRef)}
        onInfoClick={() => utils.scrollSectionIntoView(infoRef)}
      />

      <main>
        <Hero sectionRef={heroRef} paslaugosRef={toursRef} />

        <Features />

        <GuidedTours sectionRef={toursRef} />

        <Rentals sectionRef={rentalsRef} />

        <Info sectionRef={infoRef} />

        <Gallery sectionRef={galleryRef} />

        <Contacts sectionRef={contactsRef} />
      </main>

      <Footer />
    </>
  );
}

export default App;
