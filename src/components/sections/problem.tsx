import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Clock, Cpu } from "lucide-react";

const problems = [
  {
    title: "Built for Enterprises",
    description:
      "Single Platform to manage legal requirements around all assets and liabilities.",
    icon: Building2,
  },
  {
    title: "Shift From Billable Hours to Billable Outcomes",
    description:
      "Transparent processes where our partner advocates bill fixed rates on completion of work.",
    icon: Clock,
  },
  {
    title: "AI-native, vertically integrated",
    description:
      "Engage specialist advocates working with AI to manage business risks.",
    icon: Cpu,
  },
];

export default function Component() {
  return (
    <Section
      title="Augment General Counsels"
      subtitle="with Litigation centric AI-Agents and specialist advocates"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
