// /app/blog/page.js
import Link from 'next/link';
import { getBlogPosts } from '@/data/posts';

export const metadata = {
  title: 'Blog - Nossa Empresa',
  description: 'Notícias e artigos recentes do nosso blog',
};

export async function getStaticProps() {
  const posts = await getBlogPosts();
  return {
    props: { posts },
    revalidate: 60, // Revalida a cada 60 segundos (ISR)
  };
}

export default function BlogPage({ posts }) {
  return (
    <>
      <section className="page-banner bg-cover" style={{ backgroundImage: 'url("/assets/img/banner.jpg")' }}>
        <div className="container">
          <div className="page-banner-content text-center">
            <h2>Nosso Blog</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Blog</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="news-section section-padding">
        <div className="container">
          <div className="row">
            {posts.map((post) => (
              <div key={post.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="news-card-items style-2">
                  <div
                    className="news-image bg-cover"
                    style={{ backgroundImage: `url("${post.image}")` }}
                  />
                  <div className="news-content">
                    <p>{post.date}</p>
                    <h4>
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h4>
                    <Link className="link-btn" href={`/blog/${post.id}`}>
                      Ler Mais <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}