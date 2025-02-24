import Link from "next/link";

const Services = () => {
  return (
    <section
      className="service-section-4 fix bg-cover section-padding"
      style={{
        backgroundImage: 'url("assets/img/service/service-bg-min.jpg")',
      }}
      id="services"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content bg-color-3 wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Serviços
          </span>
          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            🚀 Do Posicionamento ao Crescimento!
            <br />
          </h2>
          <h3 className="text-white wow fadeInUp" data-wow-delay=".3s"> Tudo o Que Sua Empresa Precisa para Vencer no Digital
          </h3>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-keywords" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Keywords</Link>
                </h3>
                <p>
                  Identificamos os termos ideais do seu público (palavras chave) e criamos a melhor estratégia para otimizar e posicionar seu site na pesquisa do Google,
                  usando elas em posts nas redes sociais, blog etc
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="service-box-items active">
              <div className="icon">
                <i className="flaticon-social-media" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Social Media Marketing</Link>
                </h3>
                <p>
                  Fortaleça sua marca e engaje seu público com posts otimizados e persuasivos,
                  copywriting envolvente e análise de desempenho.
                  Mais visibilidade e conexão com seu público-alvo.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-email-marketing" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Máquina de Vendas</Link>
                </h3>
                <p>
                  Automatize sua captação e conversão de clientes com funis de venda inteligentes. Sequências estratégicas de e-mails e WhatsApp, visando
                  engajar, nutrir e converter leads em clientes
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-copy-writing" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Criativos</Link>
                </h3>
                <p>
                  Produção de conteúdos persuasivos com copywriting, uso de palavras-chave e frameworks de marketing, otimizando seu posicionamento digital e aumentando conversões.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-software-development" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Sites e Landing Pages</Link>
                </h3>
                <p>
                  Criamos Sites e Landing Pages otimizados, com uso de novas tecnologias, estética moderna e
                  copywriting persuasivo, garantindo alto desempenho, SEO eficiente e máxima conversão
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-www" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">SEO</Link>
                </h3>
                <p>
                  Aplicação de estratégias avançadas de SEO, incluindo otimização técnica, conteúdo estratégico e pesquisa de palavras-chave,
                  para aumentar sua visibilidade, tráfego qualificado e conversões no Google.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;

export const Service2 = ({ paddingTop = 0, title = "Popular Services" }) => {
  return (
    <section
      className={`service-section section-padding pt-${paddingTop}`}
      id="services"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            {title}
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            We Provide Best Modern SEO <br />
            Service For Your Business
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="assets/img/service/08.png" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="service-details">Keyword Research</Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium
                </p>
                <Link href="service-details" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="assets/img/service/09.png" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="service-details">Content Writing</Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium
                </p>
                <Link href="service-details" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="assets/img/service/10.png" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="service-details">Site Optimizations</Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium
                </p>
                <Link href="service-details" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
