import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Clock, BookOpen, FileText, Search, Languages, FileCheck } from 'lucide-react';

const featuresData = [
  {
    id: 1,
    title: "Client Interactions",
    content: "Adaptive AI questionnaires and automated document parsing that extracts relevant points of law.",
    benefit: "Save 5-6 initial client interactions",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "Strategic Analysis",
    content: "Efficient AI recommendations specific to case stage. Quickly send applicable reports to clients.",
    benefit: "Save weeks of strategic brainstorming",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "Legal Drafting",
    content: "Seamlessly get filing-ready drafts while you are engaged in various court representation.",
    benefit: "Complete drafts within 2 hours",
    icon: <FileText className="w-6 h-6 text-primary" />,
  },
  {
    id: 4,
    title: "Legal Research",
    content: "Detailed reports analysing various precedents and strategic points of law.",
    benefit: "30 minutes instead of weeks",
    icon: <Search className="w-6 h-6 text-primary" />,
  },
  {
    id: 5,
    title: "Judicial Translations",
    content: "Certified and court accepted translations, perfect for crisis and last minute case-filings.",
    benefit: "50 times faster than traditional approaches",
    icon: <Languages className="w-6 h-6 text-primary" />,
  },
  {
    id: 6,
    title: "Clerical Assistance",
    content: "On-demand services including indexing, paperbook creation, and court compliance filing.",
    benefit: "Complete digital record maintenance",
    icon: <FileCheck className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Get Efficient" subtitle="Case Analysis to Court Ready Documents In Minutes, Not Weeks">
      <Features data={featuresData} />
    </Section>
  );
}
