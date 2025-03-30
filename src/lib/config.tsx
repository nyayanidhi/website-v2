import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Nyayanidhi",
  description: "Focus on representation, not paperwork. AI-powered solutions trusted by India's top legal minds.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["Legal Tech", "AI", "Legal Automation", "Law Practice", "Legal Solutions"],
  links: {
    email: "support@nyayanidhi.com",
    twitter: "https://twitter.com/nyayanidhi",
    discord: "https://discord.gg/nyayanidhi",
    github: "https://github.com/nyayanidhi",
    instagram: "https://instagram.com/nyayanidhi/",
  },
  header: [
    {
      trigger: "Solutions",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "Transform Your Legal Workflow",
          description: "From Case Analysis to Court Ready Documents In Minutes, Not Weeks",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Client Case Understanding",
            description: "Smart questionnaires and AI analysis in 5 minutes",
          },
          {
            href: "#",
            title: "Strategic Analysis",
            description: "AI-powered strategy recommendations and precedent analysis",
          },
          {
            href: "#",
            title: "Legal Drafting",
            description: "Court-ready documents with automatic formatting and citations",
          },
          {
            href: "#",
            title: "Professional Translations",
            description: "Certified translations in all major Indian languages",
          },
          {
            href: "#",
            title: "Digital Case Management",
            description: "Real-time dashboard for timeline and document tracking",
          },
        ],
      },
    },
    {
      trigger: "Features",
      content: {
        items: [
          {
            title: "Case Analysis",
            href: "#",
            description: "Automated document parsing and intelligent case categorization",
          },
          {
            title: "Legal Research",
            href: "#",
            description: "Deep legal research with precedent analysis in 30 minutes",
          },
          {
            title: "Document Automation",
            href: "#",
            description: "Court-ready documents with automatic formatting",
          },
          {
            title: "Translation Services",
            href: "#",
            description: "Professional translations in all major Indian languages",
          },
          {
            title: "Digital Management",
            href: "#",
            description: "Complete digital case management and tracking",
          },
          {
            title: "Team Collaboration",
            href: "#",
            description: "Advanced tools for team coordination and workflow",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "Case Studies",
    },
  ],
  pricing: [
    {
      name: "SOLO PRACTITIONER",
      href: "#",
      price: "₹5,000",
      period: "case",
      features: [
        "Case analysis",
        "Legal grounds with precedents",
        "Complete draft of the case",
        "On-demand filing support",
      ],
      description: "Perfect for independent practice",
      buttonText: "Get Started",
      isPopular: false,
    },
    {
      name: "CASE MANAGER",
      href: "#",
      price: "₹20,000",
      period: "month",
      features: [
        "5 new case filings with IAs",
        "On-Demand Translation services",
        "Advanced precedent analysis",
        "Dedicated filing support",
        "Paperbook automation",
      ],
      description: "End-to-End case management for growing practices",
      buttonText: "Subscribe",
      isPopular: true,
    },
    {
      name: "FIRM EDITION",
      href: "#",
      price: "₹50,000",
      period: "month",
      features: [
        "20 new cases per month",
        "Dedicated client support",
        "Unlimited translations",
        "Custom workflow integration",
        "Advanced analytics dashboard",
        "Team collaboration tools",
      ],
      description: "Built for law firms & legal teams",
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "How does Nyayanidhi save time?",
      answer: (
        <span>
          Traditional legal processes take 2+ weeks, while Nyayanidhi completes the same work in 30 minutes through AI-powered automation of case analysis, drafting, and research.
        </span>
      ),
    },
    {
      question: "What services does Nyayanidhi provide?",
      answer: (
        <span>
          Nyayanidhi offers comprehensive legal automation including client case understanding, strategic analysis, legal drafting, professional translations, clerical work, research & arguments, and digital case management.
        </span>
      ),
    },
    {
      question: "How accurate are the translations?",
      answer: (
        <span>
          Our translations are certified and cover all major Indian languages. They are specifically optimized for legal terminology and undergo quality checks to ensure accuracy for court submissions.
        </span>
      ),
    },
    {
      question: "Is Nyayanidhi suitable for solo practitioners?",
      answer: (
        <span>
          Yes, Nyayanidhi is designed to support practices of all sizes. Our Solo Practitioner plan is specifically tailored for independent lawyers, providing essential tools at an affordable per-case price.
        </span>
      ),
    },
    {
      question: "What kind of support do you provide?",
      answer: (
        <span>
          We provide dedicated support for filing and court objections, along with comprehensive documentation and training. Enterprise clients receive additional dedicated support for client interactions and custom workflow integration.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Solutions",
      links: [
        { href: "#", text: "Case Analysis", icon: null },
        { href: "#", text: "Legal Drafting", icon: null },
        { href: "#", text: "Translations", icon: null },
        { href: "#", text: "Case Management", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Case Studies", icon: null },
        { href: "#", text: "Blog", icon: null },
        { href: "#", text: "Press", icon: null },
        { href: "#", text: "Partners", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Help Center", icon: null },
        { href: "#", text: "Contact", icon: null },
        { href: "#", text: "Support", icon: null },
        { href: "#", text: "Legal", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;