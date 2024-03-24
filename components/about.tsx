import { Silkscreen } from 'next/font/google';

const fontHeadline = Silkscreen({ subsets: ['latin'], weight: '700' });

export default function About() {
  return (
    <header>
      <p className="text-2xl">
        Hey <span className="animate-wave inline-block">👋</span>
      </p>
      <h1 className={`${fontHeadline.className} my-4 text-3xl`}>
        I&apos;m Martin Wittemann – Frontend developer, gamer and proud father.
      </h1>

      <p>
        Frontend developer and leader with 10+ years of experience in a
        professional environment in leading and developing of large scale web
        applications.
      </p>

      <p className="mt-4">
        Somewhere around the year 2000 I started my first webseite as a hobby
        project which ultimatly lead me to go to the university and study
        computer science in Karlsruhe, one of the best decisions of my life as
        computer science and in particular software development is what I
        learned to love.
      </p>

      <p className="mt-4">
        After a long period of leading frontend developers and only beeing a
        part time developerI recently swtched back to my roots in Frontend
        Developoment. Over time, the size of my team and my responsibilites grew
        but at the same time, the time spend on coding and solving technical
        issues shrunk. Now my main focus is back on software engineering where
        my passion is.
      </p>

      <p className="mt-4">
        I do spend most of my spare time with my family which is my main driver.
        The rest of the time is spend on gaming, doing and watching sports and
        watching history, physics or computer science videos.
      </p>
    </header>
  );
}
