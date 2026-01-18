import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a freeze-proof faucet (frost-free sillcock)?",
    answer: "A freeze-proof faucet is a specially designed hydrant where the valve seat is located deep inside the warm interior of your house, rather than at the exterior wall. This ensures no water remains in the part of the pipe exposed to freezing temperatures, preventing bursts."
  },
  {
    question: "How much does outdoor faucet replacement cost in Columbus?",
    answer: "A standard frost-free faucet replacement typically ranges from $250 to $650 per unit, including parts and labor. Costs can vary based on accessibility (e.g., through a finished basement ceiling) and whether the existing piping needs modification. We provide upfront, transparent pricing."
  },
  {
    question: "Do I still need to detach my hose in the winter?",
    answer: "YES! This is the most important rule. Even a frost-free faucet will burst if a hose is left attached. The hose prevents the water from draining out of the faucet stem, leaving it trapped in the freeze zone where it can expand and break the pipe."
  },
  {
    question: "How long does the installation take?",
    answer: "Most faucet replacements take between 1 and 3 hours. Our plumbers carry a full stock of common sizes and lengths, so we can usually complete the job in a single visit to your Columbus home."
  },
  {
    question: "Is there a warranty on your faucet installations?",
    answer: "Absolutely. We stand by our work and the high-quality brass sillcocks we install. We typically offer a 1-year labor warranty along with the manufacturer's product warranty, giving you peace of mind throughout the Ohio winter."
  },
  {
    question: "Can I replace my own outdoor faucet?",
    answer: "While possible for a handy homeowner, outdoor faucet replacement often involves soldering copper pipes or working with PEX in tight spaces. Improper installation can lead to slow leaks inside your walls or a faucet that isn't properly pitched to drain, defeating the freeze-proof design."
  },
  {
    question: "What areas of Columbus do you serve?",
    answer: "We serve the entire Columbus metropolitan area and surrounding suburbs, including Franklin County, Delaware County, and parts of Fairfield and Licking counties."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Outdoor Faucet FAQ – Columbus, OH
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Get answers to common questions about freeze-proof faucet technology, installation costs, and winter plumbing maintenance in Columbus.
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
