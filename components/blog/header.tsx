import { Silkscreen } from 'next/font/google';

const fontHeadline = Silkscreen({ subsets: ['latin'], weight: '700' });

export default function Header() {
  return (
    <header>
      <h1 className={`${fontHeadline.className} my-4 text-3xl`}>Blog</h1>
    </header>
  );
}
