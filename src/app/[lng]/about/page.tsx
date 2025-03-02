import { useTranslation } from "@/app/lib/i18n";
import { Intro } from "../components/Intro";
import { expertiseData } from "../components/Expertise";
import { AwardCard } from "./components/AwardCard";
import BlogCard from "./components/BlogCard";
import { awardsData } from "./data/awards";
import { blogsData } from "./data/blogs";
import { Contact } from "../components/Contact";
import { testimonialsData } from "./data/testimonials";
import { PageProps } from "@/app/types";

export default async function About({ params }: PageProps) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {/* Intro */}
      <Intro t={t} variant="about" />

      {/* about */}
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
        <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
          <div className="">
            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
              {t("about.intro.greeting")}
            </h2>
            <p className="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
              {t("about.intro.description")}
              <span className="font-semibold text-dark dark:text-white">
                {t("about.intro.role")}
              </span>
              {t("about.intro.experience")}
              <span className="font-semibold text-dark dark:text-white">
                {t("about.intro.years")}
              </span>
              {t("about.intro.worldwide")}
              <span className="font-semibold text-dark dark:text-white">
                {t("about.intro.web3Years")}
              </span>
              {t("about.intro.web3")}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-primary dark:bg-dark-2 lg:text-lg">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>{t("about.status.available")}</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-6 lg:mt-12 lg:gap-10">
          <div className="flex flex-wrap items-start gap-6 lg:gap-10">
            <div className="">
              <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                {t("about.stats.experience.number")}
              </h2>
              <p className="mt-2 text-muted">
                {t("about.stats.experience.label")}
              </p>
            </div>
            <div className="">
              <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                {t("about.stats.projects.number")}
              </h2>
              <p className="mt-2 text-muted">
                {t("about.stats.projects.label")}
              </p>
            </div>
            <div className="">
              <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                {t("about.stats.clients.number")}
              </h2>
              <p className="mt-2 text-muted">
                {t("about.stats.clients.label")}
              </p>
            </div>
          </div>

          <div className="relative -mt-6 hidden h-[100px] w-[100px] p-4 lg:block xl:-mt-10">
            <img
              src="/svg/circle-text.svg"
              alt=""
              className="absolute inset-0 h-full w-full animate-spin-slow dark:hidden"
            />
            <img
              src="/svg/circle-text-light.svg"
              alt=""
              className="absolute inset-0 hidden h-full w-full animate-spin-slow dark:block"
            />
            <div className="grid h-full w-full place-content-center rounded-full bg-primary text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-10 w-10"
              >
                <path d="M20 5v30m-5-5 5 5 5-5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Brands */}
        <div className="mt-10 lg:mt-14">
          <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
            {t("about.brands.title")}
          </h3>
          <div className="mt-8 grid grid-cols-4 gap-2 lg:grid-cols-8 lg:gap-4">
            {[
              ...expertiseData,
              {
                name: "webpack",
                logo: "/images/webpack.png",
              },
            ].map((company: { name: string; logo: string }) => (
              <div
                key={company.name}
                className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 w-8 lg:h-10 lg:w-10"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        {/* <div className="mt-10 lg:mt-14">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
              {t("about.testimonials.title")}
            </h3>

            <div className="flex items-center gap-2">
              <button
                className="review-carousel-button-prev grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"
                aria-label={t("about.testimonials.navigation.prev")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className="h-5 w-5 shrink-0"
                >
                  <path d="M4.167 10h11.666M4.167 10l5 5m-5-5 5-5" />
                </svg>
              </button>
              <button
                className="review-carousel-button-next grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"
                aria-label={t("about.testimonials.navigation.next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className="h-5 w-5 shrink-0"
                >
                  <path d="M4.167 10h11.666m-5 5 5-5m-5-5 5 5" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-8">
            <div className="swiper review-carousel">
              <div className="swiper-wrapper">
                {testimonialsData.map((testimonial, index) => (
                  <div key={index} className="swiper-slide">
                    <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <img
                              key={i}
                              src="/svg/star-full.svg"
                              alt=""
                              className="h-4 w-4 shrink-0"
                            />
                          ))}
                        </div>

                        <a
                          href={testimonial.websiteUrl}
                          className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black"
                        >
                          <span>{testimonial.website}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 15"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5 shrink-0"
                          >
                            <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                          </svg>
                        </a>
                      </div>

                      <blockquote className="mt-6 flex-1 text-lg">
                        {t(testimonial.quoteKey)}
                      </blockquote>

                      <p className="mt-8 font-medium">
                        {t(testimonial.authorKey)} -
                        <span className="font-normal text-muted">
                          {t(testimonial.positionKey)}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* Awards */}
        {/* <div className="mt-10 lg:mt-14">
          <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
            {t("about.awards.title")}
          </h3>

          <div className="mt-8 space-y-4">
            {awardsData.map((award, index) => (
              <AwardCard
                key={index}
                t={t}
                logo={award.logo}
                title={t(award.titleKey)}
                period={t(award.periodKey)}
                award={t(award.awardKey)}
              />
            ))}
          </div>
        </div> */}

        {/* Blog */}
        <div className="mt-10 lg:mt-14">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
              {t("about.blog.title")}
            </h3>

            <div className="flex items-center gap-2">
              <button
                className="blog-carousel-button-prev grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"
                aria-label={t("about.blog.navigation.prev")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className="h-5 w-5 shrink-0"
                >
                  <path d="M4.167 10h11.666M4.167 10l5 5m-5-5 5-5" />
                </svg>
              </button>
              <button
                className="blog-carousel-button-next grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"
                aria-label={t("about.blog.navigation.next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className="h-5 w-5 shrink-0"
                >
                  <path d="M4.167 10h11.666m-5 5 5-5m-5-5 5 5" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="swiper blog-carousel">
              <div className="swiper-wrapper">
                {blogsData.map((blog, index) => (
                  <BlogCard key={index} blog={blog} t={t} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <Contact t={t} />
      </div>
    </main>
  );
}
