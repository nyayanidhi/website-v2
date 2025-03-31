import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, GraduationCap } from "lucide-react";

const problems = [
  {
    title: "Document Overload",
    description:
      "Segregate and manage hundreds of documents into sequential timelines with relevant summaries and points of law being extracted from each file.",
    icon: FileText,
  },
  {
    title: "Outsourced Research",
    description:
      "On-demand back-office to map strategies, legal research and drafting with our trusted advocates empowered by the best AI systems.",
    icon: GraduationCap,
  },
  {
    title: "Judicial Documentation",
    description:
      "Last-mile services handling typing, translations and filing including compliance with respective court rules and norms.",
    icon: Users,
  },
];

export default function Component() {
  return (
    <Section
      title="Litigation AI"
      subtitle="Transform your workflow"
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
