import Link from "next/link";

const Pricing = () => {
  return (
    <section className="pricing-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Planos
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Plenamente Adequados ao seu Cenário Empresarial
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Essencial</h3>
                <p>Para pequenas Empresas</p>
              </div>
              <ul className="pricing-list">
                <li>IT Consulting</li>
                <li>Digital Product Design</li>
                <li>Machine Learning</li>
                <li className="style-2">Automation templates</li>
                <li className="style-2">Great Customer Support</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  R$00 <span>/mensal</span>
                </h2>
                <p>Para Pequenas e Médias Empresas</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  Escolher Plano
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="pricing-card-items active">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape-2.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Profissional</h3>
                <p>Para Pequenas e Médias Empresas</p>
              </div>
              <ul className="pricing-list">
                <li>IT Consulting</li>
                <li>Digital Product Design</li>
                <li>Machine Learning</li>
                <li>Automation templates</li>
                <li>Great Customer Support</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  R$00 <span>/mensal</span>
                </h2>
                <p>Para Pequenas e Médias Empresas</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  Escolher Plano
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Premium</h3>
                <p>Para Pequenas e Médias Empresas</p>
              </div>
              <ul className="pricing-list">
                <li>IT Consulting</li>
                <li>Digital Product Design</li>
                <li>Machine Learning</li>
                <li className="style-2">Automation templates</li>
                <li className="style-2">Great Customer Support</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  R$00 <span>/mensal</span>
                </h2>
                <p>Para Médias e Grandes Empresas</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  Escolher Plano
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;

export const Pricing2 = ({
  priceingClass = "pricing-section-3",
  paddingTop = "0",
}) => {
  return (
    <section
      className={`fix section-padding pt-${paddingTop} ${priceingClass}`}
      id="pricing"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sec-sub-text-2 wow fadeInUp">Pricing Package</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            We Offer Amazing Pricing Package <br />
            keep Under Budget
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="pricing-card-items-2">
              <div className="pricing-header">
                <h3>Regular Plan</h3>
                <p>
                  Sed ut perspiciatis unde omnis istewse natus sit voluptatem
                  accusa
                </p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn bg-header">
                  Choose Package
                </Link>
              </div>
              <div className="price-items">
                <h2>
                  <sub>$</sub>12 <span>/month</span>
                </h2>
                <div className="discount">
                  <h6>
                    23% <br />
                    OFF
                  </h6>
                </div>
                <div className="arrow-img">
                  <img src="assets/img/arrow.png" alt="img" />
                </div>
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  Blog &amp; Article Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  eCommerce Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  Social Media Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  Content Writing
                </li>
                <li>
                  <i className="far fa-check" />
                  Ad Providing
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="pricing-card-items-2 active">
              <div className="pricing-header">
                <h3>Standard Plan</h3>
                <p>
                  Sed ut perspiciatis unde omnis istewse natus sit voluptatem
                  accusa
                </p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn bg-header">
                  Choose Package
                </Link>
              </div>
              <div className="price-items">
                <h2>
                  <sub>$</sub>45<span>/month</span>
                </h2>
                <div className="discount">
                  <h6>
                    23% <br />
                    OFF
                  </h6>
                </div>
                <div className="arrow-img">
                  <img src="assets/img/arrow-2.png" alt="img" />
                </div>
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  Blog &amp; Article Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  eCommerce Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  Social Media Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  Content Writing
                </li>
                <li>
                  <i className="far fa-check" />
                  Ad Providing
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="pricing-card-items-2">
              <div className="pricing-header">
                <h3>Premium Plan</h3>
                <p>
                  Sed ut perspiciatis unde omnis istewse natus sit voluptatem
                  accusa
                </p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn bg-header">
                  Choose Package
                </Link>
              </div>
              <div className="price-items">
                <h2>
                  <sub>$</sub>98<span>/month</span>
                </h2>
                <div className="discount">
                  <h6>
                    23% <br />
                    OFF
                  </h6>
                </div>
                <div className="arrow-img">
                  <img src="assets/img/arrow.png" alt="img" />
                </div>
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  Blog &amp; Article Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  eCommerce Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  Social Media Copy
                </li>
                <li>
                  <i className="far fa-check" />
                  Content Writing
                </li>
                <li>
                  <i className="far fa-check" />
                  Ad Providing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
