import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Header from '@/components/blog/header';

import blogData from '@/data/blog.json';
import Post, { PostType } from '@/components/blog/post';

export const getStaticPaths = (() => {
  const paths = blogData.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = ((context) => {
  const post = blogData.find(
    (post) => post.id === context.params?.id
  ) as PostType;

  return {
    props: { post },
  };
}) satisfies GetStaticProps<{
  post: PostType;
}>;

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header></Header>
      <Post data={post}></Post>
    </>
  );
}
