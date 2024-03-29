import { Silkscreen } from 'next/font/google';
import details from '@/data/details.json';

const fontHeadline = Silkscreen({ subsets: ['latin'], weight: '700' });

export default function Details() {
  return (
    <section className="flex gap-5 w-full mt-12 flex-wrap">
      {Object.keys(details).map((name, detailId) => (
        <div
          key={detailId}
          className="grow p-2 bg-primary/10 min-w-56 basis-0 eight-bit-border"
        >
          <h2 className={`${fontHeadline.className} text-lg`}>{name}</h2>
          <ul className="list-disc list-inside pl-2">
            {details[name as keyof typeof details].map((detail, id) => (
              <li key={id}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
