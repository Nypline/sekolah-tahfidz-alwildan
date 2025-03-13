import Image from "next/image";
import { styles } from "./styles";
import { rightHeroImage } from "@/assets";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ExploreButton from "@/components/ui/ExploreButton";

const Hero = () => {
  return (
    <div
      className="bg-white flex justify-center items-center pt-20 md:pt-24 lg:pt-14 h-screen"
      id="hero"
    >
      <div className="px-16 py-10 xl:px-16 xl:py-10 lg:px-10 lg:py-7 md:px-6 md:py-5 sm:px-2 sm:py-1.5 mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-2 sm:gap-20 ">
        {/* Left Section */}
        <div className="text-center lg:text-left text-white">
          <h1 className={`${styles.heroHeadText} text-black`}>
            Sekolah Inklusi Tahfizd AL-Wildan
          </h1>

          <p className={`${styles.paragrafText} pb-8 sm:pb-16 text-black`}>
            kami adalah TK(Taman Kanak-knak) inklusi terpadu AL Wildan yang
            dikhusus kan untukanak-anak Normal dan beberapa ABK yang di bimbing
            khusus dalam proses pembelajaran
          </p>
          <div>
            <Link href="#contact" passHref>
              {/* <Button
                variant="mainbutton"
                className="px-6 py-2  bg-[#287C74] text-white font-semibold shadow-md hover:bg-[#68b2ab] transition duration-500 text-sm md:text-base lg:text-lg hover:border-transparent rounded-lg h-14 hover:cursor-pointer"
              >
                Yuk gabung dengan kami
              </Button> */}
              <ExploreButton />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-[1080px] aspect-square relative">
            <Image
              src={rightHeroImage}
              alt="Gambar visual kreatif untuk Digital Agency"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
