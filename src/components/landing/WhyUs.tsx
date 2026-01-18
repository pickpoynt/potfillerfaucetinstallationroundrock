import { Shield, Users, ThumbsUp, Clock, DollarSign, Hammer } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Local Columbus Experts",
    description: "Serving the Franklin County community with specialized outdoor plumbing expertise.",
  },
  {
    icon: Shield,
    title: "Burst-Proof Guarantee",
    description: "Our frost-free installations are designed to withstand the coldest Ohio winters.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No hidden fees. You'll know the exact cost before we start any installation.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "We offer quick response times to ensure your home is protected before the next freeze.",
  },
  {
    icon: ThumbsUp,
    title: "Highly Rated",
    description: "The top-rated outdoor faucet specialists in the Columbus metropolitan area.",
  },
  {
    icon: Hammer,
    title: "Professional Grade",
    description: "We only use heavy-duty, commercial-grade brass sillcocks for maximum longevity.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Columbus, Ohio's Most Trusted
              <span className="text-gradient-copper block">Freeze-Proof Faucet Experts</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Since 1995, we've helped thousands of Columbus homeowners protect their properties
              from winter water damage. Faucets are all we do, and we do them better than
              anyone else in Central Ohio.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">3,000+</span>
                <span className="text-sm text-muted-foreground">Faucets Installed</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">25+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">A+</span>
                <span className="text-sm text-muted-foreground">BBB Rating</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-copper/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
