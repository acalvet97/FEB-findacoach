import Card from "./Card";
import Section from "./Section";
import styles from "../page.module.css";
import { FEATURES } from "../constants";

const headingId = "features-heading";

const FeaturesSection = () => (
  <Section
    className={`mb-xl ${styles.maxWidth900} ${styles.marginAuto}`}
    aria-labelledby={headingId}
  >
    <h3
      id={headingId}
      className={`text-lg mb-md ${styles.textCenter} ${styles.fontWeight600}`}
    >
      Características
    </h3>
    <div className="flex gap-lg flex-wrap flex-center">
      {FEATURES.map(({ id, title, items }) => (
        <Card key={id} id={id} className={`flex-1 ${styles.minWidth220} ${styles.bgColorBg}`}>
          <h4 className={`${styles.fontWeight600} ${styles.marginBottom8}`}>{title}</h4>
          <ul className={styles.ulTextLeftPadding20}>
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </Card>
      ))}
    </div>
  </Section>
);

export default FeaturesSection; 