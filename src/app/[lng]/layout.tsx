import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Shapes from "@/components/Shapes/Shapes";
import "@/styles/style.css";
import "@/styles/css2.css";
import Initializer from "@/components/Initializer/Initializer";
import { dir } from "i18next";
import { languages } from "../lib/i18n/setting";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { PageProps } from "../types";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: "Leon Li | Frontend Engineer",
  description:
    "Frontend engineer specializing in React, TypeScript, and modern web technologies. View my portfolio of web applications and interactive experiences.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Leon",
    "Frontend Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Web Development",
  ],
  authors: [{ name: "Leon Li" }],
  creator: "Leon Li",
  openGraph: {
    type: "website",
    title: "Leon Li | Frontend Engineer Portfolio",
    description:
      "Frontend engineer specializing in React, TypeScript, and modern web technologies.",
    images: [
      {
        url: "/images/profile.png", // 记得添加一张优质的预览图
        width: 1200,
        height: 630,
        alt: "Leon Li's Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leon Li | Frontend Engineer",
    description:
      "Frontend engineer portfolio showcasing web development projects",
    images: ["/images/profile.png"],
  },
};

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<
  {
    children: React.ReactNode;
  } & PageProps
>) {
  const { lng } = await params;
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className="relative h-screen overflow-y-auto overflow-x-hidden bg-light text-dark dark:bg-dark-2 dark:text-light">
        <AntdRegistry>
          <Initializer />
          <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
            <Header lang={lng} />
            {children}
            <Footer />
          </div>
          <Shapes />
        </AntdRegistry>
      </body>
    </html>
  );
}
