"use client";

import {
  CaretLeft,
  CaretRight,
  Scissors,
  Taxi,
  Syringe,
  House,
  Timer,
  ChatCircleDots,
} from "@phosphor-icons/react/dist/ssr";
import useEmblaCarousel from "embla-carousel-react";

const services = [
  {
    title: "Veterinary Care",
    description:
      "Routine check-ups, vaccinations, and treatments with professional vets.",
    duration: "From 1h",
    price: "From $80",
    icon: <Syringe size={24} className="text-[#F5D547]" weight="bold" />,
    linkText:
      "Hi Sniff and Wag team, I'd like to book a vet appointment for my pet. Could you please provide availability and pricing? Thanks!",
  },
  {
    title: "Grooming & Wash",
    description:
      "A full wash, trim, and nail care to keep your pet looking and feeling great.",
    duration: "From 1h",
    price: "From $50",
    icon: <Scissors size={24} className="text-[#F5D547]" weight="bold" />,
    linkText:
      "Hi Sniff and Wag team, I'd love to book a grooming session for my pet. Can you let me know the available slots and pricing? Thanks!",
  },
  {
    title: "Pet Accommodation",
    description:
      "A safe, comfortable place for your pet while you're away, with care and supervision.",
    duration: "Daycare or overnight",
    price: "From $75/night",
    icon: <House size={24} className="text-[#F5D547]" weight="bold" />,
    linkText:
      "Hi Sniff and Wag team, I'm looking for pet accommodation for my furry mate from [Start Date] to [End Date]. Can you share availability and rates? Thanks!",
  },
  {
    title: "Pet Taxi",
    description:
      "Reliable pet transport service – perfect for vet visits, grooming, or daycare drop-offs.",
    duration: "Varies based on distance",
    price: "From $20 per trip",
    icon: <Taxi size={24} className="text-[#F5D547]" weight="bold" />,
    linkText:
      "Hi Sniff and Wag team, I need a dog taxi service for my pet from [Pickup Location] to [Destination] on [Date]. Could you confirm availability and cost? Thanks!",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section id="services" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#3C3C3B] mb-12 text-center">
          Caring for Your Pet, Every Step of the Way
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 lg:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1446A0] text-[#EBEBD3] rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-1 items-start justify-between">
                      <div className="flex gap-3">
                        <span className="mt-1">{item.icon}</span>

                        <div className="items-start">
                          <h3 className="text-white text-xl font-bold select-none">
                            {item.title}
                          </h3>
                          <p className="select-none">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-[#ffffff7c] pt-4 flex items-center justify-between">
                      <div className="flex gap-1 items-center text-sm">
                        <Timer
                          size={20}
                          className="text-[#F5D547]"
                          weight="bold"
                        />
                        <span>{item.duration}</span>
                      </div>
                      <a
                        href={`mailto:hello@sniffandwag.com.au?subject=${item.title} Inquiry&body=${item.linkText}`}
                        target="_blank"
                        className="bg-[#F5D547] border-2 border-[#F5D547] text-[#1446A0] px-4 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:scale-105 text-sm"
                      >
                        <ChatCircleDots
                          size={20}
                          className="text-[#1446A0]"
                          weight="bold"
                        />
                        Message Us
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="flex w-10 h-10 bg-[#EBEBD3] rounded-full items-center justify-center shadow-xl absolute -left-2 -translate-y-1/2 -translate-y-1/2 top-1/2 hover:scale-105"
          >
            <CaretLeft size={20} className="text-[#DB3069]" weight="bold" />
          </button>
          <button
            onClick={scrollNext}
            className="flex w-10 h-10 bg-[#EBEBD3] rounded-full items-center justify-center shadow-xl absolute -right-2 -translate-y-1/2 -translate-y-1/2 top-1/2 hover:scale-105"
          >
            <CaretRight size={20} className="text-[#DB3069]" weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}
