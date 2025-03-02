import React from "react";
import { useTranslation } from "@/app/lib/i18n";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Link from "next/link";

const Header = async ({ lang }: { lang: string }) => {
  const { t } = await useTranslation(lang);
  const menuItems = [
    { key: "header.home", href: "/", icon: "/svg/home.svg" },
    { key: "header.about", href: "/about", icon: "/svg/about.svg" },
    { key: "header.services", href: "/services", icon: "/svg/services.svg" },
    { key: "header.portfolio", href: "/portfolio", icon: "/svg/portfolio.svg" },
    { key: "header.blog", href: "/blog", icon: "/svg/blog.svg" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="">
          <div className="flex items-center justify-between rounded-2xl bg-white p-3 shadow dark:bg-black dark:shadow-dark">
            {/* Logo */}
            <a
              href=""
              className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path
                  fill="currentColor"
                  d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"
                ></path>
              </svg>
              <span>
                {t("header.title")}
                <span className="text-primary">{t("header.title1")}</span>{" "}
              </span>
            </a>

            {/* Navigation menu */}
            <ul className="hidden flex-1 flex-wrap items-center justify-center lg:flex">
              {menuItems.map((item, index) => {
                return (
                  <li className="group/menu-item" key={index}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                    >
                      {/* <Image
                        src={item.icon}
                        alt={t(item.key)}
                        className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                        width={20}
                        height={20}
                      /> */}
                      <span>{t(item.key)}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Header buttons */}
            <div className="hidden items-center gap-1 lg:flex">
              {/* Language switcher */}
              <LanguageSwitcher lang={lang} />

              {/* Theme appearance toggler */}
              <div className="">
                <button
                  type="button"
                  className="hs-dark-mode group flex h-10 w-10 items-center justify-center rounded-lg text-center font-medium text-dark transition hover:bg-light hs-dark-mode-active:hidden dark:text-gray-400 dark:hover:text-gray-500"
                  data-hs-theme-click-value="dark"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path d="M11.8 3a8.656 8.656 0 0 0-4.523 1.28A8.918 8.918 0 0 0 4.04 7.756a9.167 9.167 0 0 0 .44 9.24 8.863 8.863 0 0 0 3.553 3.137 8.633 8.633 0 0 0 4.624.824 8.69 8.69 0 0 0 4.381-1.723 8.973 8.973 0 0 0 2.892-3.78c.3-.738-.419-1.48-1.142-1.179a5.604 5.604 0 0 1-3.892.15 5.74 5.74 0 0 1-3.083-2.431 5.956 5.956 0 0 1-.848-3.886c.17-1.357.8-2.61 1.78-3.541l.069-.072c.485-.567.099-1.488-.668-1.488h-.234l-.06-.005L11.8 3Z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="hs-dark-mode group hidden h-10 w-10 items-center justify-center rounded-lg text-center font-medium text-dark transition hover:bg-light hs-dark-mode-active:flex dark:text-[#FD7E41] dark:hover:bg-dark dark:hover:text-[#FD7E41]"
                  data-hs-theme-click-value="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="h-6 w-6"
                  >
                    <path d="M10 15.833a.833.833 0 0 1 .828.736l.005.098v.833a.833.833 0 0 1-1.66.097l-.006-.097v-.833a.833.833 0 0 1 .833-.834Zm5.26-1.741.08.069.582.583a.833.833 0 0 1-1.1 1.248l-.078-.07-.583-.583a.833.833 0 0 1 1.015-1.306l.085.059Zm-9.42.068a.833.833 0 0 1 .068 1.1l-.069.08-.583.582a.833.833 0 0 1-1.248-1.1l.07-.078.583-.583a.833.833 0 0 1 1.178 0ZM3.333 9.167a.833.833 0 0 1 .098 1.66l-.098.006H2.5a.833.833 0 0 1-.098-1.66l.098-.006h.833Zm14.167 0a.833.833 0 0 1 .098 1.66l-.098.006h-.833a.833.833 0 0 1-.098-1.66l.098-.006h.833ZM5.178 4.008l.078.07.583.583a.833.833 0 0 1-1.1 1.247l-.078-.069-.583-.583A.833.833 0 0 1 5.092 3.95l.086.058Zm10.744.069a.833.833 0 0 1 .07 1.1l-.07.079-.583.583a.833.833 0 0 1-1.247-1.1l.069-.078.583-.584a.833.833 0 0 1 1.178 0ZM10 1.667a.833.833 0 0 1 .828.736l.005.097v.833a.833.833 0 0 1-1.66.098l-.006-.098V2.5A.833.833 0 0 1 10 1.667Zm0 4.166a4.167 4.167 0 1 1-4.163 4.348L5.833 10l.004-.18A4.167 4.167 0 0 1 10 5.832Z"></path>
                  </svg>
                </button>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-dark px-6 py-4 text-center text-base font-semibold leading-tight text-white transition hover:bg-primary dark:bg-dark-2 dark:text-white dark:hover:bg-primary dark:hover:text-white"
              >
                <span>{t("header.button")}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
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

            {/* Navigation toggler */}
            <button
              type="button"
              className="text-dark transition dark:text-white/70 lg:hidden"
              data-hs-overlay="#mobile-menu"
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">切换导航</span>
              <svg
                className="h-9 w-9 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="hs-overlay fixed bottom-0 start-0 top-0 z-[60] hidden h-full w-64 -translate-x-full transform overflow-y-auto bg-white transition-all duration-300 hs-overlay-open:translate-x-0 dark:bg-black [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2"
      >
        <div className="flex h-full flex-col justify-between gap-5 p-5">
          <div className="">
            {/* Logo */}
            <a
              href=""
              className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path
                  fill="currentColor"
                  d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"
                ></path>
              </svg>
              <span>
                {t("header.title")}
                <span className="text-primary">{t("header.title1")}</span>{" "}
              </span>
            </a>
          </div>

          <ul className="mt-4 flex flex-1 flex-col gap-2">
            {menuItems.map((item) => (
              <li key={item.key} className="group/menu-item">
                <a
                  href={item.href}
                  className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                >
                  {/* <Image
                    src={item.icon}
                    alt={t(item.key)}
                    className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                    width={20}
                    height={20}
                  /> */}
                  <span>{t(item.key)}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <LanguageSwitcher lang={lang} />
              <button
                type="button"
                data-hs-theme-click-value="dark"
                className=" hs-dark-mode flex w-full items-center ml-5 rounded-lg  text-center text-sm text-muted transition hover:bg-light hs-dark-mode-active:hidden dark:hover:bg-dark dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M11.8 3a8.656 8.656 0 0 0-4.523 1.28A8.918 8.918 0 0 0 4.04 7.756a9.167 9.167 0 0 0 .44 9.24 8.863 8.863 0 0 0 3.553 3.137 8.633 8.633 0 0 0 4.624.824 8.69 8.69 0 0 0 4.381-1.723 8.973 8.973 0 0 0 2.892-3.78c.3-.738-.419-1.48-1.142-1.179a5.604 5.604 0 0 1-3.892.15 5.74 5.74 0 0 1-3.083-2.431 5.956 5.956 0 0 1-.848-3.886c.17-1.357.8-2.61 1.78-3.541l.069-.072c.485-.567.099-1.488-.668-1.488h-.234l-.06-.005L11.8 3Z"></path>
                </svg>
                <span>{t("theme.change_appearance")}</span>
              </button>
            </div>
            <button
              type="button"
              data-hs-theme-click-value="light"
              className="hs-dark-mode hidden w-full items-center justify-start gap-2 rounded-lg px-4 py-2 text-center text-sm text-muted transition hover:bg-light hs-dark-mode-active:flex dark:hover:bg-dark dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M10 15.833a.833.833 0 0 1 .828.736l.005.098v.833a.833.833 0 0 1-1.66.097l-.006-.097v-.833a.833.833 0 0 1 .833-.834Zm5.26-1.741.08.069.582.583a.833.833 0 0 1-1.1 1.248l-.078-.07-.583-.583a.833.833 0 0 1 1.015-1.306l.085.059Zm-9.42.068a.833.833 0 0 1 .068 1.1l-.069.08-.583.582a.833.833 0 0 1-1.248-1.1l.07-.078.583-.583a.833.833 0 0 1 1.178 0ZM3.333 9.167a.833.833 0 0 1 .098 1.66l-.098.006H2.5a.833.833 0 0 1-.098-1.66l.098-.006h.833Zm14.167 0a.833.833 0 0 1 .098 1.66l-.098.006h-.833a.833.833 0 0 1-.098-1.66l.098-.006h.833ZM5.178 4.008l.078.07.583.583a.833.833 0 0 1-1.1 1.247l-.078-.069-.583-.583A.833.833 0 0 1 5.092 3.95l.086.058Zm10.744.069a.833.833 0 0 1 .07 1.1l-.07.079-.583.583a.833.833 0 0 1-1.247-1.1l.069-.078.583-.584a.833.833 0 0 1 1.178 0ZM10 1.667a.833.833 0 0 1 .828.736l.005.097v.833a.833.833 0 0 1-1.66.098l-.006-.098V2.5A.833.833 0 0 1 10 1.667Zm0 4.166a4.167 4.167 0 1 1-4.163 4.348L5.833 10l.004-.18A4.167 4.167 0 0 1 10 5.832Z"></path>
              </svg>
              <span>{t("theme.change_appearance")}</span>
            </button>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-dark px-6 py-4 text-center text-base font-semibold leading-tight text-white transition hover:bg-primary dark:bg-dark-2 dark:text-white dark:hover:bg-primary dark:hover:text-white"
            >
              <span>{t("header.contact")}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
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
        </div>
      </div>
    </>
  );
};

export default Header;
