import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { MdOutlineFormatQuote } from "react-icons/md";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

export default function Component() {
  return (
    <Section
      title="Testimonials"
      subtitle="Real Impact, Real Advocates"
    >
      <Carousel>
        <div className="max-w-2xl mx-auto relative">
          <CarouselContent>
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-2 pb-5">
                  <div className="text-center">
                    <MdOutlineFormatQuote className="text-4xl text-themeDarkGray my-4 mx-auto" />
                    <BlurFade delay={0.25} inView>
                      <h4 className="text-1xl font-semibold max-w-lg mx-auto px-10">
                        "Nyayanidhi transformed how I handle cases. What used to take my entire weekend now takes a few hours. The precedent research is thorough, and the automated formatting saves countless revision cycles. Most importantly, it's given me back time for what matters - strategic case planning and client relationships."
                      </h4>
                    </BlurFade>
                    <div className="">
                      <BlurFade delay={0.25 * 3} inView>
                        <h4 className="text-1xl font-semibold my-8">
                          Advocate Rajesh Kumar
                        </h4>
                      </BlurFade>
                    </div>
                    <BlurFade delay={0.25 * 4} inView>
                      <div className="mt-4 mb-3">
                        <span className="text-sm text-themeDarkGray">
                          Senior Partner, Kumar & Associates
                        </span>
                        <p className="text-sm text-themeDarkGray">
                          15+ years specializing in Property Law
                        </p>
                      </div>
                    </BlurFade>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-2/12 bg-gradient-to-l from-background"></div>
        </div>
        {/* <div className="md:block hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div> */}
      </Carousel>
    </Section>
  );
}
