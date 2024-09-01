"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Particles from "@/components/magicui/particles";
import { Bento } from "@/components/BentoHome";
import { ContactBouton } from "@/components/Button";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
        <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={"currentColor"}
            refresh
        />
      <section id="hero" className="flex min-h-[60dvh] flex-1 items-center justify-center text-center">
        <div className="w-full max-w-2xl space-y-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-black"
              yOffset={8}
              text={`${DATA.name.split(" ")[0]} Saint-Hilaire`}
            />
            <BlurFadeText
              className="max-w-[700px] md:text-l text-muted-foreground"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
            <BlurFade>
              <ContactBouton/>
            </BlurFade>

          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12 max-w-[1000px] mx-auto">
            <BlurFade>
              <Bento/>
            </BlurFade>
        </div>
      </section>
    
      <section id="footer">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div>
            
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
