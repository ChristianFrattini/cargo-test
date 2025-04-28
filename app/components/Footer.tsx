import React from "react";
import Carousel from "./Carousel";

export default function Footer() {
  return (
    <div className="relative h-[50vh] overflow-hidden">
      <div className="absolute top-[-60vh] left-0 w-full h-[100vh]">
        <Carousel isHidden={true} />
      </div>
    </div>
  );
}
