import type React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`px-8 py-3 bg-red-500 hover:bg-navy-950 text-navy-950 hover:text-white transition duration-150 cursor- ${className}`}
    >
      <span className="text-preset-7 uppercase">{children}</span>
    </button>
  );
};
