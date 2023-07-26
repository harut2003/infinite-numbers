import MainContextProvider from '@/context/provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Instructions from '@/components/instructions';

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
        <body className={inter.className}>
          <div className='grid grid-cols-3 min-h-screen'>
            <div className='col-span-3 md:col-span-2 flex flex-col'>
              <Header />
              {children}
              <Footer />
            </div>
            <div className='hidden md:block col-span-1'>
              <Instructions />
            </div>
          </div>
        </body>
      </MainContextProvider>
    </html>
  );
}
