import { Silkscreen } from 'next/font/google';
import Image from 'next/image';

const fontHeadline = Silkscreen({ subsets: ['latin'], weight: '700' });
const font = Silkscreen({ subsets: ['latin'], weight: '400' });

const intro =
  "I'm Martin Wittemann – Frontend developer, gamer and proud father.";

const subIntor = 'I have a lot of experien, you guessed it...';

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

export default function Home() {
  return (
    <div
      className={`${font.className} mx-16 flex mt-16 gap-10 flex-col lg:flex-row-reverse justify-center`}
    >
      <aside className="min-w-[230px] flex flex-col">
        <Image
          src="/mw.jpeg"
          width={104}
          height={104}
          alt="Picture of the author"
          className="border-4 border-foreground grayscale mb-2"
        />
        <h3 className={`${fontHeadline.className}`}>Martin Wittemann</h3>
        <p className="text-xs">Frontend Developer bla bla...</p>
        <ul className="text-xs text-primary underline mt-2">
          {links.map((data) => {
            return (
              <li key="">
                <a href={data.href} target={data.target}>
                  {data.title}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="max-w-screen-xl">
        <p>Hey 👋</p>
        <h1 className={`${fontHeadline.className} text-primary my-4 text-3xl`}>
          {intro}
        </h1>
        <p>{subIntor}</p>

        <h2 className={`${fontHeadline.className} mt-12 text-lg`}>
          Experience
        </h2>
      </main>
    </div>
  );
}
