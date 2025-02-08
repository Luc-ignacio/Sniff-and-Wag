import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#1446A0] text-[#EBEBD3] relative overflow-hidden">
      <div>
        <Image
          src={"/hero-dog.png"}
          alt={"Dog"}
          className="object-contain opacity-50 lg:hidden"
          fill
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-[#3C3C3B] opacity-40 lg:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-8 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 ">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl leading-10 font-bold"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Sniff & Wag – Premium Pet Care for Your Furry Best Mate
            </h1>

            <p className="lg:text-lg">
              From wholesome treats to cosy beds and fun toys, we've got
              everything to keep your pet happy and healthy. Shop trusted pet
              care products made for Aussie pets and their humans.
            </p>

            <a
              href="#services"
              className="bg-[#DB3069] border-2 border-[#DB3069] text-[#EBEBD3] px-4 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:scale-105"
            >
              <ShoppingCart size={24} />
              Shop Now
            </a>

            <div className="mt-8">
              <p className="text-sm mb-0 lg:mb-8">
                <b>Get 5% Off Your First Order!</b> Use code{" "}
                <b className="bg-[#F5D547] text-[#3C3C3B] px-2 py-1 rounded-md">
                  WAG5
                </b>{" "}
                at checkout.
              </p>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={"/hero-dog.png"}
              alt={"Dog"}
              className="object-contain drop-shadow-2xl"
              fill
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
