import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQSection() {
  return (
    <section id="faq" className="p-section">
      <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Frequently asked questions
      </h2>
      <Accordion
        type="single"
        collapsible
        className="mx-auto mt-8 max-w-screen-sm"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What if people just pollute the water again?
          </AccordionTrigger>
          <AccordionContent>
            We are working local authorities to enforce stricter regulations to
            prevent future pollution. We also believe that our efforts will
            raise awareness and inspire people to become responsible citizens.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            What happens to the trash collected?
          </AccordionTrigger>
          <AccordionContent>
            Collected waste is sorted, with recyclables sent to recycling
            facilities and non-recyclables disposed of responsibly.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Does my donation go to volunteers?
          </AccordionTrigger>
          <AccordionContent>
            No, volunteer campaigns are funded by our sponsors. Your donation
            goes to our partners (environmental organizations) who will carry
            out large-scale cleanups.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            Does my donation remove the exact amount of trash promised?
          </AccordionTrigger>
          <AccordionContent>
            The environmental organizations we partner with guarantee that at
            least the amount of trash promised will be removed (they can collect
            more, but not less).
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            What are the small gifts for volunteers?
          </AccordionTrigger>
          <AccordionContent>
            They are items our sponsors have kindly provided, including pens,
            notebooks, gift cards, and more.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default FAQSection;
