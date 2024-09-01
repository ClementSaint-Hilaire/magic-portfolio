"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Bento } from "@/components/BentoUikit";
import { Bento2 } from "@/components/BentoUikit";
import { cn } from "@/lib/utils";
import { OpenBouton } from "@/components/Button";


const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section id="hero" className="flex min-h-[60dvh] flex-1 items-center justify-center text-center">
        <div className="w-full max-w-2xl space-y-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-1.5">
          <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-black"
              yOffset={8}
              text={`csh`}
            />
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-loose text-transparent dark:from-white dark:to-black"
              yOffset={8}
              text={`UI Landing Kit`}
            />
            <BlurFadeText
              className="max-w-[1000px] md:text-l text-muted-foreground"
              delay={BLUR_FADE_DELAY}
              text={'Créez simplement, élégamment.'}
            />
            <BlurFade>
              <OpenBouton/>
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

      <div className="space-y-12 w-full py-12 max-w-[1000px] mx-auto">
              <BlurFade>
                <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="pointer-events-none bg-black bg-clip-text text-center text-4xl font-semibold leading-loose text-transparent dark:bg-white"
                    yOffset={8}
                    text={`Découvrez plus de 20 sections conçu avec soin.`}
                />            
              </BlurFade>
      </div>

      <section id="sections">
        <div className="space-y-12 w-full py-12 max-w-[1000px] mx-auto">
            <BlurFade>
              <Bento2/>
            </BlurFade>
        </div>
      </section>

      <div className="space-y-12 w-full py-12 max-w-[1000px] mx-auto">
              <BlurFade>
                <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="pointer-events-none bg-black bg-clip-text text-center text-4xl font-semibold leading-loose text-transparent dark:bg-white"
                    yOffset={8}
                    text={`Pourquoi choisir csh Landing UI Kit ?`}
                />            
              </BlurFade>
      </div>





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
