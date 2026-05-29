import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";

export default function Closing() {
    return (
        <Card className="h-full w-full mb-8">
            <CardHeader className="text-[oklch(0.52_0.16_14.92)]">
                <CardTitle className="font-bold lg:text-3xl text-2xl flex items-center justify-between">
                    <div className="">Thank You!</div>
                </CardTitle>
            </CardHeader>
            <CardContent className="text-[oklch(0.52_0.16_14.92)] text-justify">
                Registration is now closed.
                We appreciate your interest and engagement.
                Please stay informed for announcements regarding our upcoming symposiums.
            </CardContent>
        </Card>
    );
}