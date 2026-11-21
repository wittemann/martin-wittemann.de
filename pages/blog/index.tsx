import Header from '@/components/blog/header';
import Post, { PostType } from '@/components/blog/post';
import blogData from '@/data/blog.json';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <Header></Header>
      <Post data={blogData[0] as PostType}></Post>
      <div>
        <strong>Older Posts</strong>
        <ul>
          {blogData.map((post, index) => {
            if (index === 0) return;
            return (
              <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
