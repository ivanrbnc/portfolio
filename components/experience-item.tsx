import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ExperienceItemProps = {
  position: string;
  company: string;
  date: string;
  description: string[];
};

export function ExperienceItem({ position, company, date, description }: ExperienceItemProps) {
  return (
    <div className="relative flex items-start">
      {/* Timeline Dot */}
      <div className="absolute left-4 w-4 h-4 bg-gray-500 rounded-full border-4 border-white shadow-md z-10" />

      {/* Card Content */}
      <Card className="ml-16 flex-1">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{position}</CardTitle>
              <CardDescription className="text-base">{company}</CardDescription>
            </div>
            <Badge variant="outline">{date}</Badge>
          </div>
          <div className="border-b border-slate-200 mt-3"></div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-slate-600 list-disc list-outside pl-5">

            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
