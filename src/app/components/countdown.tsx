"use client"

import { useState, useEffect } from "react";

const ClockItem = ({ clock, desc } : { clock: number, desc : string }) => {
    return (
        <div className="text-center text-[oklch(0.52_0.16_14.92)] md:p-4 p-2 md:rounded-xl rounded-lg border-2 border-[oklch(0.52_0.16_14.92)]/40 shadow-sm bg-white/50 backdrop-blur-sm">
            <div className="md:text-3xl font-bold">{ clock }</div>
            <div className="text-xs md:text-sm font-medium uppercase tracking-wider">{ desc }</div>
        </div>
    );
}

const Countdown = ({ deadline } : { deadline : string }) => {
    const [ days, setDays ] = useState<number>(0);
    const [ hours, setHours ] = useState<number>(0);
    const [ minutes, setMinutes ] = useState<number>(0);
    const [ seconds, setSeconds ] = useState<number>(0);

    const getTimeUntil = (deadline: string) => {
        const nowDate = Number(new Date());
        const time: number = Date.parse(deadline) - nowDate;
        if (time < 0) {
          setDays(0);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
        } else {
          setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
          setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
          setMinutes(Math.floor((time / 1000 / 60) % 60));
          setSeconds(Math.floor((time / 1000) % 60));
        }
    };

    // PERBAIKAN PENTING: Gunakan useEffect agar setInterval tidak membuat browser lag
    useEffect(() => {
        getTimeUntil(deadline); // Panggil sekali langsung agar tidak menunggu 1 detik pertama
        const intervalId = setInterval(() => getTimeUntil(deadline), 1000);
        
        // Membersihkan interval saat komponen ditutup/pindah halaman
        return () => clearInterval(intervalId);
    }, [deadline]);

    return (
        <div className="flex justify-center gap-2 md:gap-4">
            <ClockItem clock={ days } desc={ "days" } />
            <div className="text-[oklch(0.52_0.16_14.92)] font-bold text-2xl my-auto">:</div>
            <ClockItem clock={ hours } desc={ "hours" } />
            <div className="text-[oklch(0.52_0.16_14.92)] font-bold text-2xl my-auto">:</div>
            <ClockItem clock={ minutes } desc={ "mins" } />
            <div className="text-[oklch(0.52_0.16_14.92)] font-bold text-2xl my-auto">:</div>
            <ClockItem clock={ seconds } desc={ "secs" } />
        </div>
    )
}

export default Countdown;