import React from "react";

import Image from "next/image";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <div className={" flex flex-col gap-16"}>
      <div
        className={"lg:flex lg:justify-between  mx-5 md:mx-[20vw] mt-[17vh]"}
      >
        <div
          className={
            "grid grid-cols-2 gap-4  md:flex md:flex-col items-center justify-center mb-10"
          }
        >
          <p
            className={
              "text-xl font-light hover:text-lime-600/60 hover:cursor-pointer duration-300 tracking-wide "
            }
          >
            Sub Page
          </p>{" "}
          <p
            className={
              "text-xl font-light hover:text-lime-600/60 hover:cursor-pointer duration-300 tracking-wide "
            }
          >
            Sub Page
          </p>{" "}
          <p
            className={
              "text-xl font-light hover:text-lime-600/60 hover:cursor-pointer duration-300 tracking-wide "
            }
          >
            Sub Page
          </p>{" "}
          <p
            className={
              "text-xl font-light hover:text-lime-600/60 hover:cursor-pointer duration-300 tracking-wide"
            }
          >
            Sub Page
          </p>{" "}
          <p
            className={
              "text-xl font-light hover:text-lime-600/60 hover:cursor-pointer duration-300 tracking-wide"
            }
          >
            Sub Page
          </p>{" "}
          <p
            className={
              "text-xl font-light hover:text-lime-600/60 hover:cursor-pointer duration-300 tracking-wide"
            }
          >
            Sub Page
          </p>
          <p
            className={
              "text-xl font-light hover:text-lime-600/60 hover:cursor-pointer duration-300 tracking-wide"
            }
          >
            Sub Page
          </p>
        </div>
        <div className="flex flex-col items-start ">
          <Image
            src="/images/kobu-agency-7okkFhxr.png"
            alt="Image"
            width={350}
            height={350}
          />
          <div className="flex flex-col mt-2 ">
            <p className="text-sm font-medium">Header Here</p>
            <p className="text-xs font-extralight text-gray-400">
              With a subline here
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
