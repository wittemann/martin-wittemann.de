import { Sarabun } from 'next/font/google';

import PixelBackground from '@/components/common/background';
import Bio from '@/components/common/bio';
import Footer from '@/components/common/footer';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const font = Sarabun({ subsets: ['latin'], weight: ['100', '700'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PixelBackground></PixelBackground>
      <div
        className={`${font.className} tracking-wider mx-16 flex mt-16 gap-10 flex-col lg:flex-row-reverse justify-center`}
      >
        <Bio className="min-w-[230px] flex flex-col"></Bio>
        <main className="max-w-screen-xl">
          <Component {...pageProps} /> <Footer></Footer>
        </main>
      </div>
    </>
  );
}
