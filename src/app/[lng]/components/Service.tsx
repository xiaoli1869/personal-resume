import React from "react";

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, icon }: ServiceCardProps) {
  return (
    <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
      <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
        {icon}
      </div>
      <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
        {title}
      </p>
    </div>
  );
}

export function UIUXIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="h-12 w-12 text-primary lg:h-16 lg:w-16"
    >
      <path d="M8 13.333A5.333 5.333 0 0 1 13.333 8h37.334A5.333 5.333 0 0 1 56 13.333v37.334A5.333 5.333 0 0 1 50.667 56H13.333A5.333 5.333 0 0 1 8 50.667V13.333ZM40 8 8 40M25.334 8l-16 16M53.333 9.333 38.667 24M24 40 10.666 53.333"></path>
      <path d="M56 24H24v32"></path>
    </svg>
  );
}

export function MobileAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="h-12 w-12 text-primary lg:h-16 lg:w-16"
    >
      <path d="M26.666 18.667A5.333 5.333 0 0 1 32 13.333h16a5.333 5.333 0 0 1 5.333 5.334v26.666A5.333 5.333 0 0 1 48 50.667H32a5.333 5.333 0 0 1-5.334-5.334V18.667Zm-8 0v26.666m-8-24v21.334"></path>
    </svg>
  );
}

export function ProductDesignIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="h-12 w-12 text-primary lg:h-16 lg:w-16"
    >
      <path d="M10.666 13.333a2.667 2.667 0 0 1 2.667-2.666h37.334a2.667 2.667 0 0 1 2.666 2.666v5.334a2.667 2.667 0 0 1-2.666 2.666H13.332a2.666 2.666 0 0 1-2.667-2.666v-5.334Zm0 21.334A2.667 2.667 0 0 1 13.333 32H24a2.667 2.667 0 0 1 2.666 2.667v16A2.667 2.667 0 0 1 24 53.333H13.333a2.666 2.666 0 0 1-2.667-2.666v-16ZM37.334 32h16m-16 10.667h16m-16 10.666h16"></path>
    </svg>
  );
}

export function BrandingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="h-12 w-12 text-primary lg:h-16 lg:w-16"
    >
      <path d="M36.214 36.773a15.982 15.982 0 0 1 1.12 5.894A15.86 15.86 0 0 1 32 54.56a15.814 15.814 0 0 1-10.666 4.107c-8.827 0-16-7.174-16-16 0-7.36 5.013-13.6 11.786-15.44"></path>
      <path d="M46.88 27.227c6.773 1.84 11.787 8.08 11.787 15.44 0 8.826-7.174 16-16 16A15.814 15.814 0 0 1 32 54.56"></path>
      <path d="M16 21.333a16 16 0 1 0 32 0 16 16 0 0 0-32 0Z"></path>
    </svg>
  );
}

export const serviceData = [
  {
    title: "home.services.types.uiux",
    icon: <UIUXIcon />,
  },
  {
    title: "home.services.types.mobile",
    icon: <MobileAppIcon />,
  },
  {
    title: "home.services.types.product",
    icon: <ProductDesignIcon />,
  },
  {
    title: "home.services.types.branding",
    icon: <BrandingIcon />,
  },
];
