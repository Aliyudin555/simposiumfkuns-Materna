"use client"

import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from "@/app/components/ui/card";
import {
    Timeline,
  } from "@/components/ui/timeline"
import {
    TimelineItemCustom,
    TimelineAbstractItemType
} from "@/components/timeline-item-custom";

const timelines: TimelineAbstractItemType[] = [
    {
        title: <div>July 20<sup>th</sup> - August 16<sup>th</sup>, 2026</div>,
        desc: "Early Bird",
        dateStart: "2026-07-08T00:00:00",
        dateEnd: "2026-08-07T00:00:00"
    },
    {
        title: <div>August 17<sup>th</sup> - September 6<sup>th</sup>, 2026</div>,
        desc: "Late Bird",
        dateStart: "2026-08-08T00:00:00",
        dateEnd: "2026-09-27T00:00:00"
    }
];

export default function TimelineSymposium() {
    return (
        <div className="flex flex-col justify-center items-center gap-8 px-8 py-12 min-h-screen w-full 
                        bg-[url('/background/bacgroundsolo.png')] bg-cover bg-center bg-no-repeat bg-fixed">
            <Card className="md:w-3/4">
                <CardHeader className="text-[oklch(0.52_0.16_14.92)]">
                    <CardTitle className="font-extrabold lg:text-3xl text-xl tracking-tight">Timeline for Symposium and Workshop Registration</CardTitle>
                </CardHeader>
                <CardContent>
                    <Timeline>
                        {
                            timelines.map((t, i) => (
                                <TimelineItemCustom
                                    key={ i }
                                    title={ t.title }
                                    desc={ t.desc }
                                    dateStart={ t.dateStart }
                                    dateEnd={ t.dateEnd }
                                    label={ t.label }
                                    isBottom={ i + 1 == timelines.length } />
                            ))
                        }
                    </Timeline>
                </CardContent>
            </Card>
        </div>
    );
}