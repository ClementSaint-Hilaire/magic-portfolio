import ShimmerButton from "@/components/magicui/shimmer-button";

export function ContactBouton() {
  return (
    <a className="z-10 flex min-h-[10rem] items-center justify-center" href="mailto:clement.sainthilaire.pro@gmail.com?subject=''&body=''">
      <ShimmerButton className="shadow-2xl" >
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Contact
        </span>
      </ShimmerButton>
    </a>
  );
}

export function OpenBouton() {
  return (
    <a className="z-10 flex min-h-[10rem] items-center justify-center" href="https://www.figma.com/community/file/1411338115792823148/csh-ui-landing-kit-v1-0">
      <ShimmerButton className="shadow-2xl" >
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Ouvrir
        </span>
      </ShimmerButton>
    </a>
  );
}

