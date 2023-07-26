import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

export default function PrimaryButton({ children, ...props }: IProps) {
  const { className, ...customProps } = props;
  return (
    <button
      className={`p-3 border-2 border-black transition-all bg-transparent ease-in-out hover:bg-black hover:text-white
       ${className ? ` ${className}` : ''}`}
      {...customProps}
    >
      {children}
    </button>
  );
}
