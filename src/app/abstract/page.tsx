"use client"

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Abstract() {
  // Definisi warna agar konsisten
  const primaryNavy = "text-[oklch(0.52_0.16_14.92)]";
  const accentColor = "text-[oklch(0.75_0.13_12.75)]";
  const accentBg = "bg-[oklch(0.75_0.13_12.75)]";

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center gap-8 lg:px-48 md:px-16 px-4 py-12 
                    bg-[url('/background/bacgroundsolo.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      
      {/* Overlay halus agar card lebih menonjol */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] pointer-events-none"></div>

      <Card className="relative z-10 h-full w-full shadow-2xl border-none rounded-3xl overflow-hidden">
        <CardHeader className={`${primaryNavy} `}>
          <CardTitle className="font-black lg:text-4xl text-2xl tracking-tight">Call for Abstracts</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 justify-center p-8">
          <div className="text-center lg:text-left">
            <div className={`${primaryNavy} text-sm font-bold uppercase tracking-widest`}>Abstract Submission Topic</div>
            <h1 className={`${primaryNavy} font-black lg:text-3xl text-xl leading-tight`}>
              Unraveling Critical Management in Cases of Pediatric Emergency
            </h1>
          </div>

          {/* Box Deadline yang lebih menonjol */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200 ${primaryNavy}`}>
            <div className="flex flex-col items-center md:items-start">
              <span className="font-bold text-xs uppercase opacity-60">Deadline for Submission</span>
              <span className="text-lg font-extrabold tracking-tight">August 28<sup className="ml-0.5">th</sup>, 2026</span>
            </div>
            <div className="flex flex-col items-center md:items-start border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
              <span className="font-bold text-xs uppercase opacity-60">Notification of Acceptance</span>
              <span className="text-lg font-extrabold tracking-tight">August 22<sup className="ml-0.5">nd</sup>, 2026</span>
            </div>
          </div>

          <div className="text-center py-4">
            <div className={`${accentColor} text-xl font-black italic`}>Thank you for your abstract submissions!</div>
            <div className={`${primaryNavy} text-lg`}>Kindly check your registered emails for the <span className="font-bold underline decoration-2 underline-offset-4">official finalist announcements!</span></div>
          </div>

          <Button
            className={`${accentBg} hover:opacity-90 text-white font-bold lg:py-8 lg:px-12 p-6 lg:text-xl lg:rounded-2xl rounded-xl w-full md:w-fit mx-auto shadow-lg transition-transform hover:scale-105 active:scale-95`}
            onClick={ () => window.open("http://uns.id/PEALRSposters", '_blank') }>
              Poster Gallery
          </Button>
        </CardContent>
      </Card>

      <Card className="relative z-10 h-full w-full shadow-2xl border-none rounded-3xl overflow-hidden">
        <CardContent className="flex flex-col gap-8 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className={`${primaryNavy} font-bold flex items-center gap-2`}>
                <div className={`w-2 h-6 ${accentBg} rounded-full`}></div>
                File Poster Presentation Guideline
              </div>
              <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-inner">
                <iframe 
                  src="https://drive.google.com/file/d/1pVM53gRRPFqtCaDojf376Oru5JTf4O56/preview" 
                  className="w-full aspect-video"
                  allow="autoplay"></iframe>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className={`${primaryNavy} font-bold flex items-center gap-2`}>
                <div className={`w-2 h-6 ${accentBg} rounded-full`}></div>
                File Poster Display Guideline
              </div>
              <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-inner">
                <iframe 
                  src="https://drive.google.com/file/d/1_brPFT6NRIdzlilTxU6pzULYoqkly8s0/preview" 
                  className="w-full aspect-video"
                  allow="autoplay"></iframe>
              </div>
            </div>
          </div>

          <Accordion type="single" className={`w-full ${primaryNavy}`} collapsible>
            <AccordionItem value="item-1" className="border-slate-200">
              <AccordionTrigger className="font-bold text-xl hover:no-underline hover:text-[oklch(0.75_0.13_12.75)]">Subtopics</AccordionTrigger>
              <AccordionContent className="text-base text-slate-700 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>Current updates and trends on strategic management for pediatric cases and emergencies</li>
                  <li>Development of the latest science, biomolecules, genetics, and technology to detect or diagnose in pediatric cases and emergencies</li>
                  <li>Holistic and comprehensive management of cases regarding emergency, trauma, infection, neoplasm and congenital disorders in pediatrics</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-slate-200">
              <AccordionTrigger className="font-bold text-xl hover:no-underline hover:text-[oklch(0.75_0.13_12.75)]">General Guidelines</AccordionTrigger>
              <AccordionContent className="text-base text-slate-700">
                <ol className="list-decimal list-inside space-y-3">
                  <li>Download the full guideline, abstract template and other documents 
                    <Link 
                      className={`${accentColor} ml-1 font-bold hover:underline`}
                      href={ "https://uns.id/PEARLSdocuments" }
                      target="_blank">here</Link>
                  </li>
                  <li>The eligible types of abstracts for submission: research, systematic reviews, case reports, etc.</li>
                  <li>Abstracts must be written in both <span className="font-bold">English and Indonesian</span></li>
                  <li>Complete all required documents and make payment</li>
                  <li>Upload your abstract in PDF format 
                    <Link 
                      className={`${accentColor} ml-1 font-bold hover:underline`}
                      href={ "https://uns.id/PEARLSsubmission" }
                      target="_blank">here</Link>
                  </li>
                  <li>Confirm submission and payment to the committee</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-none">
              <AccordionTrigger className="font-bold text-xl hover:no-underline hover:text-[oklch(0.75_0.13_12.75)]">Eligible Participant</AccordionTrigger>
              <AccordionContent className="text-base text-slate-700">
                <div className="mb-2 font-medium">Individual or representative group allowed:</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Medical Student", "General Practitioner", "Resident", "Specialist", "Consultant"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 rounded-full text-sm font-semibold border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}