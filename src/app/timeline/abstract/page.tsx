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
        title: <div>June 3<sup>rd</sup> - 18<sup>th</sup>, 2026</div>,
        desc: "First Wave abstract submission",
        dateStart: "2026-06-03T00:00:00",
        dateEnd: "2026-06-18T23:59:59",
        label: "IDR 120.000"
    },
    {
        title: <div>June 19<sup>th</sup> - July 8<sup>th</sup>, 2026</div>,
        desc: "Second Wave abstract submission",
        dateStart: "2026-06-19T00:00:00",
        dateEnd: "2026-07-08T23:59:59",
        label: "IDR 150.000"
    },
    {
        title: <div>July 9<sup>th</sup> - 28<sup>th</sup>, 2026</div>,
        desc: "Third Wave abstract submission",
        dateStart: "2026-07-09T00:00:00",
        dateEnd: "2026-07-28T23:59:59",
        label: "IDR 180.000"
    },
    {
        title: <div>July 29<sup>th</sup> - August 4<sup>th</sup>, 2026</div>,
        desc: "Additional Wave abstract submission",
        dateStart: "2026-07-29T00:00:00",
        dateEnd: "2026-08-04T23:59:59"

    },
    {
        title: <div>August 22<sup>nd</sup>, 2026</div>,
        desc: "Notification of finalist (abstract acceptance)",
        dateStart: "2026-08-22T00:00:00",
        dateEnd: "2026-08-22T23:59:59"
    },
    {
        title: <div>September 12<sup>th</sup>, 2026</div>,
        desc: "Final poster presentation",
        dateStart: "2026-09-12T00:00:00",
        dateEnd: "2026-09-12T23:59:59",
    }
];

export default function TimelineAbstract() {
    return (
       <div className="flex flex-col justify-center items-center gap-8 px-8 py-12 min-h-screen w-full 
                        bg-[url('/background/bacgroundsolo.png')] bg-cover bg-center bg-no-repeat bg-fixed">
            <Card className="h-fit md:w-3/4">
                <CardHeader className="text-[oklch(0.52_0.16_14.92)]">
                    <CardTitle className="font-bold lg:text-3xl text-xl">Call for Abstracts</CardTitle>
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