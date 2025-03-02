"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ProjectCardProps {
  image: string;
  category: string;
  type?: "project" | "portfolio";
  portfolio?: {
    title: string;
    description: string;
    link: string;
    tech: string;
  };
}

export function ProjectCard({
  image,
  category,
  type = "project",
  portfolio,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
        <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={category}
            width={400}
            height={300}
            className="h-full w-full rounded-t-lg object-cover object-top transition"
          />
          <button
            onClick={() => setOpen(true)}
            className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="h-6 w-6"
            >
              <path d="M10 4.167v11.666M4.167 10h11.666"></path>
            </svg>
          </button>
          {portfolio?.tech && (
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              <span className="rounded bg-white/90 px-2 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur-sm dark:bg-dark-2/90">
                {portfolio.tech}
              </span>
            </div>
          )}
        </div>
        {type === "portfolio" && (
          <div className="flex flex-wrap items-start justify-between py-4 md:p-6">
            <div className="">
              <h3 className="text-lg font-medium md:text-xl lg:text-2xl">
                <a
                  href={portfolio?.link}
                  target="_blank"
                  className="border-b border-transparent text-dark transition hover:border-b-primary hover:text-primary dark:text-light/80 dark:hover:text-primary"
                >
                  {portfolio?.title}
                </a>
              </h3>
              <p className="text-sm text-muted lg:text-base">
                {portfolio?.description}
              </p>
            </div>

            <a
              href={portfolio?.link}
              target="_blank"
              className="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition hover:text-primary dark:bg-black dark:text-light/70 dark:hover:text-primary"
            >
              <span>Visit Site</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 15"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0"
              >
                <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"></path>
              </svg>
            </a>
          </div>
        )}
        {type === "project" && (
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
            <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
              {category}
            </span>
          </div>
        )}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: image }]}
      />
    </>
  );
}
