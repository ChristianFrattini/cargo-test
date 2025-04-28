"use client";
import React from "react";

import { ArrowRight } from "lucide-react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";

const data = [
  {
    subtitle: "This is our",
    title: "Main Header",
    text: "Whereas disregard and contempt for human rights have resulted. Whereas disregard and contempt for human rights have resulted Whereas disregard and contempt for human rights have resulted.Whereas disregard and contempt for human rights have resulted",
    image: "/images/christina-wocintechc.png",
  },
  {
    subtitle: "And this is a",
    title: "Second Header",
    text: "Whereas disregard and contempt for human rights have resulted. Whereas disregard and contempt for human rights have resulted Whereas disregard and contempt for human rights have resulted.Whereas disregard and contempt for human rights have resulted",
    image: "/images/brooke-cagle-NoRsyXm.png",
  },
];

export default function Carousel({ isHidden }: { isHidden?: boolean }) {
  return (
    <div className="relative md:h-[110vh] h-[100vh] w-full">
      {/* slider images */}

      <ImagesSlider slides={data} isHidden={isHidden}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="absolute top-0 right-5 lg:left-0 w-full h-full z-50 flex items-start justify-start mt-[70vh] lg:mt-[75vh] flex-col pl-6 md:pl-32 gap-2"
        >
          <button
            className={
              "text-lg md:text-xl font-semibold flex text-white items-center p-4 md:p-5 hover:cursor-pointer group"
            }
          >
            <span
              className=""
              style={{
                borderBottom: "2px solid white",
                paddingBottom: "2px",
              }}
            >
              Find out more
            </span>
            <ArrowRight className="ml-7 p-2 h-10 w-10 bg-amber-300 text-black rounded-full group-hover:translate-x-1 duration-200" />{" "}
            {/* Arrow icon. children to prevent "refresh" effect*/}
          </button>
        </motion.div>
      </ImagesSlider>
      {/* <Image
        src={"/images/brooke-cagle-NoRsyXm.png"}
        fill
        alt="image"
        quality={100}
        className="object-cover z-0"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-cyan-950 to-transparent z-20" />

      <div className="absolute top-0 right-0 w-full h-full z-30 flex items-start justify-center flex-col pl-32 gap-2">
        <p className="text-3xl text-white font-semibold">And this is a</p>
        <p className="text-8xl text-white font-semibold">Second Header</p>
        <p className="text-lg font-light text-white max-w-[600px] ">
          Whereas disregard and contempt for human rights have resulted. Whereas
          disregard and contempt for human rights have resulted Whereas
          disregard and contempt for human rights have resulted.Whereas
          disregard and contempt for human rights have resulted
        </p>

        <button
          className={
            "text-xl font-semibold flex text-white items-center mt-10 p-5 hover:cursor-pointer group"
          }
        >
          <span
            className=""
            style={{
              borderBottom: "2px solid white",
              paddingBottom: "2px",
            }}
          >
            Find out more
          </span>
          <ArrowRight className="ml-7 p-2 h-10 w-10 bg-amber-300 text-black rounded-full group-hover:translate-x-1 duration-200" />
        </button>
      </div>*/}
    </div>
  );
}
