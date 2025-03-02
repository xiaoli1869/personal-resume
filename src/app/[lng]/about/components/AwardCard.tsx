import { TFunction } from "i18next";

interface AwardCardProps {
  t: TFunction;
  logo: string;
  title: string;
  period: string;
  award: string;
}

export const AwardCard = ({
  t,
  logo,
  title,
  period,
  award,
}: AwardCardProps) => {
  return (
    <div className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
      <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
        <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
          <img src={logo} alt="" className="h-6 w-6 shrink-0" />
        </div>
        <div className="">
          <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
            {title}
          </h5>
          <p className="text-muted">{period}</p>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 25"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          className="h-5 w-5 shrink-0"
        >
          <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
          <path d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889" />
        </svg>
        <h5 className="font-medium leading-tight text-dark dark:text-light">
          {award}
        </h5>
      </div>

      <div className="text-right">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-black dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary"
        >
          <span>{t("about.awards.view_project")}</span>
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
    </div>
  );
};
