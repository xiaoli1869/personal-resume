import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TFunction } from "i18next";

interface IntroProps {
  t: TFunction;
  variant?: string;
}

export const Intro = ({ t, variant = "home" }: IntroProps) => {
  return (
    <div>
      <div
        className={`rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark ${
          variant === "home" ? "h-full " : " lg:sticky lg:top-24"
        }`}
      >
        <div className="aspect-6/4 overflow-hidden rounded-lg bg-light pt-4 text-center dark:bg-dark-2">
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={300}
            height={300}
            className="inline-block h-full w-full scale-110 object-contain object-bottom"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold dark:text-light">
            {t("home.intro.greeting")}
          </h3>
          <p className="mt-2 text-muted dark:text-light/70">
            {t("home.intro.description")}
            <span className="font-semibold text-dark dark:text-white">
              {t("home.intro.role1")}
            </span>
            🖥️
            {t("home.intro.experience")}
            <span className="font-semibold text-dark dark:text-white">
              {t("home.intro.years")}
            </span>
            {t("home.intro.worldwide")}
            <span className="font-semibold text-dark dark:text-white">
              {t("home.intro.web3Years")}
            </span>
            {t("home.intro.web3")}
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              data-clipboard-text="boy1869@qq.com"
              data-clipboard-action="copy"
              className="js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-primary px-6 py-4 font-medium text-dark transition text-white [--trigger:focus]  hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="h-6 w-6"
              >
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Zm10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6"></path>
              </svg>
              <span>{t("home.cta.book_call")}</span>

              <span
                className="hs-tooltip-content invisible z-10 hidden rounded-lg bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                role="tooltip"
              >
                {t("home.cta.copied")}
              </span>
            </button>
            <button
              type="button"
              data-clipboard-text="boy1869@qq.com"
              data-clipboard-action="copy"
              className="js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="h-6 w-6"
              >
                <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z"></path>
                <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path>
              </svg>
              <span>{t("home.cta.copy_email")}</span>

              <span
                className="hs-tooltip-content invisible z-10 hidden rounded-lg bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                role="tooltip"
              >
                {t("home.cta.copied")}
              </span>
            </button>
          </div>

          {/* Social */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Link
              href="https://t.me/Leon_Li451"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.71571 17.6056C7.71571 17.6056 16.632 13.8123 19.7243 12.4766C20.9097 11.9423 24.9298 10.2326 24.9298 10.2326C24.9298 10.2326 26.7852 9.48468 26.6306 11.3012C26.579 12.0492 26.1667 14.6671 25.7544 17.4987C25.1359 21.5058 24.4659 25.8867 24.4659 25.8867C24.4659 25.8867 24.3628 27.1156 23.4867 27.3293C22.6105 27.543 21.1674 26.5814 20.9097 26.3676C20.7035 26.2074 17.0443 23.8031 15.7043 22.6277C15.3435 22.3072 14.9312 21.6661 15.7558 20.9181C17.6112 19.155 19.8274 16.9645 21.1674 15.5754C21.7859 14.9342 22.4043 13.4383 19.8274 15.2548C16.1681 17.8727 12.5604 20.3304 12.5604 20.3304C12.5604 20.3304 11.7357 20.8646 10.1896 20.3837C8.64336 19.903 6.83949 19.2618 6.83949 19.2618C6.83949 19.2618 5.60262 18.4604 7.71571 17.6056Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
