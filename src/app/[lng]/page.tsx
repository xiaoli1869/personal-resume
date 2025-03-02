import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../lib/i18n";
import { ProjectCard } from "./components/ProjectGallery";
import {
  WorkExperienceItem,
  workExperienceData,
} from "./components/WorkExperience";
import { ExpertiseItem, expertiseData } from "./components/Expertise";
import { ServiceCard, serviceData } from "./components/Service";
import { Intro } from "./components/Intro";
import { PageProps } from "../types";

export default async function Home({ params }: PageProps) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {/* Intro */}
      <Intro t={t} variant="home" />

      <div className="grid grid-cols-1 gap-4 lg:gap-6">
        {/* Work Experience */}
        <div className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark">
          <h3 className="relative z-10 bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-black dark:text-light">
            {t("home.work_experience.title")}
          </h3>

          <div className="max-h-[200px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
            <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
              {workExperienceData.map((item, index) => (
                <WorkExperienceItem
                  key={index}
                  period={t(item.period)}
                  company={t(item.company)}
                  position={t(item.position)}
                  logo={item.logo}
                />
              ))}
            </div>
            <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
              {workExperienceData.map((item, index) => (
                <WorkExperienceItem
                  key={`repeat-${index}`}
                  period={t(item.period)}
                  company={t(item.company)}
                  position={t(item.position)}
                  logo={item.logo}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
          <h3 className="text-2xl font-semibold dark:text-light">
            {t("home.expertise.title")}
          </h3>
          <div className="max-h-[200px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 animate-scrollY2 group-hover:[animation-play-state:paused]">
              {expertiseData.map((item, index) => (
                <ExpertiseItem
                  key={index}
                  name={t(item.name)}
                  logo={item.logo}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 animate-scrollY2 group-hover:[animation-play-state:paused]">
              {expertiseData.map((item, index) => (
                <ExpertiseItem
                  key={`repeat-${index}`}
                  name={t(item.name)}
                  logo={item.logo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl font-semibold dark:text-light">
            {t("home.projects.title")}
          </h3>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary"
          >
            <span>{t("home.projects.view_all")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5"></path>
            </svg>
          </Link>
        </div>

        <div className="mt-6 space-y-6">
          <ProjectCard
            image="/images/project-1.jpg"
            category={t("home.projects.categories.product_design")}
          />
          <ProjectCard
            image="/images/project-2.jpg"
            category={t("home.projects.categories.product_design")}
          />
        </div>
      </div>

      {/* Services */}
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl font-semibold dark:text-light">
            {t("home.services.title")}
          </h3>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary"
          >
            <span>{t("home.services.view_all")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5"></path>
            </svg>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              title={t(service.title)}
              icon={service.icon}
            />
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <div className="overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-medium text-muted dark:bg-dark-2">
          <div className="animate-marquee whitespace-nowrap">
            {t("home.contact.marquee")}
          </div>
        </div>
        <h2 className="mt-4 text-[40px] font-semibold leading-snug text-dark dark:text-light whitespace-pre-line">
          {t("home.contact.title")}
        </h2>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary"
        >
          <span>{t("home.contact.cta")}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <path d="M17.5 11.667v-5h-5"></path>
            <path d="m17.5 6.667-7.5 7.5-7.5-7.5"></path>
          </svg>
        </Link>
      </div>
    </main>
  );
}
