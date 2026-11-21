import Link from 'next/link';

export type PostType = {
  id: string;
  title: string;
  paragraphs: string[];
  tags: string[];
};

export default function Post({ data }: { data: PostType }) {
  return (
    <>
      <Link href="/blog">&lt; Back</Link>

      <h1>{data.title}</h1>
      {data.paragraphs.map((p: string, index: number) => (
        <p key={index}>{p}</p>
      ))}
    </>
  );
}
