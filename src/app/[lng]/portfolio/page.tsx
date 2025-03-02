import { useTranslation } from "@/app/lib/i18n";
import { Intro } from "../components/Intro";
import { Contact } from "../components/Contact";
import { ProjectCard } from "@/app/[lng]/components/ProjectGallery";
import { PageProps } from "@/app/types";

export default async function Portfolio({ params }: PageProps) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  const projects = [
    {
      image: "/images/project-1.jpg",
      category: t("home.projects.categories.product_design"),
      portfolio: {
        title: t("portfolio.projects.op.title"),
        description: t("portfolio.projects.op.description"),
        link: "https://landing.oneport.ai/",
        tech: "React 18 + TypeScript + Vite + React Router + Ant Design + TailwindCSS + Axios + i18next + ESLint",
      },
    },
    {
      image: "/images/project-2.jpg",
      category: t("home.projects.categories.product_design"),
      portfolio: {
        title: t("portfolio.projects.ft.title"),
        description: t("portfolio.projects.ft.description"),
        link: "https://www.forthtech.org/",
        tech: "Vue 3 + Vite + Element Plus + TailwindCSS + Vue Router + Vue I18n + ECharts + Axios",
      },
    },
    {
      image: "/images/project-3.png",
      category: t("home.projects.categories.product_design"),
      portfolio: {
        title: t("portfolio.projects.op_admin.title"),
        description: t("portfolio.projects.op_admin.description"),
        link: "https://portal.oneport.ai/",
        tech: "React 18 + TypeScript + Vite + Ant Design + TailwindCSS + React Router + i18next + Axios + Google 2FA",
      },
    },
    {
      image: "/images/project-4.png",
      category: t("home.projects.categories.product_design"),
      portfolio: {
        title: t("portfolio.projects.onefly.title"),
        description: t("portfolio.projects.onefly.description"),
        link: "",
        tech: "React 18 + TypeScript + Vite + Mobx + Ant Design + TailwindCSS + Web3 + Ethers + ECharts",
      },
    },
    {
      image: "/images/project-5.png",
      category: t("home.projects.categories.product_design"),
      portfolio: {
        title: t("portfolio.projects.liquix.title"),
        description: t("portfolio.projects.liquix.description"),
        link: "https://app.liquix.finance",
        tech: "Vue 2 + Element UI + Web3 + Ethers + Web3-Onboard + Uniswap SDK + Aave SDK",
      },
    },
    {
      image: "/images/project-6.png",
      category: t("home.projects.categories.product_design"),
      portfolio: {
        title: t("portfolio.projects.lendingX.title"),
        description: t("portfolio.projects.lendingX.description"),
        link: "",
        tech: "React 18 + TypeScript + Vite + Mobx + Ant Design + TailwindCSS + Web3 + Ethers + Uniswap SDK + Web3-Onboard",
      },
    },
    {
      image: "/images/project-7.png",
      category: t("home.projects.categories.product_design"),
      portfolio: {
        title: t("portfolio.projects.mof.title"),
        description: t("portfolio.projects.mof.description"),
        link: "https://www.mofsaas.com/h-col-156.html",
        tech: "Electron+Vite+Vue3+Ts+Axios +Pinia+Naive +Tailwind+Socket+Udp+Node",
      },
    },
    {
      image: "/images/project-8.png",
      category: t("home.projects.categories.product_design"),
      portfolio: {
        title: t("portfolio.projects.mofsaas.title"),
        description: t("portfolio.projects.mofsaas.description"),
        link: "http://wms.mofsaas.com/",
        tech: "React+Vite+Ts+Axios +Mobx+React-Router+Antd +Tailwind",
      },
    },
  ];

  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {/* Intro */}
      <Intro t={t} variant="portfolio" />

      {/* Portfolio */}
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
        <div className="">
          <h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
            {t("portfolio.title")}{" "}
            <span className="text-primary">
              {t("portfolio.titleHighlight")}
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted dark:text-light/70">
            {t("portfolio.description")}
          </p>
        </div>

        {/* Portfolio */}
        <div className="mt-10 lg:mt-14">
          <div className="mt-6 space-y-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                category={project.category}
                type="portfolio"
                portfolio={project.portfolio}
              />
            ))}
          </div>
        </div>

        {/* Contact */}
        <Contact t={t} />
      </div>
    </main>
  );
}
