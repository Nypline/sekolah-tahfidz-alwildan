import { Ubuntu } from "next/font/google";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const styles = {
  heroHeadText: `text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text leading-tight pb-8 ${ubuntu.className}`,
  heroSubText1:
    "font-medium text-white lg:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] lg:leading-[60px]",
  heroSubText2:
    "font-medium lg:text-[30px] sm:text-[25px] xs:text-[20px] text-[14px] lg:leading-[32px]",
  paragrafText: `text-sm md:text-base lg:text-lg max-w-full md:max-w-[80%] lg:max-w-[90%] mx-auto lg:mx-0 leading-relaxed lg:leading-9 ${openSans.className}`,
};
