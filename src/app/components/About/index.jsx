"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  // once a true permet de faire l'animation qu'une seule fois, sans ca a chaque appartition sur l'écran l'animation se lance
  const isInView = useInView(ref);
  const displayAbout = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center bg-first-color"
    >
      <div
        ref={ref}
        className="flex flex-col items-center mx-[10%] pt-[70px] pb-[100px] laptop:items-start"
      >
        <motion.h2
          className="font-montserrat font-semibold text-titleS text-white mb-[80px] laptop:text-title"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={displayAbout}
        >
          A propos
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.6, duration: 0.7 }}
          variants={displayAbout}
          className="font-mulish text-center text-textM text-white w-full tablet:text-textL laptop:w-2/3 laptop:text-start"
        >
          <p>
            Salut ! je m'appelle Jean-Patrick, je m'interesse au domaine de
            l'informatique depuis mon adolescence, j'ai cependant choisis une
            autre voie pour entrer dans la vie professionnelle: les metiers de
            le sécurité.
          </p>
          <p>
            Après plusieurs années à exercer au sein d'une équipe d'intervention
            dans les transports en commun, j'entreprends une reconversion en
            tant que developpeur web Front End, grâce au cursus d'OpenClassrooms
            afin d'obtenir un diplôme de niveau V (RNCP36076).
          </p>
          <p>
            C'est tout particulièrement motivé que je souhaite me lancer dans
            cette aventure en réalisant vos site web.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
