import Pricing from "@/components/bakPricing";
import Faq from "@/components/Faq";
import Services from "@/components/Services";
import {
  TestimonialSlider4,
  TestimonialSlider5,
} from "@/components/TestimonialSlider";
import WorkingProcess from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout header={1} footer={4} single>
      {/* Hero Section Start */}
      <section
        className="hero-section hero-1 bg-cover fix"
        style={{ backgroundImage: 'url("assets/img/hero/01.jpg")' }}
      >
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <div className="hero-content">
              <span className="sub-content wow fadeInUp" data-wow-delay=".2s">
                  <img src="assets/img/bale.png" alt="img" />
                  25+ Anos de Experiência
              </span>
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                O Marketing Digital <br />
                  Perfeito para<br /> Crescer sua Empresa <br /> 
                </h1>
                <div className="hero-button">
                  <Link
                    href="/"
                    className="theme-btn hover-white wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    Fale Conosco Agora <i className="far fa-arrow-right" />
                  </Link>
                  <Link
                    href="service"
                    className="btn-link wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    Ver Serviços <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="hero-client d-flex align-items-center gap-4 mt-50 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <img src="assets/img/hero/client.png" alt="img" />
                  <p className="text-white">
                    Confiança de 1K+ empresas <br />
                    atendidas
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="hero-contact-box">
                <h4>Faça um Diagnóstico Gratuito</h4>
                <p></p>
                <form
                  action="#"
                  id="contact-form"
                  method="POST"
                  className="contact-form-item"
                >
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Seu Nome"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Telefone"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="payment-save">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="save-for-next"
                          id="saveForNext"
                        />
                        <p>
                          Li e concordo com{" "}
                          <Link href="/">Termos &amp; Condições</Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="theme-btn">
                        Agende Agora <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> 
      {/* Brand Section Start */}
      {/* About Section Start */}
      <section className="about-section fix section-padding" id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="digital-about-image">
                  <img
                    src="assets/img/about/digittal-about-img.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      Quem Somos
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Experiência de +20 Anos em Gestão Empresarial & Data Science
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Nossa experiência no mercado corporativo nos permite desenvolver estratégias digitais personalizadas, unindo:
                  </p>
                  <ul
                    className="about-list style-2 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li>
                      <i className="fas fa-check-circle" />
                      Marketing Estratégico &amp; Copywriting para SEO
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Automação e Análise de Dados com Data Science
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Tráfego Qualificado e Conversões Reais 
                    </li>
                  </ul>
                  <div
                    className="about-button wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Link href="about" className="theme-btn bg-2">
                      Saiba mais sobre a Bolt 360 Assessoria
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cta Video Section Start */}
      <div
        className="cta-video-section fix bg-cover"
        style={{ backgroundImage: 'url("assets/img/cta/cta-video.jpg")' }}
      >
        <div className="container">
          <div className="cta-video-wrapper">
            <div className="video-box">
              <a
                href="https://www.youtube.com/watch?v=_oQ7AfVWm_o"
                className="video-buttton ripple video-popup"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">Marketing</span>
                <span className="text-slider">Consultoria </span>
                <span className="text-slider style-border" />
                <span className="text-slider">SEO</span>
                <span className="text-slider">Data </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IA</span>
                <span className="text-slider">Science </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Desenvolvimento</span>
                <span className="text-slider">Marketing</span>
                <span className="text-slider">Consultoria </span>
                <span className="text-slider style-border" />
                <span className="text-slider">SEO</span>
                <span className="text-slider">Data </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IA</span>
                <span className="text-slider">Science </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Desenvolvimento</span>
                <span className="text-slider">Marketing</span>
                <span className="text-slider">Consultoria </span>
                <span className="text-slider style-border" />
                <span className="text-slider">SEO</span>
                <span className="text-slider">Data </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IA</span>
                <span className="text-slider">Science </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Desenvolvimento</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Services />
      {/* Working Process Section Start */}
      <WorkingProcess />
      {/* Testimonial Section Start */}
      <section
        className="testimonial-section-4 fix section-padding"
        id="testimonial"
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Clientes Atendidos
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              1250+ Clientes Satisfeitos Dizem Sobre Nós
            </h2>
          </div>
        </div>

        <TestimonialSlider4 />
        <TestimonialSlider5 />
      </section>
      {/* Faq Section Start */}
      <Faq />
      {/* Pricing Section Start */}
      <Pricing />
      {/* News Section Start */}
      <section className="news-section section-padding pt-0" id="blog">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              News &amp; Blog
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore nossas última notícias &amp; Blog
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="news-card-items style-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/07.jpg")' }}
                />
                <div className="news-content">
                  <p>Novembro 25, 2024</p>
                  <h4>
                    <Link href="news-details">
                      O impacto do IA no ranqueamento de Sites
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    Ler Mais
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="news-card-items style-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/08.jpg")' }}
                />
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="news-details">
                      Como a velocidade de seu site impacta no comportamento do seu consumidor
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    Ler Mais
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="news-card-items style-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/09.jpg")' }}
                />
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="news-details">
                      Tecnologias Revolucionárias para 2025
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    Ler Mais
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section Start */}
      <section className="contact-section fix section-padding pt-0 fix">
        <div className="pattern-shape">
          <img src="assets/img/box-pattern.png" alt="radius-shape" />
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-lg-1" />
            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-image">
                <img src="assets/img/contact.jpg" alt="img" />
                <div className="circle-musk-shape float-bob-x">
                  <img src="assets/img/hero/circle-musk.png" alt="shape-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-content wow fadeInUp">
                  <img src="assets/img/bale.png" alt="img" />
                  Fale Conosco
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Pronto para impulsionar seu  <br />
                  marketing e resultados ?
                </h2>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
              A Bolt Agency usa SEO, copywriting e automação <br /> para aumentar sua visibilidade e conversões no digital.
              </p>
              <Link
                href="contact"
                className="theme-btn mt-4 wow fadeInUp"
                data-wow-delay=".3s"
              >
                Faça um Diagnóstico Gratuito
                <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
