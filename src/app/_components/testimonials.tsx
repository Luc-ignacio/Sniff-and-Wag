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
import Image from "next/image";

const testimonials = [
  {
    content:
      "I needed a last-minute ride for my dog's vet appointment, and Sniff and Wag made it so easy! The driver was friendly, and my pup arrived safely. Such a great service!",
    author: "Fabian P.",
    role: "Milo's Tutor – Border Collie",
    image: "/avatar1.webp",
  },
  {
    content:
      "Sniff and Wag took amazing care of my pup while I was away. The accommodation was clean, safe, and my dog came back so happy! Highly recommend their services!",
    author: "Yasmin R.",
    role: "Buddy's Tutor – Golden Retriever",
    image: "/avatar2.webp",
  },
  {
    content:
      "My dog is usually nervous about grooming, but the team at Sniff and Wag made him feel so comfortable. He came back smelling amazing and looking adorable!",
    author: "Matt J.",
    role: "Luna's Tutor – Cavoodle",
    image: "/avatar3.webp",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#F5D547] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#3C3C3B] mb-12 text-center">
          Loved by Pets, Trusted by Owners
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-white text-[#3C3C3B] rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative w-24 h-24 ">
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes="96px"
                          className="object-cover rounded-full
                          "
                        />
                      </div>
                      <p className="text-[#3C3C3B]">{item.content}</p>
                      <div>
                        <p className="text-[#3C3C3B] font-bold">
                          {item.author}
                        </p>
                        <p className="text-[#3C3C3B] text-sm">{item.role}</p>
                      </div>
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
