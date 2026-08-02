import "../assets/styles/About.scss";
import { aboutData } from "../data/about";
import InfoCard from "../components/InfoCard";

function About({ sectionRef }: SectionProps) {
  return (
    <section ref={sectionRef} className="info-section">
      <div className="info-content">
        {aboutData.map((data) => (
          <InfoCard data={data} iconHeight={100} key={data.id} />
        ))}
      </div>
    </section>
  );
}

export default About;
