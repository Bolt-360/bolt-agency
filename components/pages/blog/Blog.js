// components/blog/Blog.js (Client Component)
"use client";

import { getBlogPosts } from "@/data/posts";
import Link from "next/link";
import { useState, useEffect } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getBlogPosts();
        console.log("Posts carregados no componente:", data);
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading || error || !posts.length) {
    return null;
  }

  return (
    <section className="news-section section-padding pt-0" id="blog">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            News & Blog
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Explore nossas últimas notícias & Blog
          </h2>
        </div>
        <div className="row">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`.${(index + 3) * 2}s`}
            >
              <div className="news-card-items style-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: `url("${post.image}")` }}
                />
                <div className="news-content">
                  <p>{post.date}</p>
                  <h4>
                    <Link href={`/blog/${post.documentId || post.id}`}>
                      {post.title}
                    </Link>
                  </h4>
                  <Link
                    className="link-btn"
                    href={`/blog/${post.documentId || post.id}`}
                  >
                    Ler Mais <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
