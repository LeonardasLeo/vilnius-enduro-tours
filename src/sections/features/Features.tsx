import "./Features.scss";
import { featuresData } from "../../data/features";
import type { FeatureType } from "../../types/data";
import FeatureBlock from "../../components/featureBlock/FeatureBlock";

function Features() {
  return (
    <section className="features-section">
      <div className="features-content">
        {featuresData.map((feature: FeatureType) => (
          <FeatureBlock data={feature} key={feature.id} />
        ))}
      </div>
    </section>
  );
}

export default Features;
