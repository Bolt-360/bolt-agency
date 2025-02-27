import { getBlogPosts } from '@/data/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Notícias e artigos recentes do nosso blog',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Blog</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={post.image}
                alt={post.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-muted small">{post.date}</p>
                <Link 
                  href={`/blog/${post.documentId || post.id}`}
                  className="theme-btn"
                >
                  Ler Mais
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}