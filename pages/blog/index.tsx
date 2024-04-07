import Header from '@/components/blog/header';
import Post, { PostType } from '@/components/blog/post';
import blogData from '@/data/blog.json';

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
              <a key={post.id} href={`/blog/${post.id}`}>
                <li>{post.title}</li>
              </a>
            );
          })}
        </ul>
      </div>
    </>
  );
}
