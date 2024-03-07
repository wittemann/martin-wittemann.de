import { Silkscreen } from 'next/font/google';

const fontHeadline = Silkscreen({ subsets: ['latin'], weight: '700' });

export default function Projects() {
  return (
    <section>
      <h2 className={`${fontHeadline.className} mt-12 text-lg`}>Projects</h2>
      <p>TBD</p>
    </section>
  );
}
