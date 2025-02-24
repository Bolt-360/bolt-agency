// /app/blog/[id]/page.js

import Link from 'next/link';
import { blogPosts } from '@/components/blog/posts';
import { getPostById } from '@/components/blog/posts';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }) {
  const postData = getPostById(params.id);

  // Se o post não for encontrado, retorna 404
  if (!postData) {
    notFound();
  }

  return (
    <section className="blog-details-section py-5">
      <div className="container">
        <div className="row">
          {/* Coluna Principal */}
          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              {/* Imagem do Post */}
              <img
                src={`/${postData.image}`}
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
                <div className="mt-4">
                  <Link href="/blog" className="btn btn-primary">
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
                  {/* Exemplo de post recente */}
                  {blogPosts.map((post) => (
                    <li className="d-flex align-items-start mb-3">
                    <img
                      src="/path/to/recent-post.jpg"
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
                  {/* Adicione mais posts dinamicamente aqui */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}