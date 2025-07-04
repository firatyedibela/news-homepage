import type React from 'react';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className: string;
};

export const Link = ({ children, className, href }: ButtonProps) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};
