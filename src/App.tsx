import { MenuDesktop } from './components/MenuDesktop';
import { MenuMobile } from './components/MenuMobile';
import { Button } from './components/Button';
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
    <div id="container" className="min-h-screen px-4 pt-7 pb-16 font-display">
      <header className="max-w-[1112px] m-auto mb-8">
        <nav className="flex justify-between items-center h-[28px]">
          <img className="w-[45px] h-[28px]" src={wIcon} alt="" />
          <MenuDesktop />
          <MenuMobile />
        </nav>
      </header>
      <main className="max-w-[1112px] m-auto grid gap-16">
        <section className="grid gap-6">
          <img src={web3Mobile} alt="" aria-hidden="true" />
          <h1 className="text-preset-2">The Bright Future of Web 3.0?</h1>
          <p className="text-preset-6 text-navy-600">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <Button className="max-w-max">read more</Button>
        </section>
        <section>
          <ArticleCard />
        </section>
        <section className="grid gap-8">
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
            image={retroPc}
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
