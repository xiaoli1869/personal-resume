import { TFunction } from "i18next";

interface CTAButtonsProps {
  t: TFunction;
}

export const CTAButtons = ({ t }: CTAButtonsProps) => {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      <button
        type="button"
        data-clipboard-text="boyand2164"
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
  );
};
