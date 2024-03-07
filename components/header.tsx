import { Silkscreen } from 'next/font/google';

const fontHeadline = Silkscreen({ subsets: ['latin'], weight: '700' });

const intro =
  "I'm Martin Wittemann – Frontend developer, gamer and proud father.";

const subIntro = 'I have a lot of experien, you guessed it...';

export default function Header() {
  return (
    <header>
      <p className="text-2xl">
        Hey <span className="animate-wave inline-block">👋</span>
      </p>
      <h1 className={`${fontHeadline.className} my-4 text-3xl`}>{intro}</h1>
      <p>{subIntro}</p>
    </header>
  );
}
