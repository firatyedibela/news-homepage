export const ArticleCard = () => {
  return (
    <div className="max-w-[350px] bg-navy-950 px-6 py-8 flex flex-col gap-8">
      <h2 className="text-preset-3 text-gold-400">New</h2>
      <div className="flex flex-col gap-8">
        <article className="flex flex-col gap-2 ">
          <h3>
            <a
              className="text-preset-4 hover:text-gold-400 transition duration-150 text-white"
              href="#"
            >
              Hydrogen VS Electric Cars
            </a>
          </h3>
          <p className="text-preset-6 text-grey-300">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </article>
        <div className="w-full h-[1px] bg-navy-600" aria-hidden="true"></div>
        <article className="flex flex-col gap-2">
          <h3>
            <a
              className="text-preset-4 hover:text-gold-400 transition duration-150 text-white"
              href="#"
            >
              The Downsides of AI Artistry
            </a>
          </h3>
          <p className="text-preset-6 text-grey-300">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </article>
        <div className="w-full h-[1px] bg-navy-600" aria-hidden="true"></div>
        <article className="flex flex-col gap-2">
          <h3>
            <a
              className="text-preset-4 hover:text-gold-400 transition duration-150 text-white"
              href="#"
            >
              Is VC Funding Drying Up?
            </a>
          </h3>
          <p className="text-preset-6 text-grey-300">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </article>
      </div>
    </div>
  );
};
