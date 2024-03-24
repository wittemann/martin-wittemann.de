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

      <p className="mt-4">
        Somewhere around the year 2000 I started my first webseite as a hobby
        project which ultimatly lead me to go to my local university in
        Karlsruhe and study computer science, one of the best decisions of my
        life as computer science and in particular software development is what
        I learned to love.
      </p>

      <p className="mt-4">
        After a long period of leading frontend developers and only beeing a
        part time developer I recently swtched back to my roots in frontend
        developoment. Over time, the size of my team and my responsibilites grew
        but at the same time, the time spend on coding and solving technical
        issues shrunk. Now my main focus is back where my passion is on software
        engineering.
      </p>

      <p className="mt-4">
        I do spend most of my spare time with my family which is my main driver
        for basically everything. The rest of the time is spend on gaming, doing
        and watching sports and watching history, physics or computer science
        videos.
      </p>
    </header>
  );
}
