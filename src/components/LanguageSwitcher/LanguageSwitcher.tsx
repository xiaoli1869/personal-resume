"use client";
import React from "react";
import { usePathname } from "next/navigation";

interface LanguageSwitcherProps {
  lang: string;
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  lang,
  className,
}) => {
  const pathname = usePathname();
  const languages = [
    { code: "zh", label: "CN" },
    { code: "en", label: "EN" },
  ];

  const getNewPathname = (newLang: string) => {
    const segments = pathname.split("/");
    segments[1] = newLang;
    return segments.join("/");
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div className="inline-flex space-x-1 border border-gray-300 rounded-lg">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => {
              const newPath = getNewPathname(language.code);
              window.location.href = newPath;
            }}
            className={`rounded-lg px-3 py-2 text-base font-medium transition  ${
              lang === language.code ? "text-dark bg-slate-200" : "text-muted"
            } hover:bg-light focus:outline-none dark:hover:bg-dark`}
          >
            {language.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
