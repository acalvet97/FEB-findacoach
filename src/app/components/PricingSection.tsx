import Section from "./Section";
import styles from "../page.module.css";
import { PRICING_PLANS } from "../constants";

const headingId = "pricing-heading";

const PricingSection = () => (
  <Section
    className={`mb-xl ${styles.maxWidth700} ${styles.marginAuto} ${styles.textCenter}`}
    aria-labelledby={headingId}
  >
    <h3
      id={headingId}
      className={`text-md mb-sm ${styles.fontWeight600}`}
    >
      Precios
    </h3>
    <p className="mb-sm">Gratis para entrenadores. Planes flexibles para clubes.</p>
    <ul className={`${styles.displayInlineBlock} ${styles.ulTextLeftPadding20} ${styles.ulNoMargin}`}>
      {PRICING_PLANS.map((plan, i) => <li key={i}>{plan}</li>)}
    </ul>
  </Section>
);

export default PricingSection; 