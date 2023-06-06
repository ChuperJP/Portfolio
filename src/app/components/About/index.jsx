import React from "react";

export default function About() {
  return (
    <section
      id="a propos"
      className="flex flex-col items-center justify-center bg-first-color"
    >
      <div className=" flex flex-col items-center mx-[10%] pt-[70px] pb-[100px] laptop:items-start">
        <h2 className="font-montserrat text-titleS text-white mb-[80px] laptop:text-title">
          A propos
        </h2>
        <div className="font-mulish text-center text-textM text-white w-full tablet:text-textL laptop:w-2/3 laptop:text-start">
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
        </div>
      </div>
    </section>
  );
}
