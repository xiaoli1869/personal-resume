import { TFunction } from "i18next";
import { Blog } from "../data/blogs";

interface BlogCardProps {
  blog: Blog;
  t: TFunction;
}

const BlogCard = ({ blog, t }: BlogCardProps) => {
  const { image, titleKey, tagKey, readTimeKey, dateKey } = blog;

  return (
    <div className="swiper-slide">
      <div className="">
        <div className="relative">
          <a
            href={blog.link}
            target="_blank"
            className="group block aspect-6/4 overflow-hidden rounded-lg"
          >
            <img
              src={image}
              alt={t(titleKey)}
              className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
            />
          </a>

          {/* Tags */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
            >
              {t(tagKey)}
            </a>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-medium xl:text-2xl">
            <a
              href="article.html"
              className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
            >
              {t(titleKey)}
            </a>
          </h2>

          <ul className="mt-4 flex flex-wrap items-center gap-2">
            <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
              {t(readTimeKey)}
            </li>
            <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
              {t(dateKey)}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
