import { useTranslation } from "@/app/lib/i18n";
import { Intro } from "../components/Intro";
import { Contact } from "../components/Contact";
import { ServiceCard } from "./components/ServiceCard";
import { servicesData } from "./data/services";
import { PageProps } from "@/app/types";

export default async function Services({ params }: PageProps) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {/* Intro */}
      <Intro t={t} variant="services" />

      {/* Services */}
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
        <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
          <div className="">
            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
              {t("services.title")}{" "}
              <span className="text-primary">
                {t("services.titleHighlight")}
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
              {t("services.description")}
              <span className="font-semibold text-dark dark:text-white">
                {t("services.descriptionHighlight")}
              </span>
              {t("services.descriptionEnd")}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-primary dark:bg-dark-2 lg:text-lg">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span>{t("services.availableForHire")}</span>
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:mt-14">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              translationKey={service.translationKey}
              t={t}
            />
          ))}
        </div>
        <Contact t={t} />
      </div>
    </main>
  );
}
