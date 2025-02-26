import Link from "next/link";
import NextLayout from "@/layouts/NextLayout";

const Team = () => {
  return (
    <NextLayout header={6} footer={3} single>
      <section className="team-section fix footer-bg section-padding" id="team">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Time Bolt Agency
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Conheça nosso profissionais
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="team-card-items">
                <div className="team-image">
                  <img src="assets/img/imagens/3(2).png" alt="team-img"
                  style={{ borderRadius: '10px' }} />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Vitor Maximo</Link>
                  </h4>
                  <p>Desenvolvedor</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="team-card-items">
                <div className="team-image">
                  <img src="assets/img/imagens/1(4).png" alt="team-img"
                  style={{ borderRadius: '10px' }} />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Luana </Link>
                  </h4>
                  <p>Chefe de BPO
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="team-card-items">
                <div className="team-image">
                  <img src="assets/img/imagens/2(4).png" alt="team-img" 
                  style={{ borderRadius: '10px' }}/>
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Lucas Zerino</Link>
                  </h4>
                  <p>Tech Leader</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="team-card-items">
                <div className="team-image">
                  <img src="assets/img/imagens/4(1).png" alt="team-img" 
                  style={{ borderRadius: '10px' }}/>
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Matheus Freitas</Link>
                  </h4>
                  <p>Estagiário </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section section-padding pt-0 footer-bg">
        <div className="container">
          <div className="text-center">
            <Link href="/" className="theme-btn">
              <i className="fas fa-home me-2"></i> Voltar para Home
            </Link>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default Team;
