import { Droplets, Wrench, Clock, Shield, CheckCircle2 } from "lucide-react";

const warningSignsData = [
  {
    icon: Droplets,
    title: "Water Line Access",
    description: "The most critical step is routing a cold water line through the wall to the exact height and position above your cooktop.",
  },
  {
    icon: Wrench,
    title: "Structural Bracing",
    description: "Pot fillers are heavy and experience significant leverage. We install solid wood bracing behind the wall for a rock-solid mount.",
  },
  {
    icon: Clock,
    title: "Height Precision",
    description: "We work with you to determine the perfect height based on your tallest stockpot and the clearance of your range hood.",
  },
];

const benefitsData = [
  "Drastically reduces physical strain while cooking",
  "Professional-grade kitchen functionality",
  "Sleek, modern aesthetic for luxury homes",
  "High-flow rate for rapid pot filling",
  "Dual-jointed arms for maximum reach",
  "Certified leak-proof water line extension",
];

const PotFillerInfo = () => {
  return (
    <section id="potfiller-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Culinary Convenience
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Professional Pot Filler Installation in Round Rock
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Thinking about adding a pot filler to your kitchen renovation? It's one of the
            most sought-after luxury upgrades for serious home cooks in Central Texas.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {warningSignsData.map((sign, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-copper/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <sign.icon className="w-7 h-7 text-copper" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {sign.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {sign.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Seamless Integration
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Installing a pot filler on an existing wall requires surgical precision. Our
              Round Rock plumbers specialize in running new water lines with minimal
              impact on your backsplash and cabinetry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're in Brushy Creek, Teravista, or Forest Creek, we bring
              top-tier plumbing expertise to help you build the gourmet kitchen of your dreams.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              Why Install a Pot Filler?
            </h3>
            <ul className="space-y-4">
              {benefitsData.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90 text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-8 py-4">
            <Wrench className="w-6 h-6 text-copper" />
            <span className="text-primary-foreground font-medium text-lg">
              Ready to upgrade your kitchen? Call us at +18777921410 for a custom installation quote.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotFillerInfo;
