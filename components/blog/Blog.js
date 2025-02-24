import Link from "next/link";
import { blogPosts } from "./posts";

const Blog = () => {
  return (
    <section className="news-section section-padding pt-0" id="blog">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            News &amp; Blog
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Exploque nossas última notícias &amp; Blog
          </h2>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp`}
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
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h4>
                  <Link className="link-btn" href={`/blog/${post.id}`}>
                    Ler Mais
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog;