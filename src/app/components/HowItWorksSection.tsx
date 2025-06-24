import Card from "./Card";
import Section from "./Section";
import styles from "../page.module.css";
import { HOW_IT_WORKS } from "../constants";

const headingId = "how-it-works-heading";

const HowItWorksSection = () => (
  <Section
    className={`mb-xl ${styles.maxWidth900} ${styles.marginAuto}`}
    aria-labelledby={headingId}
  >
    <h3
      id={headingId}
      className={`text-lg mb-md ${styles.textCenter} ${styles.fontWeight600}`}
    >
      ¿Cómo funciona?
    </h3>
    <div className="flex gap-lg flex-wrap flex-center">
      {HOW_IT_WORKS.map(({ title, steps }) => (
        <Card key={title} className={`flex-1 ${styles.minWidth220}`}>
          <h4 className={styles.fontWeight600}>{title}</h4>
          <ol className={styles.olPaddingLeft20}>
            {steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </Card>
      ))}
    </div>
  </Section>
);

export default HowItWorksSection; 