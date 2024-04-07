import { Silkscreen } from 'next/font/google';
import Job from './job';
import experience from '@/data/experience.json';

const fontHeadline = Silkscreen({ subsets: ['latin'], weight: '700' });

export default function Experience() {
  return (
    <section>
      <h2 className={`${fontHeadline.className} mt-12 text-lg`}>
        What I&apos;m currently doing
      </h2>
      <Job data={experience.current} />

      <h2 className={`${fontHeadline.className} mt-12 text-lg`}>
        From the job archive
      </h2>
      {experience.archive.map((job, index) => {
        return <Job key={index} data={job} />;
      })}
    </section>
  );
}
