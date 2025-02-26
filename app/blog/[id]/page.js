// app/blog/[id]/page.js (Server Component, apenas o conteúdo ajustado)

import Link from 'next/link';
import { getPostById, getAllPostIds, getBlogPosts } from '@/data/posts';
import { notFound } from 'next/navigation';
import Footer from '@/layouts/Footer';

export async function generateStaticParams() {
  const paths = await getAllPostIds();
  console.log('Parâmetros gerados por generateStaticParams (documentIds):', JSON.stringify(paths, null, 2));
  return paths;
}

export default async function BlogPost({ params }) {
  console.log('Parâmetros recebidos em BlogPost (documentId):', JSON.stringify(params, null, 2));

  console.log('Tentando buscar post com documentId:', params.id);

  const postData = await getPostById(params.id);

  console.log('Resultado de getPostById para documentId', params.id, ':', JSON.stringify(postData, null, 2));

  if (!postData) {
    console.error('Post não encontrado para o documentId:', params.id);
    notFound();
  }

  console.log('PostData a ser renderizado:', JSON.stringify(postData, null, 2));

  const allPosts = await getBlogPosts();
  console.log('Posts recentes (allPosts) para sidebar:', JSON.stringify(allPosts, null, 2));

  return (
    <>
      <header id="header-sticky" className="header-6">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main d-flex justify-content-between align-items-center">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="/assets/img/logo/black-logo.svg" alt="logo-img" className="logo-2" />
                </Link>
              </div>
              
              <div className="header-right">
               
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="page-banner bg-cover" style={{ backgroundImage: '/assets/img/logo/black-logo.svg' }}>
        <div className="container">
          <div className="page-banner-content text-center">
            <h2>{postData.title}</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/blog">Blog</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{postData.title}</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

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
                  <div className="post-meta mb-3">
                    <span className="date">{postData.date}</span>
                    {postData.author && <span className="author ms-3">Por {postData.author}</span>}
                  </div>

                  {/* Conteúdo */}
                  <h1 className="card-title h2">{postData.title}</h1>
                  {/* Renderiza o conteúdo como múltiplos parágrafos com espaçamento */}
                  {postData.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="card-text blog-paragraph">
                      {paragraph.trim()}
                    </p>
                  ))}

                  {/* Botão de Voltar */}
                  <div className="mt-4 d-flex gap-3">
                    <Link href="/" className="theme-btn">
                      <i className="fas fa-home me-2"></i> Voltar para Home
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
                        <Link 
                          href={`/blog/${post.documentId || post.id}`}
                          className="d-flex align-items-center text-decoration-none w-100"
                        >
                          <img
                            src={post.image}
                            alt={post.title}
                            className="img-thumbnail me-3"
                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                          />
                          <div>
                            <h6 className="mb-1 text-dark">{post.title}</h6>
                            <small className="text-muted">{post.date}</small>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer footer={4} />
    </>
  );
}