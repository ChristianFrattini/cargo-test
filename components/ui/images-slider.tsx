"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion"; // Make sure to use framer-motion
import React, { useEffect, useState } from "react";

interface SlideItem {
  image: string;
  text?: string;
  title?: string;
  subtitle?: string;
}

export const ImagesSlider = ({
  slides,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "right", // Default to right-to-left
  isHidden = false,
}: {
  slides: SlideItem[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down" | "left" | "right";
  isHidden?: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState<SlideItem[]>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === slides.length ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const loadImages = () => {
      const loadPromises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = () => resolve(slide);
          img.onerror = reject;
        });
      });

      Promise.all(loadPromises)
        .then((loadedSlides) => {
          setLoadedSlides(loadedSlides as SlideItem[]);
        })
        .catch((error) => console.error("Failed to load images", error));
    };

    loadImages();
  }, [slides]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      else if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 8000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay]);

  const slideVariants = {
    enter: (direction: string) => {
      return {
        x: direction === "right" ? "100%" : direction === "left" ? "-100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: (direction: string) => {
      return {
        x: direction === "right" ? "-100%" : direction === "left" ? "100%" : 0,
        y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      };
    },
  };

  const areSlidesLoaded = loadedSlides.length > 0;
  const currentSlide = loadedSlides[currentIndex];

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className,
      )}
    >
      {areSlidesLoaded && children}
      {areSlidesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/45 z-40", overlayClassName)}
        />
      )}

      <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-blue-900 to-transparent z-20" />

      {areSlidesLoaded && (
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentSlide.image}
              className="h-full w-full object-cover object-center"
              alt="Slider image"
            />

            <div className="absolute top-0 right-0 w-full h-full z-40 flex items-start justify-center flex-col pl-6 md:pl-[10vw] gap-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-3xl text-white font-semibold"
              >
                {currentSlide.subtitle}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`${
                  isHidden
                    ? "hidden"
                    : "text-5xl md:text-8xl text-white font-semibold"
                }`}
              >
                {currentSlide.title}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`${
                  isHidden
                    ? "hidden"
                    : "text-sm md:text-lg font-light text-white max-w-[90%] md:max-w-[600px]"
                }`}
              >
                {currentSlide.text}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      <AnimatePresence>
        <div className="absolute bottom-4 lg:bottom-[18vh] left-1/2 lg:left-5 transform -translate-x-1/2 lg:translate-x-0 z-40 flex items-center gap-2 pl-0 lg:pl-32">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`block h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};
