// app/blog/[id]/page.js (Server Component)
import Link from 'next/link';
import { getPostById, getAllPostIds } from '@/data/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const paths = await getAllPostIds();
  console.log('Parâmetros gerados por generateStaticParams:', paths);
  return paths;
}

export default async function BlogPost({ params }) {
  console.log('Parâmetros recebidos em BlogPost:', params);
  const postData = await getPostById(params.id);

  if (!postData) {
    notFound();
  }

  const allPosts = await getBlogPosts();

  return (
    <section className="blog-details-section py-5">
      <div className="container">
        <div className="row">
          {/* Coluna Principal */}
          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              {/* Imagem do Post */}
              <img
                src={postData.image}
                alt={postData.title}
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                {/* Metadados */}
                <div className="d-flex flex-wrap text-muted mb-3">
                  <span className="me-3">
                    <i className="far fa-calendar-alt"></i> {postData.date}
                  </span>
                  <span className="me-3">
                    <i className="far fa-user"></i> {postData.author}
                  </span>
                  {postData.categories.length > 0 && (
                    <span>
                      <i className="far fa-folder-open"></i>{' '}
                      {postData.categories.join(', ')}
                    </span>
                  )}
                </div>

                {/* Conteúdo */}
                <h2 className="card-title">{postData.title}</h2>
                <p className="card-text">{postData.content}</p>

                {/* Botão de Voltar */}
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

          {/* Sidebar */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h4 className="card-title">Posts Recentes</h4>
                <ul className="list-unstyled">
                  {allPosts.slice(0, 3).map((post) => (
                    <li key={post.id} className="d-flex align-items-start mb-3">
                      <img
                        src={post.image}
                        alt="Post Recente"
                        className="img-thumbnail me-3"
                        style={{ width: '60px', height: '60px' }}
                      />
                      <div>
                        <h6 className="mb-1">{post.title}</h6>
                        <small className="text-muted">{post.date}</small>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}