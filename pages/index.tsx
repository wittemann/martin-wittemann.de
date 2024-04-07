import Experience from '@/components/home/experience';
import { Sarabun } from 'next/font/google';
import Details from '@/components/home/details';
import Header from '@/components/home/header';

const font = Sarabun({ subsets: ['latin'], weight: ['100', '700'] });

export default function Home() {
  return (
    <>
      <Header></Header>
      <Experience></Experience>
      <Details></Details>
    </>
  );
}
