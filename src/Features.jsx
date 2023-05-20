// import Feature from "./Feature"
import { features } from '../data.js';
import Feature from './Feature.jsx';

const Features = () => {
  return (
    <section className="features">
      {features.map((feature) => <Feature key={feature.id} {...feature} />)}
    </section>
  );
};
export default Features;
