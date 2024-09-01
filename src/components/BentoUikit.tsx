import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-uikitOne";
import { BentoCardTwo, BentoGridTwo } from "@/components/magicui/bento-uikitTwo";


//Bento Features
const features = [
  {
    name: "Simple d’utilisation.",
    description: "Il vous suffit de drag & drop les sections que vous voulez utiliser.",
    className: "col-span-3 lg:col-span-2",
    background: ( 
      <img src="/uikit/utilisation.png"/>
    ),
  },
  {
    name: "Entièrement responsive.",
    description: "Chaque sections est conçu avec une variante mobile, talette et ordinateur.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img src="/uikit/responsive.png"/>
    ),
  },
  {
    name: "Dark mode (soon).",
    description: "Darker is better",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img src="/uikit/darkmode.png"/>
    ),
  },
  {
    name: "Entièrement customizable.",
    description: "Chaque sections est composée de plusieurs variantes pour convenir au mieux vos besoins.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img src="/uikit/custom.png"/>
    ),
  },
];

export function Bento() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}



//Bento sections
const sections = [
  {
    name: "Feature Sections",
    description: "Idéale pour vos éléments clés",
    className: "col-span-3 lg:col-span-3s",
    background: ( 
      <img src="/uikit/features.png"/>
    ),
  },
  {
    name: "Citations",
    description: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img src="/uikit/quote.png"/>
    ),
  },
  {
    name: "Hero Sections",
    description: "La première impression est importante.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img src="/uikit/hero.png"/>
    ),
  },
  {
    name: "Reviews",
    description: "Let them speak !",
    className: "col-span-3 lg:col-span-2",
    background: (
      ""
    ),
  },
  {
    name: "Princing",
    description: "Simple, efficace.",
    className: "col-span-3 lg:col-span-1",
    background: (
      ""
    ),
  },
  {
    name: "FAQ",
    description: "Pour les questions fréquentes.",
    className: "col-span-3 lg:col-span-1",
    background: (
      ""
    ),
  },
  {
    name: "Bentos",
    description: "Juste comme celui-ci.",
    className: "col-span-3 lg:col-span-2",
    background: (
      ""
    ),
  },
  {
    name: "and Mooore",
    description: "",
    className: "col-span-3 lg:col-span-3",
    background: (
      ""
    ),
  },
];

export function Bento2() {
  return (
    <BentoGridTwo>
      {sections.map((sections, idx) => (
        <BentoCardTwo key={idx} {...sections} />
      ))}
    </BentoGridTwo>
  );
}

