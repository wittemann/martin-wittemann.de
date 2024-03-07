import About from '@/components/about';
import Bio from '@/components/bio';
import Experience from '@/components/experience';
import Header from '@/components/header';
import Projects from '@/components/projects';
import { Sarabun } from 'next/font/google';

const font = Sarabun({ subsets: ['latin'], weight: '100' });

export default function Home() {
  return (
    <div
      className={`${font.className} tracking-wider mx-16 flex mt-16 gap-10 flex-col lg:flex-row-reverse justify-center`}
    >
      <Bio className="min-w-[230px] flex flex-col"></Bio>
      <main className="max-w-screen-xl">
        <Header></Header>

        <About></About>
        <Experience></Experience>
        <Projects></Projects>
      </main>
    </div>
  );
}
