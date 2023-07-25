import MainContextProvider from '@/context/provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Solicy Test',
  description: 'Test for Solicy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <MainContextProvider>
        <body className={inter.className}>{children}</body>
      </MainContextProvider>
    </html>
  );
}
