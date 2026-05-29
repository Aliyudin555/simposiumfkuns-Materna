import Image from "next/image";
import PearlsLogo from "@/public/logo/pearls/about_us.png";

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      <div className="py-8 flex justify-center items-center theme-gradient-v3">
        <div className="text-white font-bold lg:text-3xl text-2xl">ABOUT PEARLS</div>
        <Image 
          className="lg:max-w-24 max-w-12 lg:mx-8 mx-4"
          src={ PearlsLogo } 
          alt="Pearls Logo" />
      </div>
      <div className="flex flex-col gap-2 min-h-screen bg-white lg:px-18 lg:py-8 md:p-8 p-4 text-[#134D80] text-justify text-base/8">
        <div className="indent-12">
          Pediatric Emergency Response and Life-Saving Strategies (PEARLS)
          appears at the 219<sup>th</sup> Hippocratic Oath Symposium from the 
          Faculty of Medicine of Sebelas Maret University. PEARLS provides the 
          opportunity to dynamically discuss the latest advancements in 
          addressing pediatric emergencies. Through engaging discussions and 
          interactive workshops with experts in the field, PEARLS aim to promote 
          the vital environment of collaboration for improved patient care and outcome.
        </div>
        <div className="indent-12">
          PEARLS 219<sup>th</sup> Hippocratic Oath Symposium features a one-day symposium with 
          expert speakers, hands-on workshops in regards to critical care and a scientific 
          poster competition of selected abstracts to present the latest innovation and 
          research in the field of pediatric emergency.
        </div>
      </div>
    </div>
  );
}
