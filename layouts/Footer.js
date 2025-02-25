import Link from "next/link";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;

    case 2:
      return <Footer2 />;

    case 3:
      return <Footer3 />;

    case 4:
      return <Footer4 />;

    case 6:
      return <Footer6 />;

    default:
      return <Footer1 />;
  }
};
export default Footer;

const Footer1 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="discussed-items">
          <div className="footer-logo wow fadeInUp" data-wow-delay=".3s">
            <Link href="/">
              <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
            </Link>
          </div>
          <div className="discussed-content wow fadeInUp" data-wow-delay=".5s">
            <h2>
            Vamos falar sobre <span>Seus Projetos</span>
            </h2>
            <Link href="contact" className="theme-btn hover-white">
              Começe já <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Sobre nós</h4>
                </div>
                <div className="footer-content">
                  <p>
                    Bolt 360 Assessoria
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Links Rápidos</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="servicos">Serviços</Link>
                  </li>
                  <li>
                    <Link href="team-details">Time</Link>
                  </li>
                  <li>
                    <Link href="contact">Privacidade</Link>
                  </li>
                  <li>
                    <Link href="pricing">Planos</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-1 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Fale Conosco</h4>
                </div>
                <div className="contact-info-area">
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        Lagoa Nova, Natal/RN <br />
                        Brasil
                      </p>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:contato@bolt360.com.br" className="link">
                        contato@bolt360.com.br
                      </a>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:00012345688">+55 (84) 3190-1700</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Notícias Recentes</h4>
                </div>
                <div className="recent-post-area">
                  <div className="recent-post-items">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage: 'url("/assets/img/news/pp1.png")',
                      }}
                    />
                    <div className="content">
                      <ul className="post-date">
                        <li>Fev 24, 2025</li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          Como alcançar mais <br /> seu nove a cinco
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-items mb-0">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage: 'url("/assets/img/news/pp2.png")',
                      }}
                    />
                    <div className="content">
                      <ul className="post-date">
                        <li>Fev 24, 2025</li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          Descubra uma melhor forma de empresa.
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
              <ul className="footer-menu wow fadeInUp" data-wow-delay=".2s">
                <li>
                  <Link href="faq">FAQs</Link>
                </li>
                <li>
                  <Link href="about">Empresa</Link>
                </li>
                <li>
                  <Link href="contact">Privacidade</Link>
                </li>
              </ul>
              <a
                href="#"
                id="scrollUp"
                className="scroll-icon wow fadeInUp"
                data-wow-delay=".4s"
              >
                <i className="far fa-angle-double-up" />
              </a>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                © <Link href="/">2025</Link> Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                  Sites & Marketing Estratégico de Alta Performance. Conquiste mais clientes e mais vendas.
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="https://www.facebook.com/bolt360assessoria">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://www.instagram.com/bolt360assessoria">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 ps-xxl-5 ml-30 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Quick Link</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="servicos">Popular Services</Link>
                  </li>
                  <li>
                    <Link href="team-details">Team Member</Link>
                  </li>
                  <li>
                    <Link href="contact">Privacy &amp; Setting</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Package</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 ml-minus-30 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Fale In Touch</h4>
                </div>
                <div className="contact-info-area">
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        55 Main Street, 2nd block <br />
                        Malborne, Australia
                      </p>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:info@example.com" className="link">
                        info@example.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:00012345688">+000 (123) 456 88</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Support</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="servicos">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="contact">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Product</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="servicos">Web Template Design</Link>
                  </li>
                  <li>
                    <Link href="servicos">Mobile Application</Link>
                  </li>
                  <li>
                    <Link href="servicos">3D Illustration</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between pb-0">
            <ul className="footer-menu">
              <li>
                <Link href="faq">FAQs</Link>
              </li>
              <li>
                <Link href="about">Empresa</Link>
              </li>
              <li>
                <Link href="contact">Privacidade</Link>
              </li>
            </ul>
            <a href="#" id="scrollUp" className="scroll-icon">
              <i className="far fa-angle-double-up" />
            </a>
            <p>
              © <Link href="/">2024</Link> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer3 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Sites & Marketing Estratégico de Alta Performance. Conquiste mais clientes e mais vendas.
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="https://www.facebook.com/bolt360assessoria">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://www.instagram.com/bolt360assessoria">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCO0kuOEycYARRnNfkqUdLPA">
                      <i className="fab fa-youtube" />
                    </a>
                    <a href="https://br.linkedin.com/company/bolt-360">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Links Rápidos</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="servicos">Serviços</Link>
                  </li>
                  <li>
                    <Link href="team-details">Time Bolt</Link>
                  </li>
                  <li>
                    <Link href="pricing">Planos</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Fale Conosco</h4>
                </div>
                <div className="contact-info-area">
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        Rua Tereza Bezerra Salustino, 1902<br />
                        Lagoa Nova, Natal/RN, Brasil
                      </p>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:contato@bolt360.com.br" className="link">
                        contato@bolt360.com.br
                      </a>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://api.whatsapp.com/send/?phone=558431901700&text=Olá%21+vim+pelo+site+da+Bolt+Agency" target="_blank" rel="noopener noreferrer">+55 (84) 31901700</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-2 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Newsletter</h4>
                </div>
                <div className="footer-content">
                  <p>Receba noticias sobre soluções Bolt 360</p>
                  <div className="footer-input">
                    <input type="email" id="email" placeholder="Digite seu Email" />
                    <button className="newsletter-btn" type="submit">
                      <i className="far fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between pb-0">
            <ul className="footer-menu">
              <li>
                <Link href="faq">FAQs</Link>
              </li>
              <li>
                <Link href="about">Empresa</Link>
              </li>
              <li>
                <Link href="contact">Privacidade</Link>
              </li>
            </ul>
            <a href="#" id="scrollUp" className="scroll-icon">
              <i className="far fa-angle-double-up" />
            </a>
            <p>
              © <Link href="/">2024</Link> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer4 = () => {
  return (
    <footer className="footer-section footer-bg fix">
      <div className="color-shape">
        <img src="/assets/img/footer-color-shape.png" alt="shape-img" />
      </div>
      <div className="color-shape-2">
        <img src="/assets/img/footer-color-shape-2.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Sites & Marketing Estratégico de Alta Performance. Conquiste mais clientes e mais vendas.
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="https://www.facebook.com/bolt360assessoria" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://www.instagram.com/bolt360assessoria" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCO0kuOEycYARRnNfkqUdLPA" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube" />
                    </a>
                    <a href="https://br.linkedin.com/company/bolt-360" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Links</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="#services">Serviços</Link>
                  </li>
                  <li>
                    <Link href="/team">Time Bolt</Link>
                  </li>
                  <li>
                    <Link href="pricing">Planos</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Fale Conosco</h4>
                </div>
                <div className="contact-info-area">
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        Rua Tereza Bezerra Salustino, 1902<br />
                        Lagoa Nova, Natal/RN, Brasil
                      </p>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:info@example.com" className="link">
                        contato@bolt360.com.br
                      </a>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://api.whatsapp.com/send/?phone=558431901700&text=Olá%21+vim+pelo+site+da+Bolt+Agency" target="_blank" rel="noopener noreferrer">+55 (84) 31901700</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-2 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                <h4>Newsletter</h4>
                </div>
                <div className="footer-content">
                  <p>Receba noticias sobre soluções Bolt 360</p>
                  <div className="footer-input">
                    <input type="email" id="email" placeholder="Digite seu Email" />
                    <button className="newsletter-btn" type="submit">
                      <i className="far fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between pb-0">
            <ul className="footer-menu">
              <li>
                <Link href="faq">FAQs</Link>
              </li>
              <li>
                <Link href="about">Quem Somos</Link>
              </li>
              <li>
                <Link href="contact">Privacidade</Link>
              </li>
            </ul>
            <a href="#" id="scrollUp" className="scroll-icon">
              <i className="far fa-angle-double-up" />
            </a>
            <p>
              © <Link href="/">2025</Link> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer6 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="robot-shape float-bob-y">
        <img src="/assets/img/home-6/robot-3.png" alt="shape-img" />
      </div>
      <div className="robot-shape-2 float-bob-y">
        <img src="/assets/img/home-6/robot-4.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="discussed-items">
          <div className="footer-logo wow fadeInUp" data-wow-delay=".3s">
            <Link href="/">
              <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
            </Link>
          </div>
          <div className="discussed-content wow fadeInUp" data-wow-delay=".5s">
            <h2>
              Vamos Discutir Sobre <span>Seus Projetos</span>
            </h2>
            <Link href="contact" className="theme-btn hover-white">
              Começar <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Quem Somos</h4>
                </div>
                <div className="footer-content">
                  <p>
                    Somos uma empresa de marketing digital que oferece soluções para impulsionar seu negócio.
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Links Rápidos</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="servicos">Serviços</Link>
                  </li>
                  <li>
                    <Link href="team-details">Time</Link>
                  </li>
                  <li>
                    <Link href="contact">Privacidade</Link>
                  </li>
                  <li>
                    <Link href="pricing">Planos</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-1 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Fale Conosco</h4>
                </div>
                <div className="contact-info-area">
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        Rua Tereza Bezerra Salustino, 1902<br />
                        Lagoa Nova, Natal/RN, Brasil
                      </p>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:contato@bolt360.com.br" className="link">
                        contato@bolt360.com.br
                      </a>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:00012345688">+55 (84) 31901700</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Notícias Recentes</h4>
                </div>
                <div className="recent-post-area">
                  <div className="recent-post-items">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage: 'url("/assets/img/news/pp1.png")',
                      }}
                    />
                    <div className="content">
                      <ul className="post-date">
                        <li>Nov 25, 2024</li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          Como alcançar mais <br /> seu nove a cinco
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-items mb-0">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage: 'url("/assets/img/news/pp2.png")',
                      }}
                    />
                    <div className="content">
                      <ul className="post-date">
                        <li>Nov 29, 2024</li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          Descubra uma melhor forma de empresa.
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
              <ul className="footer-menu wow fadeInUp" data-wow-delay=".2s">
                <li>
                  <Link href="faq">FAQs</Link>
                </li>
                <li>
                  <Link href="about">Quem Somos</Link>
                </li>
                <li>
                  <Link href="contact">Privacidade</Link>
                </li>
              </ul>
              <a
                href="#"
                id="scrollUp"
                className="scroll-icon wow fadeInUp"
                data-wow-delay=".4s"
              >
                <i className="far fa-angle-double-up" />
              </a>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                © <Link href="/">2024</Link> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
