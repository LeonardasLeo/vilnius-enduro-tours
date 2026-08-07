import "./About.scss";
import { aboutData } from "../../data/about";
import InfoBlock from "../../components/infoBlock/InfoBlock";
import type { SectionProps } from "../../types/props";

function About({ sectionRef }: SectionProps) {
  return (
    <section ref={sectionRef} className="info-section">
      <div className="info-content">
        {aboutData.map((data) => (
          <InfoBlock data={data} iconHeight={100} key={data.id} />
        ))}
      </div>
    </section>
  );
}

export default About;
