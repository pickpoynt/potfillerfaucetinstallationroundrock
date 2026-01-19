import { Shield, Droplets, DollarSign, Clock, ThumbsUp, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Leak-Free Guarantee",
    description: "Our precision installation and premium materials ensure your new pot filler remains leak-free for years to come.",
  },
  {
    icon: Droplets,
    title: "Convenient Luxury",
    description: "Eliminate the strain of carrying heavy, water-filled pots. Enjoy a more ergonomic and efficient cooking experience.",
  },
  {
    icon: DollarSign,
    title: "Home Value Enhancement",
    description: "Modern kitchen upgrades like pot fillers are highly attractive to buyers and significantly boost your home's appeal.",
  },
  {
    icon: Clock,
    title: "Rapid Installation",
    description: "Most pot filler installations, including water line extensions, are completed in just a few hours with minimal disruption.",
  },
  {
    icon: ThumbsUp,
    title: "Expert Local Plumbers",
    description: "Our licensed Round Rock plumbers have extensive experience installing high-end kitchen fixtures with precision.",
  },
  {
    icon: Wrench,
    title: "All Brands Serviced",
    description: "From Delta and Moen to luxury designer brands, we handle the installation and mounting of all pot filler models.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Modern Kitchens
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Round Rock's Choice for
              <span className="text-gradient-copper block">Kitchen Plumbing Luxury</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A pot filler is more than just a faucet; it's a statement of convenience and
              style. We bring technical expertise and aesthetic precision to every
              installation in the Round Rock area.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">750+</span>
                <span className="text-sm text-muted-foreground">Kitchens Upgraded</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">10+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">5.0</span>
                <span className="text-sm text-muted-foreground">Google Rating</span>
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
