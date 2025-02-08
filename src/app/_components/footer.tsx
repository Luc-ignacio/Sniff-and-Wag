import {
  FacebookLogo,
  Phone,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const brands = [
  {
    name: "Black Hawk",
    logo: "/black-hawk.webp",
  },
  {
    name: "Hills Science Diet",
    logo: "/hills-science-diet.webp",
  },
  {
    name: "Advance Pet Nutrition",
    logo: "/advance-pet-nutrition.webp",
  },
  {
    name: "Royal Canin",
    logo: "/royal-canin.webp",
  },

  {
    name: "KONG",
    logo: "/kong.webp",
  },
  {
    name: "Petstock",
    logo: "/petstock.webp",
  },
];

export function Footer() {
  return (
    <section className="bg-[#1446A0] text-[#EBEBD3] py-16">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Our Featured Brands
          </h4>

          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-linear"
            className="grid grid-cols-2 lg:grid-cols-6 items-center gap-8 justify-items-center"
          >
            {brands.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={130}
                  height={100}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Sniff & Wag</h3>
            <p className="mb-4">Premium Pet Care for Your Furry Best Mate</p>
            <a
              href="tel:+61416000000"
              className="bg-[#DB3069] border-2 border-[#DB3069] text-[#EBEBD3] px-4 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:scale-105"
            >
              <Phone size={24} />
              Call us now
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
            <p>
              <b>Email:</b> hello@sniffandwag.com.au
            </p>
            <p>
              <b>Phone:</b> +61 416 000 000
            </p>
            <p>
              <b>Address:</b> 321 Paw Street, Surfers Paradise – QLD 4217
              Australia
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Developed by Lucas Ignacio
            </h3>
            <p className="mb-2">Stay connected</p>
            <div className="flex gap-4 text-[#F5D547]">
              <a href="https://github.com/Luc-ignacio" target="_blank">
                <GithubLogo size={32} className="hover:scale-110" />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-ignacio/"
                target="_blank"
              >
                <LinkedinLogo size={32} className="hover:scale-110" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
