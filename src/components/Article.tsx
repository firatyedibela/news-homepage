type ArticleProps = {
  image: string;
  altText: string;
  prefix: string;
  title: string;
  content: string;
  href: string;
};

export const Article = ({
  image,
  altText,
  prefix,
  title,
  content,
  href,
}: ArticleProps) => {
  return (
    <article className="flex gap-6">
      <div className="shrink-0">
        <img
          className="w-[100px] h-[129px] object-cover"
          src={image}
          alt={altText}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="flex flex-col gap-2">
          <span className="text-preset-3 text-red-500">{prefix}</span>
          <a
            href={href}
            className="text-preset-5 text-navy-950 hover:text-red-500 transition duration-150 capitalize"
          >
            {title}
          </a>
        </h3>
        <p className="text-preset-6 text-navy-600">{content}</p>
      </div>
    </article>
  );
};
