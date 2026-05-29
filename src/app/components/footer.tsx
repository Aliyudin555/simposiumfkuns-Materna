"use client"

import { Facebook, Globe, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <div>
            {/* Pembatas atas menggunakan warna tema baru */}
            <div className="h-[2px] bg-[oklch(0.52_0.16_14.92)] opacity-20"></div>
            
            <div className="bottom-0 py-8 px-4 flex gap-4 md:flex-row flex-col items-center justify-between text-[oklch(0.52_0.16_14.92)]">
                
                <div className="text-center md:text-left">
                    <div className="font-extrabold text-2xl uppercase tracking-wider">MATERNA 2026</div>
                    <div className="font-semibold text-sm">221<sup>th</sup> Hippocratic Oath Symposium</div>
                    <div className="text-xs opacity-80">Faculty of Medicine, Sebelas Maret University</div>
                </div>

                <div className="flex flex-col items-center md:items-end gap-3">
                    <div 
                        onClick={ () => window.open("https://www.instagram.com/simposiumfkuns", '_blank') }
                        className="cursor-pointer flex items-center gap-2 font-medium hover:font-bold transition-all">
                        <span className="text-sm">@simposiumfkuns</span>
                        <Instagram size={20} />
                    </div>
                    <div 
                        onClick={ () => window.open("https://simposiumfkuns.com", '_blank') }
                        className="cursor-pointer flex items-center gap-2 font-medium hover:font-bold transition-all">
                        <span className="text-sm">simposiumfkuns.com</span>
                        <Globe size={20} />
                    </div>
                    <div 
                        onClick={ () => window.open("https://www.facebook.com/simposium.fkuns", '_blank') }
                        className="cursor-pointer flex items-center gap-2 font-medium hover:font-bold transition-all">
                        <span className="text-sm text-right">Simposium Sumpah Dokter UNS</span>
                        <Facebook size={20} />
                    </div>
                </div>
            </div>
            
            {/* Copyright bar sederhana di bawah */}
            <div className="py-4 text-center text-[oklch(0.52_0.16_14.92)] opacity-50 text-[10px] border-t border-slate-100">
                © 2026 MATERNA - All Rights Reserved
            </div>
        </div>
    );
}