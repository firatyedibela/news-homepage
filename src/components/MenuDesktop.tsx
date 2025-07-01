import { routes } from '../routes';

export const MenuDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-10">
      {routes.map((route) => (
        <li key={route.title}>
          <a className="capitalize menu-item" href={route.href}>
            {route.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
