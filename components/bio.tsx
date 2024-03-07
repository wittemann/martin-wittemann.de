import Image from 'next/image';
import { Silkscreen } from 'next/font/google';

const fontHeadline = Silkscreen({ subsets: ['latin'], weight: '700' });

const shortInfoText = 'Senior Frontend Engineer';
const links = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/martin-wittemann',
    target: '_blank',
  },
  {
    title: 'Github',
    href: 'https://github.com/wittemann',
    target: '_blank',
  },
  {
    title: 'Pluralsight',
    href: 'https://app.pluralsight.com/profile/martin-wittemann-8',
    target: '_blank',
  },
  {
    title: 'Instragram',
    href: 'https://www.instagram.com/wittemann/',
    target: '_blank',
  },
  { title: 'Email', href: 'mailto:martin@wittemann-mail.de' },
];

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
      <p className="text-xs">{shortInfoText}</p>
      <ul className="text-xs text-primary mt-2 hover:text-prim">
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
