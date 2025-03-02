import Image from "next/image";

interface ExpertiseItemProps {
  name: string;
  logo: string;
}

export function ExpertiseItem({ name, logo }: ExpertiseItemProps) {
  return (
    <div className="text-center">
      <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
        <Image
          src={logo}
          alt={name}
          width={32}
          height={32}
          className="h-8 w-8"
        />
      </div>
      <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
        {name}
      </p>
    </div>
  );
}

export const expertiseData = [
  {
    name: "home.expertise.tools.react",
    logo: "/svg/react.svg",
  },
  {
    name: "home.expertise.tools.vue",
    logo: "/svg/vue.svg",
  },
  {
    name: "home.expertise.tools.nodejs",
    logo: "/images/node.png",
  },
  {
    name: "home.expertise.tools.typescript",
    logo: "/images/ts.png",
  },
  {
    name: "home.expertise.tools.tailwind",
    logo: "/images/tailwind.png",
  },
  {
    name: "home.expertise.tools.nextjs",
    logo: "/images/next.png",
  },
  {
    name: "home.expertise.tools.dapp",
    logo: "/images/dapp.png",
  },
  {
    name: "home.expertise.tools.metamask",
    logo: "/images/metamask.png",
  },
  {
    name: "home.expertise.tools.ethereum",
    logo: "/images/dapp.png",
  },
  {
    name: "home.expertise.tools.vite",
    logo: "/svg/vite.svg",
  },
  {
    name: "home.expertise.tools.electron",
    logo: "/images/electron.png",
  },
  {
    name: "home.expertise.tools.uniapp",
    logo: "/images/uniapp.png",
  },
  {
    name: "home.expertise.tools.antd",
    logo: "/images/antd.png",
  },
  {
    name: "home.expertise.tools.element",
    logo: "/images/element.png",
  },
  {
    name: "home.expertise.tools.cursor",
    logo: "/images/cursor.png",
  },
];
