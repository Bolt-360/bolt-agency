// /app/blog/[id]/page.js
import Link from 'next/link';
import { getPostById, getAllPostIds } from '@/data/posts';
import { notFound } from 'next/navigation';

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const postData = await getPostById(params.id);
  if (!postData) return { notFound: true };
  return { props: { postData }, revalidate: 60 };
}

export default function BlogPost({ postData }) {
  if (!postData) return notFound();

  return (
    <section className="blog-details-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              <img src={postData.image} alt={postData.title} className="card-img-top img-fluid" />
              <div className="card-body">
                <div className="d-flex flex-wrap text-muted mb-3">
                  <span className="me-3"><i className="far fa-calendar-alt"></i> {postData.date}</span>
                  <span className="me-3"><i className="far fa-user"></i> {postData.author}</span>
                  {postData.categories.length > 0 && (
                    <span><i className="far fa-folder-open"></i> {postData.categories.join(', ')}</span>
                  )}
                </div>
                <h2 className="card-title">{postData.title}</h2>
                <p className="card-text">{postData.content}</p>
                <div className="mt-4 d-flex gap-3">
                  <Link href="/" className="theme-btn">
                    <i className="fas fa-home me-2"></i> Voltar para Home
                  </Link>
                  <Link href="/blog" className="theme-btn">
                    <i className="fas fa-arrow-left me-2"></i> Voltar para o Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            {/* Sidebar opcional */}
          </div>
        </div>
      </div>
    </section>
  );
}