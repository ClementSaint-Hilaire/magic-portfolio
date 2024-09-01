"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Bento } from "@/components/BentoTemplateSlide";
import { cn } from "@/lib/utils";


const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section id="hero" className="flex min-h-[40dvh] flex-1 items-center justify-center text-center">
        <div className="w-full max-w-2xl space-y-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-loose text-transparent dark:from-white dark:to-black"
              yOffset={8}
              text={`Slides Templates`}
            />
            <BlurFadeText
              className="max-w-[1000px] md:text-l text-muted-foreground"
              delay={BLUR_FADE_DELAY}
              text={'Rendez vos présentation attractives.'}
            />
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
