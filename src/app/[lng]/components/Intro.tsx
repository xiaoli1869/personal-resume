import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TFunction } from "i18next";
import { CTAButtons } from "./CTAButtons";
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

          <CTAButtons t={t} />

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
