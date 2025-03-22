import Image from "next/image";
import { secondline, arrow, school } from "@/assets";
import { styles } from "./styles";

const About = () => {
  return (
    <div
      className="bg-red-50 flex items-center justify-center min-h-screen mt-10 py-20"
      id="about"
    >
      <div className="w-[90%] bg-[#287C74] rounded-3xl p-14 flex flex-col xl:flex-row justify-between items-center gap-10 xl:gap-10 lg:gap-5 sm:gap-5">
        <div className="text-center lg:text-left max-w-lg">
          <h2 className={`${styles.heroHeadText} text-white`}>
            Mengapa kami hadir?
          </h2>
          <Image src={secondline} alt="Garis dekoratif" className="mt-4" />
          <p className={`${styles.paragrafText} mt-5 text-white`}>
            Kami adalah TK (Taman Kanak-kanak) inklusi terpadu AL Wildan yang
            dikhususkan untuk anak-anak normal dan beberapa ABK yang dibimbing
            khusus dalam proses pembelajaran.
          </p>
        </div>

        {/* Panah */}
        <div className="flex justify-center">
          <Image
            src={arrow}
            alt="Panah dekoratif"
            className="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]"
          />
        </div>

        {/* Gambar Sekolah */}
        <div className="flex justify-center">
          <Image
            src={school}
            alt="Ilustrasi Sekolah"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] xl:w-[900px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
