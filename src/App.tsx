import Hero from "./sections/Hero";
import Gallery from "./sections/Gallery";
import About from "./sections/About";
import Offers from "./sections/Offers";
import Contacts from "./sections/Contacts";
import Navbar from "./components/Navbar";
import { useRef } from "react";
import Footer from "./sections/Footer";
import { utils } from "./utils";

function App() {
  const aboutRef: React.RefObject<HTMLElement | null> = useRef(null);
  const offersRef: React.RefObject<HTMLElement | null> = useRef(null);
  const galleryRef: React.RefObject<HTMLElement | null> = useRef(null);
  const contactsRef: React.RefObject<HTMLElement | null> = useRef(null);
  const heroRef: React.RefObject<HTMLElement | null> = useRef(null);

  return (
    <>
      <Navbar
        onAboutClick={() => utils.scrollSectionIntoView(aboutRef)}
        onOffersClick={() => utils.scrollSectionIntoView(offersRef)}
        onGalleryClick={() => utils.scrollSectionIntoView(galleryRef)}
        onContactsClick={() => utils.scrollSectionIntoView(contactsRef)}
        onHomeClick={() => utils.scrollSectionIntoView(heroRef)}
      />
      <Hero sectionRef={heroRef} paslaugosRef={offersRef} />
      <About sectionRef={aboutRef} />
      <Offers sectionRef={offersRef} />
      <Gallery sectionRef={galleryRef} />
      <Contacts sectionRef={contactsRef} />
      <Footer />
    </>
  );
}

export default App;
