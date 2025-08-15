import SplitHero from '../../components/SplitHero';
import PricingPlans from '../components/PricingPlans';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <SplitHero />
      </section>
          <section id="cards" className="scroll-mt-16">
        <PricingPlans />
      </section>
    </main>
  );
}