import React from "react";
import { TFunction } from "i18next";

interface ContactProps {
  t: TFunction;
}

export const Contact = ({ t }: ContactProps) => {
  return (
    <div className="mt-10 lg:mt-14">
      <div className="group flex gap-6 overflow-hidden rounded-lg bg-light p-6 dark:bg-dark-2">
        <div className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
          <a
            href="contact.html"
            className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
          >
            {t("about.contact.button")}
          </a>
          <a
            href="contact.html"
            className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
          >
            {t("about.contact.button")}
          </a>
        </div>
      </div>
    </div>
  );
};
