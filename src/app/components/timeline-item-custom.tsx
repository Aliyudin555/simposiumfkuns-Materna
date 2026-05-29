"use client"

import {
    TimelineConnector,
    TimelineContent,
    TimelineDescription,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
  } from "@/components/ui/timeline"
import { DateTime } from "luxon";
import { ReactNode } from "react";

export type TimelineAbstractItemType = {
    title: ReactNode,
    desc: string,
    dateStart: string,
    dateEnd: string,
    label?: string
    isBottom?: boolean,
}

// Menggunakan warna aksen untuk status aktif
const timelineActiveStyle = "text-[oklch(0.75_0.13_12.75)]";
const timelineLabelActiveStyle = "bg-[oklch(0.75_0.13_12.75)] font-bold shadow-md";

// Menggunakan warna utama dengan transparansi untuk status tidak aktif (past/future)
const timelineInactiveStyle = "text-[oklch(0.52_0.16_14.92)]/60";
const timelineLabelInactiveStyle = "bg-[oklch(0.52_0.16_14.92)]/50";

export function TimelineItemCustom({ title, desc, dateStart, dateEnd, label, isBottom } : TimelineAbstractItemType) {
    const dateStartDate = DateTime.fromISO(dateStart).setZone('Asia/Jakarta');
    const dateEndDate = DateTime.fromISO(dateEnd).setZone('Asia/Jakarta');
    const dateToday = DateTime.now().toLocal();

    const isActive = dateToday.toUTC() >= dateStartDate.toUTC() && dateToday.toUTC() <= dateEndDate.toUTC();
    
    const curClass = isActive ? timelineActiveStyle : timelineInactiveStyle;
    const curLabelClass = isActive ? timelineLabelActiveStyle : timelineLabelInactiveStyle;

    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot className={`${ curClass }`} />
                { !isBottom ? <TimelineConnector className="bg-[oklch(0.52_0.16_14.92)]/20" /> : <></> }
            </TimelineSeparator>
            <TimelineContent>
                <TimelineTitle className={`${ curClass } font-extrabold tracking-tight`}>{ title }</TimelineTitle>
                <TimelineDescription className={ `flex flex-col gap-2 text-base ${ curClass }` }>
                    <div className="font-medium">{ desc }</div>
                    { label != undefined && label.length > 0 
                        ? <div className={ `p-2 px-3 w-fit rounded-md text-white text-sm tracking-wide ${curLabelClass}` }>
                            { label }</div> : <></> }
                </TimelineDescription>
            </TimelineContent>
        </TimelineItem>
    );
}