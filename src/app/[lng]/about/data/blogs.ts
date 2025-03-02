export interface Blog {
  image: string;
  titleKey: string;
  tagKey: string;
  readTimeKey: string;
  dateKey: string;
  link: string;
}

export const blogsData: Blog[] = [
  {
    image: "/images/next_i18n.png",
    titleKey: "blog.article.title",
    tagKey: "blog.article.development",
    readTimeKey: "blog.article.read_time",
    dateKey: "blog.article.date",
    link: "https://juejin.cn/post/7476410894354169910",
  },
];
