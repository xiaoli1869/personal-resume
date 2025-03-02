import { useTranslation } from "@/app/lib/i18n";
import { Intro } from "../components/Intro";
import { PageProps } from "@/app/types";
import { CTAButtons } from "../components/CTAButtons";
export default async function ContactPage({ params }: PageProps) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {/* Intro */}
      <Intro t={t} variant="blog" />

      {/* Contact */}
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
        <div className="">
          <h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-lg text-muted dark:text-light/70">
            {t("contact.description")}
          </p>
          <CTAButtons t={t} />
        </div>
      </div>
    </main>
  );
}
