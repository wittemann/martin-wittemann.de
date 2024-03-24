import Image from 'next/image';
import { Silkscreen } from 'next/font/google';
import links from '@/data/links.json';

const fontHeadline = Silkscreen({ subsets: ['latin'], weight: '700' });

export default function Bio({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <aside className={className}>
      <Image
        src="/mw.jpeg"
        width={104}
        height={104}
        alt="Picture of the author"
        className="border-4 border-foreground grayscale mb-2"
      />
      <h3 className={`${fontHeadline.className}`}>Martin Wittemann</h3>
      <p>
        Senior Frontend Engineer at{' '}
        <a
          className="hover:underline-offset-4 underline"
          href="https://www.mail-and-media.com/"
          target="_blank"
        >
          1&1 MAIL & MEDIA
        </a>
      </p>

      <ul className="mt-2 hover:text-prim">
        {links.map((data) => {
          return (
            <li key={data.title} className="list-inside list-disc">
              <a
                href={data.href}
                target={data.target}
                className="hover:underline-offset-4 underline"
              >
                {data.title}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
