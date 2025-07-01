import { MenuDesktop } from './components/MenuDesktop';
import { MenuMobile } from './components/MenuMobile';
import wIcon from './assets/images/w.svg';

function App() {
  return (
    <div id="container" className="min-h-screen px-4 pt-7 ">
      <header className="max-w-[1112px] m-auto">
        <nav className="flex justify-between items-center h-[28px]">
          <img className="w-[45px] h-[28px]" src={wIcon} alt="" />
          <MenuDesktop />
          <MenuMobile />
        </nav>
      </header>
    </div>
  );
}

export default App;
