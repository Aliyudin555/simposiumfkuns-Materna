import Image from "next/image";
import MATERNALogo from "@/public/banner/banner_logo.png";

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      {/* Bagian Header Tetap Putih (seperti request sebelumnya) */}
      <div className="py-8 flex justify-center items-center bg-white">
        <div className="text-[#801313] font-bold lg:text-3xl text-2xl">ABOUT MATERNA</div>
        <Image 
          className="lg:max-w-44 max-w-32 lg:mx-8 mx-4"
          src={ MATERNALogo } 
          alt="MATERNA Logo" 
        />
      </div>
      
      {/* Bagian Paragraf dengan Background Gradien Merah dan Teks Putih */}
      <div className="flex flex-col gap-6 min-h-screen bg-gradient-to-br from-[#801313] via-[#9a1c1c] to-[#5a0d0d] lg:px-24 lg:py-16 md:p-12 p-6 text-white text-justify text-base/8 shadow-inner">
        <div className="indent-12 drop-shadow-sm">
          Mastering Approaches to Treating Emergencies & Reproductive New Advances (MATERNA) appears at the 221st Hippocratic Oath Symposium from the Faculty of Medicine of Sebelas Maret University. MATERNA provides the opportunity to dynamically discuss the latest advancements in addressing obstetric and gynecologic emergencies. Through engaging discussions and interactive workshops with experts in the field, MATERNA aims to promote the vital environment of collaboration for improved patient care and outcome.
        </div>
        <div className="indent-12 drop-shadow-sm">
          MATERNA 221<sup>th</sup> Hippocratic Oath Symposium features a one-day symposium with expert speakers, hands-on workshops in regards to maternal critical care, and a scientific poster competition of selected abstracts to present the latest innovation and research in the field of obstetrics and gynecology.
        </div>
      </div>
    </div>
  );
}