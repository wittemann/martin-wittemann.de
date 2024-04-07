export type PostType = {
  id: string;
  title: string;
  paragraphs: string[];
  tags: string[];
};

export default function Post({ data }: { data: PostType }) {
  return (
    <>
      <a href="/blog">&lt; Back</a>

      <h1>{data.title}</h1>
      {data.paragraphs.map((p: string, index: number) => (
        <p key={index}>{p}</p>
      ))}
    </>
  );
}
