import Image from "next/image";
import Section from "./components/Section";
import Card from "./components/Card";
import HomeIntroSection from "./components/HomeIntroSection";
import Button from "./components/Button";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={`container ${styles.paddingTopXl}`}>
      {/* Hero Section */}
      <HomeIntroSection
        title="Conectando clubes de baloncesto españoles con entrenadores cualificados"
        subtitle="Encuentra al entrenador ideal o hazte visible para los mejores clubes. Rápido, sencillo y pensado para la comunidad FEB."
        actions={(
          <>
            <Button variant="secondary">Encuentra tu entrenador</Button>
            <Button variant="primary">Date de alta</Button>
          </>
        )}
      />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Features Overview */}
      <FeaturesSection />

      {/* Monetization/Plans Teaser */}
      <PricingSection />

      {/* Testimonials/Stats Placeholder */}
      <Section className={`mb-xl ${styles.maxWidth700} ${styles.marginAuto} ${styles.textCenter} ${styles.colorMuted}`}>
        <em>Con la confianza de clubes y entrenadores de baloncesto base en España. (Próximamente: testimonios y estadísticas)</em>
      </Section>

      {/* Footer */}
      <footer className={`flex gap-md flex-center mb-xl ${styles.footerColorInherit}`}>
        <a href="#">Acerca de</a>
        <a href="#">Contacto</a>
        <a href="#">Privacidad</a>
      </footer>
    </div>
  );
}
