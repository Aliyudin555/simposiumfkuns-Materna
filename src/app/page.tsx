"use client"

import Countdown from '@/components/countdown';
import Link from 'next/link';
import Image from 'next/image';
import BannerText from "@/public/banner/Logo.png";
import WorkshopImg_1 from "@/public/poster/workshop_1.png";
import WorkshopImg_2 from "@/public/poster/workshop_2.png";
import SymposiumImg from "@/public/poster/symposium.png";
import MedpartCimsa from "@/public/logo/medpart/medpart_cimsa.png";
import MedpartDocquity from "@/public/logo/medpart/medpart_docquity.png";
import MedpartHmpd from "@/public/logo/medpart/medpart_hmpd.png";
import MedpartIsmki from "@/public/logo/medpart/medpart_ismki.png";
import MedpartMediko from "@/public/logo/medpart/medpart_mediko.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Ikon sederhana (bisa diganti dengan library icon seperti lucide-react jika terinstal)
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[oklch(0.52_0.16_14.92)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[oklch(0.52_0.16_14.92)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* SECTION 1: HERO (THE FLOW) */}
      <div className="relative min-h-screen w-full flex flex-col justify-center items-center gap-10 px-6 py-20 
                    bg-[url('/background/bacgroundsolo.png')] bg-cover bg-center bg-no-repeat bg-fixed">
        
        {/* Layering cahaya untuk keterbacaan tanpa kotak */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

        {/* Branding Stack (Vertical) */}
        <div className="relative z-10 flex flex-col items-center gap-6 text-center mt-16 md:mt-24">
    
          <Image 
            src={ BannerText } 
            alt="MATERNA Logo Text"
            className="md:w-[820px] w-80 my-2 drop-shadow-lg" /* Diperbesar */
            priority />
          
          <div className="flex flex-col items-center gap-3 mt-2 text-[oklch(0.52_0.16_14.92)]">
            <div className="font-extrabold text-2xl md:text-3xl tracking-tight">221<sup>th</sup> Hippocratic Oath Symposium</div>
            
            {/* Modern Info Icons (Row) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-4 font-semibold text-lg p-4 bg-white/40 rounded-full backdrop-blur-sm border border-white/20 shadow-inner">
              <div className="flex items-center gap-2.5">
                <CalendarIcon />
                <span>9<sup>th</sup> - 10<sup>th</sup> August, 2026</span>
              </div>
              <div className="hidden sm:block text-[oklch(0.52_0.16_14.92)]/30">|</div>
              <div className="flex items-center gap-2.5">
                <MapPinIcon />
                <span>The Alana Hotel & Convention Center Solo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quote & CTA Group */}
        <div className="relative z-10 text-center flex flex-col items-center gap-12 mt-6">
          <div className="font-semibold text-xl md:text-2xl text-[oklch(0.52_0.16_14.92)] max-w-4xl leading-relaxed">
            “Unraveling Critical Management in Cases of Pediatric Emergency”
            <span className="block font-medium text-lg text-slate-800 mt-2">
              Symposium, Workshop, and Scientific Poster Competition
            </span>
          </div>

          <div className="flex md:flex-row flex-col justify-center items-center gap-6 md:gap-10 w-full max-w-3xl">
            <Link
              href="https://forms.gle/P2DjBVw2iugz7b6n6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto md:px-24 text-center py-4 px-10 text-base bg-theme-orange shadow-theme-orange/30 shadow-2xl hover:bg-theme-orange-dark rounded-full font-bold text-white transition-all transform hover:scale-105 hover:-translate-y-1"
            >
              Register Now
          </Link>
            <Link
              href={ "/abstract" }
              className="w-full md:w-auto md:px-12 text-center py-4 px-10 text-base bg-white border-2 border-theme-yellow shadow-lg hover:bg-theme-yellow rounded-full font-bold text-[oklch(0.52_0.16_14.92)] transition-all transform hover:scale-105">
                Submit an Abstract
            </Link>
          </div>
        </div>
      </div>

      {/* SECTION 2: COUNTDOWN & PROGRAMME (NAVY BORDER) */}
      <div className="bg-white py-20 border-t-8 border-[oklch(0.52_0.16_14.92)] shadow-inner">
        <div className="md:flex md:justify-around items-center px-6 lg:px-24">
          <div className="text-center md:text-left mb-12 md:mb-0 flex-1">
            <div className="text-[oklch(0.52_0.16_14.92)] text-3xl font-bold">Countdown to</div>
            <div className="text-[oklch(0.75_0.13_12.75)] text-6xl font-black tracking-tighter">MATERNA</div>
          </div>
            <div className="flex-1 flex justify-center md:justify-end text-[oklch(0.61_0.16_12.29)]">
              <Countdown deadline={ "2026-08-09T00:00:00" } />
            </div>
        </div>
      </div>

      {/* SECTION 3: SCIENTIFIC PROGRAMME (CARDS) */}
      <div className="flex flex-col gap-6 justify-center items-center text-white bg-gradient-to-b from-[oklch(0.52_0.16_14.92)] to-[#3c4a7b] py-20 px-4">
        <div className="font-bold text-3xl mb-10 tracking-tight">SCIENTIFIC PROGRAMME</div>
        <div className="lg:flex justify-center gap-10 lg:mx-12 w-full max-w-7xl">
          {/* Workshop Card */}
          <div className="glassmorphism-dark flex-col gap-5 rounded-3xl p-6 m-4 lg:w-1/2 hover:border-theme-yellow/50 transition-colors shadow-2xl">
            <Carousel >
              <CarouselContent>
                <CarouselItem>
                  <Image src={ WorkshopImg_1 } alt="Workshop Neonatal" className="rounded-2xl" />
                </CarouselItem>
                <CarouselItem>
                  <Image src={ WorkshopImg_2 } alt="Workshop Pediatric" className="rounded-2xl" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="text-[oklch(0.52_0.16_14.92)]" />
              <CarouselNext className="text-[oklch(0.52_0.16_14.92)]" />
            </Carousel>
            <div className="font-extrabold text-center mt-6 text-2xl text-theme-yellow">Workshop</div>
            <div className="text-center text-slate-100 space-y-1 bg-white/5 p-4 rounded-xl mt-4">
              <div className=""><span className="font-bold text-white">Date:</span> 9<sup>th</sup> August 2026</div>
              <div className=""><span className="font-bold text-white">Place:</span> The Alana Hotel & Convention Center Solo</div>
            </div>
          </div>
          {/* Symposium Card */}
          <div className="glassmorphism-dark flex-col gap-5 rounded-3xl p-6 m-4 lg:w-1/2 hover:border-theme-cyan/50 transition-colors shadow-2xl">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Image src={ SymposiumImg } alt="Symposium" className="rounded-2xl" />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            <div className="font-extrabold text-center mt-6 text-2xl text-theme-cyan">Symposium</div>
            <div className="text-center text-slate-100 space-y-1 bg-white/5 p-4 rounded-xl mt-4">
              <div className=""><span className="font-bold text-white">Date:</span> 10<sup>th</sup> August 2026</div>
              <div className=""><span className="font-bold text-white">Place:</span> The Alana Hotel & Convention Center Solo</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: LOCATION (SPLIT LAYOUT) */}
      <div className="bg-slate-50 py-20 px-6 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
               <div className="p-3 bg-theme-yellow/10 rounded-full"><MapPinIcon /></div>
               <div className="text-[oklch(0.52_0.16_14.92)] font-bold text-4xl tracking-tight">The Venue</div>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed">
              MATERNA 2026 will be held at the prestigious <strong>The Alana Hotel & Convention Center Solo</strong>. A premier venue combining modern luxury with traditional Javanese hospitality, perfect for inspiring medical discourse.
            </p>
            <button 
              onClick={() => window.open("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.2130709983267!2d110.77203227411651!3d-7.544898074483407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1468d4535f6b%3A0x5d96e2a389ec9cf8!2sThe%20Alana%20Solo!5e1!3m2!1sid!2sid!4v1780057586374!5m2!1sid!2sid", '_blank')}
              className="bg-white border-2 border-[oklch(0.52_0.16_14.92)] text-[oklch(0.52_0.16_14.92)] px-6 py-3 rounded-full font-bold hover:bg-[oklch(0.52_0.16_14.92)] hover:text-white transition-colors shadow"
            >
              Open in Google Maps
            </button>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-[oklch(0.52_0.16_14.92)]/5 rounded-3xl group-hover:scale-105 transition-transform"></div>
            <iframe 
              className="relative z-10 rounded-3xl shadow-2xl w-full h-[450px] border-4 border-white group-hover:scale-105 transition-transform"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.2130709983267!2d110.77203227411651!3d-7.544898074483407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1468d4535f6b%3A0x5d96e2a389ec9cf8!2sThe%20Alana%20Solo!5e1!3m2!1sid!2sid!4v1780057586374!5m2!1sid!2sid">
            </iframe>
          </div>
        </div>
      </div>

      {/* SECTION 5: PARTNERS (PREMIUM GRID) */}
      <div className="bg-white py-20 flex flex-col justify-center items-center gap-16 px-6">
        <div className="flex flex-col gap-4 text-center">
          <div className="text-slate-500 font-medium tracking-widest text-sm">OUR SUPPORTERS</div>
          <div className="font-extrabold text-[oklch(0.52_0.16_14.92)] text-4xl">Sponsored by</div>
          <div className="font-medium italic text-slate-600 text-xl mt-2 bg-slate-100 px-6 py-3 rounded-full shadow-inner">To be announced</div>
        </div>
        
        <div className="flex flex-col gap-8 w-full max-w-7xl">
    <div className="font-bold text-center text-[oklch(0.52_0.16_14.92)] text-2xl tracking-tight">Official Media Partners</div>
    
    {/* Container luar tetap dipertahankan terang */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-center bg-slate-50 border p-8 lg:p-12 rounded-3xl shadow-lg">
    {[
        { src: MedpartCimsa, alt: "Cimsa Logo" },
        { src: MedpartHmpd, alt: "HMPD Logo" },
        { src: MedpartDocquity, alt: "Docquity Logo" },
        { src: MedpartIsmki, alt: "ISMKI Logo" },
        { src: MedpartMediko, alt: "Mediko Logo" }
    ].map((partner, index) => (
        <div key={index} className="flex justify-center items-center p-6 bg-rose-950 rounded-xl shadow hover:shadow-xl hover:bg-rose-900 transition-all duration-300 border border-rose-900 group h-32 w-full">
        <Image 
            className="rounded-lg max-h-full w-auto opacity-75 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" 
            src={partner.src} 
            alt={partner.alt} 
        />
        </div>
    ))}
    </div>
</div>
      </div>

    </div>
  );
}