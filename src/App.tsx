import { MenuDesktop } from './components/MenuDesktop';
import { MenuMobile } from './components/MenuMobile';
import { Link } from './components/Link';
import { ArticleCard } from './components/ArticleCard';
import { Article } from './components/Article';
import wIcon from './assets/images/w.svg';
import retroPc from './assets/images/image-retro-pcs.jpg';
import topLaptop from './assets/images/image-top-laptops.jpg';
import gamingGrowth from './assets/images/image-gaming-growth.jpg';
import web3Mobile from './assets/images/image-web-3-mobile.jpg';
import web3Desktop from './assets/images/image-web-3-desktop.jpg';

function App() {
  return (
    <div
      id="container"
      className="min-h-screen px-4 sm:px-20 pt-7 pb-16 font-display"
    >
      <header className="max-w-[1112px] m-auto mb-8">
        <nav className="flex justify-between items-center h-[28px]">
          <img className="w-[45px] h-[28px]" src={wIcon} alt="" />
          <MenuDesktop />
          <MenuMobile />
        </nav>
      </header>
      <main className="max-w-[1112px] m-auto grid gap-16 lg:grid-cols-[1fr_350px] lg:gap-8">
        <section className="grid gap-6">
          <picture>
            <source media="(max-width: 465px)" srcSet={web3Mobile} />
            <img
              className="w-full md:h-[300px] object-cover"
              src={web3Desktop}
              alt=""
            />
          </picture>
          <div className="grid gap-6 xl:grid-cols-2 xl:gap-8">
            <h1 className="text-preset-2 xl:text-[56px] xl:leading-[56px]">
              The Bright Future of Web 3.0?
            </h1>
            <div className="grid gap-6">
              <p className="text-preset-6 text-navy-600">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <Link
                href="#"
                className="max-w-max max-h-[48px] px-8 py-3 text-preset-7 uppercase bg-red-500 hover:bg-navy-950 text-navy-950 hover:text-white transition duration-150 cursor-pointer"
              >
                read more
              </Link>
            </div>
          </div>
        </section>
        <section>
          <ArticleCard />
        </section>
        <section className="grid gap-8 lg:col-span-2 lg:grid-cols-[repeat(auto-fit,_minmax(343px,_1fr))] lg:mt-8">
          <Article
            image={retroPc}
            altText="Image of a retro pc"
            prefix="01"
            title="Reviving Retro PCs"
            content="What happens when old PCs are given modern upgrades?"
            href="#"
          />
          <Article
            image={topLaptop}
            altText="Image of a laptop keyboard"
            prefix="02"
            title="Top 10 Laptops of 2022"
            content="Our best picks for various needs and budgets."
            href="#"
          />
          <Article
            image={gamingGrowth}
            altText="Image of a gamepad on top of a palm of a hand"
            prefix="03"
            title="The Growth of Gaming"
            content="How the pandemic has sparked fresh opportunities."
            href="#"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
