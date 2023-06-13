"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import html_icon from "../../assets/html5-icon.png";
import css_icon from "../../assets/css3-icon.png";
import js_icon from "../../assets/js-icon.png";
import react_icon from "../../assets/react-icon.png";
import nextjs_icon from "../../assets/nextjs-icon.png";
import sass_icon from "../../assets/sass-icon.png";
import tailwind_icon from "../../assets/tailwind-icon.png";

export default function Competences() {
  const ref = useRef(null);
  // once a true permet de faire l'animation qu'une seule fois, sans ca a chaque appartition sur l'écran l'animation se lance
  const isInView = useInView(ref, { once: true });
  const displayCompetences = {
    hidden: {
      opacity: 0,
    },
    visible: { opacity: 1 },
  };

  return (
    <section id="competences" className=" bg-third-color">
      <div className="flex flex-col items-center mx-[10%] pt-[70px] pb-[100px]">
        <h2 className="font-montserrat font-semibold text-titleS mb-[80px] tablet:text-title">
          Competences
        </h2>
        <div ref={ref} className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center w-full laptop:flex-row">
            <motion.div
              className="flex flex-row justify-around items-around w-full laptop:w-1/2"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={displayCompetences}
            >
              <Image src={html_icon} alt="html icon" width={70} height={100} />
              <Image src={css_icon} alt="css icon" width={70} height={100} />
              <Image src={js_icon} alt="js icon" width={70} height={100} />
            </motion.div>
            <motion.div
              className="flex flex-row justify-around mt-[80px] w-full laptop:mt-0 laptop:w-1/2"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={displayCompetences}
            >
              <Image
                className="h-[80px] w-[90px]"
                src={react_icon}
                alt="react icon"
                width={110}
                height={100}
              />
              <Image
                className="h-[80px] w-[145px]"
                src={nextjs_icon}
                alt="nextjs icon"
                width={165}
                height={100}
              />
            </motion.div>
          </div>
          <motion.div
            className="flex flex-row justify-around w-full mt-[80px] laptop:w-1/2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.9, duration: 0.5 }}
            variants={displayCompetences}
          >
            <Image
              className="h-[80px] w-[113px]"
              src={sass_icon}
              alt="sass icon"
              width={133}
              height={100}
            />
            <Image
              className="h-[80px] w-[146px]"
              src={tailwind_icon}
              alt="tailwind icon"
              width={166}
              height={100}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
