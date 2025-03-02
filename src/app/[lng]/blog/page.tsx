import { useTranslation } from "@/app/lib/i18n";
import { Intro } from "../components/Intro";
import { Contact } from "../components/Contact";
import BlogCard from "@/app/[lng]/about/components/BlogCard";
import { blogsData } from "@/app/[lng]/about/data/blogs";
import { PageProps } from "@/app/types";

export default async function Blog({ params }: PageProps) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {/* Intro */}
      <Intro t={t} variant="blog" />

      {/* Blog */}
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
        <div className="">
          <h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
            {t("blog.title")}
          </h2>
          <p className="mt-4 text-lg text-muted dark:text-light/70">
            {t("blog.search_description")}
          </p>
        </div>

        {/* Blog */}
        <div className="mt-10 lg:mt-14">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
            {blogsData.map((blog, index) => (
              <BlogCard key={index} blog={blog} t={t} />
            ))}
          </div>

          <Contact t={t} />
        </div>
      </div>
    </main>
  );
}
