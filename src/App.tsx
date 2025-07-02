import { MenuDesktop } from './components/MenuDesktop';
import { MenuMobile } from './components/MenuMobile';
import wIcon from './assets/images/w.svg';
import retroPc from './assets/images/image-retro-pcs.jpg';
import topLaptop from './assets/images/image-top-laptops.jpg';
import gamingGrowth from './assets/images/image-gaming-growth.jpg';

function App() {
  return (
    <div id="container" className="min-h-screen px-4 pt-7">
      <header className="max-w-[1112px] m-auto">
        <nav className="flex justify-between items-center h-[28px]">
          <img className="w-[45px] h-[28px]" src={wIcon} alt="" />
          <MenuDesktop />
          <MenuMobile />
        </nav>
      </header>
      <main className="max-w-[1112px] m-auto"></main>
    </div>
  );
}

export default App;
