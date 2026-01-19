import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a plumber to install a pot filler?",
    answer: "Yes. Pot fillers require running a primary cold water line through the wall. Improper installation can lead to hidden leaks behind your backsplash, causing major structural damage."
  },
  {
    question: "How high should a pot filler be mounted?",
    answer: "Typically, we mount pot fillers 12 to 14 inches above the cooktop surface, but we customize this based on your stockpot sizes and range hood clearance."
  },
  {
    question: "Can you install a pot filler on an existing wall?",
    answer: "Absolutely. Our Round Rock specialists use advanced techniques to route plumbing with minimal damage to your existing drywall or tile backsplash."
  },
  {
    question: "How long does the installation take?",
    answer: "A standard installation, including running the water line and mounting the fixture, typically takes 3 to 5 hours depending on your kitchen's layout."
  },
  {
    question: "What is the benefit of a dual-jointed pot filler?",
    answer: "Dual joints allow the faucet to fold completely flat against the wall when not in use and extend to reach every burner on your stove."
  },
  {
    question: "Do you provide the faucet or should I buy it?",
    answer: "We can do both! We can supply professional-grade fixtures or expertly install any high-end pot filler you have already purchased for your Round Rock home."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Pot Filler FAQ – Round Rock, TX
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Find answers to common questions about pot filler plumbing, installation height, and kitchen modernization in Central Texas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-steel/20 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-navy font-semibold hover:text-copper hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-steel leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-steel mb-4">Still have questions?</p>
          <a
            href="tel:+18777921410"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call us at (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
