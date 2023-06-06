import React from "react";
import Image from "next/image";
import Bouton_CV from "../../components/Bouton_CV";
import ContactForm from "../ContactForm";
import github_icon from "../../assets/github-icon.png";
import enveloppe_icon from "../../assets/enveloppe-icon.png";

export default function Contact() {
  return (
    <section id="contact" className=" bg-third-color pt-[100px] pb-[80px] ">
      <div className="flex flex-col items-center ml-[10%] mr-[10%] laptop:flex-row laptop:justify-around">
        <div className="flex flex-col items-center w-2/3 laptop:w-1/3">
          <h2 className="font-montserrat font-semibold text-titleS laptop:text-title">
            Contact
          </h2>
          <p className="font-mulish font-medium text-textM text-center mt-[80px] tablet:text-textL">
            Si vous souhaitez avoir plus d’information vous pouvez me contacter
            par mail ou via le formulaire. N’hestiez pas à regarder mon Github !
          </p>
          <div className="flex flex-row items-center gap-[80px] pt-[50px] mb-[40px] tablet:[80px] ">
            <a href="mailto:chuper.dev@gmx.fr" className="hover:scale-110">
              <Image
                src={enveloppe_icon}
                alt="mail to"
                width={60}
                height={30}
              />
            </a>
            <a href="https://github.com/ChuperJP" className="hover:scale-110">
              <Image
                src={github_icon}
                alt="link to github"
                width={60}
                height={60}
              />
            </a>
          </div>
          <Bouton_CV />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
