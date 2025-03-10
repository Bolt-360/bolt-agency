const WorkingProcess = () => {
  return (
    <section className="working-section-2 section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Etapas de Trabalho
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Fazemos nosso trabalho seguindo <br />
            Alguns Simples Passos
          </h2>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
            <div className="working-card-items">
              <div className="icon">
                <img src="assets/img/imagens/1.png" alt="img"
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="content">
                <span className="sub-title">Passo 01</span>
                <h3>Diagnóstico &amp; Planejamento</h3>
                <p>
                Entendemos as necessidades do seu negócio  <br />{" "}
                e definimos os objetivos do site.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
          </div>
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".5s">
            <div className="working-card-items">
              <div className="content">
                <span className="sub-title">Passo 02</span>
                <h3>Design e Desenvolvimento</h3>
                <p>
                Criamos o layout e desenvolvemos o site <br />{" "}
                com foco em usabilidade e conversão.
                </p>
              </div>
              <div className="icon">
                <img src="assets/img/imagens/3.png" alt="img"
                style={{ borderRadius: '10px' }} />
              </div>
            </div>
          </div>
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
            <div className="working-card-items">
              <div className="icon">
                <img src="assets/img/imagens/2.png" alt="img"
                style={{ borderRadius: '10px' }} />
              </div>
              <div className="content">
                <span className="sub-title">Passo 03</span>
                <h3>Execução &amp; Estratégica</h3>
                <p>
                  Criamos um copywriting exclusivo e pensado <br />{" "}
                  para a captação e conversão de clientes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
          </div>
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".5s">
            <div className="working-card-items">
              <div className="content">
                <span className="sub-title">Passo 04</span>
                <h3>Otimização: 3x + Resultados</h3>
                <p>
                  Otimizamos o site para garantir carregamento rápido, <br />{" "}
                  SEO e uma experiência impecável para o usuário.
                </p>
              </div>
              <div className="icon">
                <img src="assets/img/imagens/4.png" alt="img" 
                style={{ borderRadius: '10px' }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkingProcess;

export const WorkingProcess2 = () => {
  return (
    <section className="working-process-section section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Working Process
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            We Complete Our Work to Follow <br />
            Some Easy Ways
          </h2>
        </div>
        <div className="work-process-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="work-process-content">
                <div
                  className="work-process-items wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="digit-box">01</div>
                  <h4>Market Research</h4>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae
                  </p>
                </div>
                <div
                  className="work-process-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="digit-box">02</div>
                  <h4>Process and Analysis</h4>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae
                  </p>
                </div>
                <div
                  className="work-process-items wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="digit-box">03</div>
                  <h4>Successful Project</h4>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="work-process-image wow fadeInUp"
                data-wow-delay=".4s"
              >
                <img src="assets/img/business-mens-grsl.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
