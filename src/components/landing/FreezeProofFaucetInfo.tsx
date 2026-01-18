import { AlertTriangle, Droplets, Clock, Shield, CheckCircle2 } from "lucide-react";

const warningSignsData = [
  {
    icon: Droplets,
    title: "Persistent Dripping",
    description: "A small drip can turn into a major ice problem or indicate an internal crack that could lead to basement flooding when the temperature drops.",
  },
  {
    icon: AlertTriangle,
    title: "Frozen Pipe History",
    description: "If your outdoor faucet has frozen or burst in the past, it's likely a standard bibb that needs an upgrade to a modern frost-free model.",
  },
  {
    icon: Clock,
    title: "Antique Faucets",
    description: "Older faucets often lack backflow preventers and freeze protection. If your Columbus home is over 25 years old, your outdoor taps likely need an upgrade.",
  },
];

const benefitsData = [
  "Prevents catastrophic winter pipe bursts",
  "Durable heavy-duty brass construction",
  "Eliminates the need for external styrofoam covers",
  "Includes integrated backflow prevention",
  "Ensures easy operation regardless of temperature",
  "Adds value and safety to your home plumbing",
];

const FreezeProofFaucetInfo = () => {
  return (
    <section id="faucet-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Winter-Proof Your Home
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Protect Your Columbus Home from Winter Water Damage
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Standard outdoor hose bibbs are the #1 cause of basement flooding during Ohio winters.
            Frost-free sillcocks use a long-stem design to keep the water valve inside your warm home.
          </p>
        </div>

        {/* Warning Signs */}
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
                Why Upgrade to Frost-Free?
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Standard faucets leave water exposed to freezing air right at the exterior wall.
              In Columbus, where temperatures often drop below zero, this water expands and
              bursts the internal piping, often going unnoticed until you turn it on in the spring.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In Franklin County, we serve all neighborhoods from Clintonville and Upper Arlington
              to Bexley and Westerville. Whether you have a historic brick home or a modern build,
              properly installed freeze-proof hydrants are essential for Ohio's brutal winters.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              Benefits of Modern Faucet Upgrades
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
            <AlertTriangle className="w-6 h-6 text-copper" />
            <span className="text-primary-foreground font-medium text-lg">
              Not sure if your faucets are winter-ready? We offer free inspections for Columbus residents.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreezeProofFaucetInfo;
