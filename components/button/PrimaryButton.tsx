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
    <button className={className || 'p-3 border-black'} {...customProps}>
      {children}
    </button>
  );
}
