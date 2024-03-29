import Bio from '@/components/bio';
import Experience from '@/components/experience';
import About from '@/components/about';
import Projects from '@/components/projects';
import { Sarabun } from 'next/font/google';
import Footer from '@/components/footer';

const font = Sarabun({ subsets: ['latin'], weight: ['100', '700'] });

export default function Home() {
  return (
    <div
      className={`${font.className} tracking-wider mx-16 flex mt-16 gap-10 flex-col lg:flex-row-reverse justify-center`}
    >
      <Bio className="min-w-[230px] flex flex-col"></Bio>
      <main className="max-w-screen-xl">
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Footer></Footer>
      </main>
    </div>
  );
}
