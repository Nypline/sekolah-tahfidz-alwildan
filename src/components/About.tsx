import Image from "next/image";
import { secondline } from "@/assets";
import { arrow } from "@/assets";
import { school } from "@/assets";
import { styles } from "./styles";

const About = () => {
  return (
    <div
      className="bg-red-50 flex items-center justify-center min-h-screen mt-10 py-20"
      id="about"
    >
      <div className="w-[90%] h-[600px] xl:h-[600px] lg:h-[1400px] md:h-[1200px] min-[320px]:h-[800px] bg-[#287C74] rounded-3xl p-14 flex flex-row justify-between items-center xl:flex-row min-[320px]:flex-col gap-10 xl:gap-10 lg:gap-5 min-[320px]:gap-5  ">
        <div className="text-center lg:text-left">
          <h2 className={`${styles.heroHeadText} text-white`}>
            Mengapa kami hadir?
          </h2>
          <Image src={secondline} alt="Line Image" className=""></Image>
          <p className={`${styles.paragrafText} mt-5 text-white`}>
            kami adalah TK(Taman Kanak-knak) inklusi terpadu AL Wildan yang
            dikhusus kan untukanak-anak Normal dan beberapa ABK yang di bimbing
            khLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an{" "}
          </p>
        </div>
        <div>
          <Image
            src={arrow}
            alt=""
            className="w-[800px] xl:w-[800px] lg:w-[400px] md:w-[200px] min-[320px]:w-[100px]"
          ></Image>
        </div>
        <div>
          <Image
            src={school}
            alt=""
            className=" w-[2000px] xl:w-[2000px] lg:w-[1000px] md:w-[500px] sm:w-[400px] min-[320px]:w-[300px]"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
