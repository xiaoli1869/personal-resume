import { TFunction } from "i18next";

interface ServiceCardProps {
  icon: React.ReactNode;
  translationKey: string;
  t: TFunction;
}

export const ServiceCard = ({ icon, translationKey, t }: ServiceCardProps) => {
  return (
    <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
      <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
        {icon}
      </div>
      <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
        {t(translationKey)}
      </p>
    </div>
  );
};
