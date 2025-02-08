import {
  CheckCircle,
  CheckFat,
  MapPinArea,
  Phone,
  ShoppingCart,
  Truck,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export function About() {
  return (
    <section className="bg-[#EBEBD3] text-[#3C3C3B] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="500"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={"/about.webp"}
                alt={"Dobermann"}
                fill
                quality={100}
                priority
                className="object-cover hover:scale-105 duration-300"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="absolute w-40 h-40 right-3 -bottom-8 border-4 rounded-3xl overflow-hidden border-white"
            >
              <Image
                src={"/about-cat.webp"}
                alt={"Cat"}
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div
            className="space-y-6 mt-8"
            data-aos="fade-up-left"
            data-aos-delay="700"
          >
            <h2 className="text-4xl font-bold">About Us – Sniff and Wag</h2>
            <p>
              At Sniff and Wag, we're all about happy pets and wagging tails!
              Based on the sunny Gold Coast, Australia, we're a team of pet
              lovers dedicated to bringing you the best in pet care. From
              nutritious treats to cosy beds and fun toys, we carefully select
              quality products to keep your furry mate happy and healthy. We
              believe pets are family, and they deserve only the best! Whether
              you're spoiling your pup with new goodies or looking for everyday
              essentials, we've got you covered. Shop local, support Aussie
              pets, and let's make tails wag together!
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle
                  size={24}
                  className="text-[#DB3069]"
                  weight="bold"
                />
                Founded in 2024
              </li>
              <li className="flex items-center gap-2">
                <MapPinArea
                  size={24}
                  className="text-[#DB3069]"
                  weight="bold"
                />
                Aussie - Owned & Operated
              </li>
              <li className="flex items-center gap-2">
                <Truck size={24} className="text-[#DB3069]" weight="bold" />
                Fast & Reliable
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <a
                data-aos="fade-up"
                data-aos-delay="500"
                href="#services"
                className="bg-[#1446A0] border-2 border-[#1446A0] text-[#EBEBD3] px-4 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:scale-105"
              >
                <ShoppingCart size={24} />
                Browse Our Services
              </a>
              <a
                data-aos="fade-up"
                data-aos-delay="700"
                href="tel:+61416000000"
                className="bg-[#EBEBD3] border-2 border-[#1446A0] text-[#1446A0] px-4 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:scale-105"
              >
                <Phone size={24} />
                Call us now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
