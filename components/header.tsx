import { Silkscreen } from 'next/font/google';

const fontHeadline = Silkscreen({ subsets: ['latin'], weight: '700' });

const intro =
  "I'm Martin Wittemann – Frontend developer, gamer and proud father.";

const subIntro = 'I have a lot of experien, you guessed it...';

export default function Header() {
  return (
    <header>
      <p>Hey 👋</p>
      <h1 className={`${fontHeadline.className} text-primary my-4 text-3xl`}>
        {intro}
      </h1>
      <p>{subIntro}</p>
    </header>
  );
}
