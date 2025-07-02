import { useState } from 'react';
import { AnimatePresence, motion, spring } from 'motion/react';
import { routes } from '../routes';
import { Squash as Hamburger } from 'hamburger-react';

export const MenuMobile = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="lg:hidden">
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-navy-950 opacity-50 z-5"
          ></motion.div>
        )}
      </AnimatePresence>

      <div className="z-10 relative">
        <Hamburger size={30} toggled={isOpen} toggle={setOpen} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, right: '-60%' }}
            animate={{ opacity: 1, right: 0 }}
            exit={{ opacity: 0, right: '-60%' }}
            transition={{ duration: 0.2 }}
            className="w-[256px] md:w-[312px] p-4 md:p-9 fixed right-0 top-0 bottom-0 bg-white opacity-100 z-6"
          >
            <ul className="grid gap-6 mt-[145px]">
              {routes.map((route, idx) => (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: spring,
                    stiffness: 260,
                    damping: 22,
                    delay: 0.1 + idx / 10,
                  }}
                  id="mobile-menu-item"
                  key={route.title}
                >
                  <a
                    onClick={() => setOpen((prev) => !prev)}
                    className="capitalize text-lg leading-[24px] text-navy-950"
                    href={route.href}
                  >
                    {route.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
