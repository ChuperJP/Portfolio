import React from "react";
import Image from "next/image";
import download_icon from "../../assets/download-icon.png";

export default function Bouton_CV() {
  return (
    <a
      href="cv.pdf"
      target="_blank"
      className="flex flex-row items-center gap-[10px] rounded-[20px] py-[8px] px-[24px] bg-first-color font-montserrat text-24 font-semibold text-white hover:scale-110"
    >
      <Image src={download_icon} alt="download CV" width={24} height={24} />
      CV
    </a>
  );
}
