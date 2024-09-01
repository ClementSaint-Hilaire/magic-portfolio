"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Bento } from "@/components/BentoTemplates";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";


const BLUR_FADE_DELAY = 0.04;



//data
const reviews = [
  {
    name: "Arthur Laisney",
    username: "",
    body: "Bien, bien stylé en vrais.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Emma Gomes",
    username: "",
    body: "Je m'y connais pas mais c'est vachement beau en tous cas.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Léo Lucarz",
    username: "",
    body: "En vrais y a une inspiration Apple non ?",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Pierre Le Reste",
    username: "",
    body: "Le mec bosse ou quoi ?",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Maman",
    username: "",
    body: "Très fière de toi mon chéri !!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "ChatGPT",
    username: "",
    body: "Un excellent choix pour ceux qui recherchent simplicité et qualité.",
    img: "https://avatar.vercel.sh/james",
  },
];
 
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
 
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};


export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section id="hero" className="flex min-h-[40dvh] flex-1 items-center justify-center text-center">
        <div className="w-full max-w-2xl space-y-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-black"
              yOffset={8}
              text={`csh Templates`}
            />
            <BlurFadeText
              className="max-w-[700px] md:text-l text-muted-foreground"
              delay={BLUR_FADE_DELAY}
              text={'Retrouvez ma suite de templates Notion, Slides et Figma.'}
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

      <section id="reviews">
        <div className="space-y-12 w-full py-12 max-w-[1000px] mx-auto">
              <BlurFade>
                <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="pointer-events-none bg-black bg-clip-text text-center text-4xl font-semibold leading-loose text-transparent dark:bg-white"
                    yOffset={8}
                    text={`Ce que les gens en pensent.`}
                />            
              </BlurFade>
          </div>
    
        <div className="grid items-center justify-center gap-4 text-center md:px-3 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            
            <div>
                <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                  <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                      <ReviewCard key={review.username} {...review} />
                    ))}
                  </Marquee>
                  <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                      <ReviewCard key={review.username} {...review} />
                    ))}
                  </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
            </div>
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
