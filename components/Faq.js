const Faq = () => {
  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            FAQ
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Questões Frequentes
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-content">
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                        aria-expanded="false"
                        aria-controls="faq1"
                      >
                        Qual a Proposta de Valor da Bolt Agency?
                      </button>
                    </h4>
                    <div
                      id="faq1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                      A Bolt Agency cria estratégias digitais completas para empresas, incluindo desenvolvimento de sites e landing pages otimizadas para SEO, planejamento de marketing, gestão de redes sociais, copywriting estratégico e automação de funis de vendas. Nosso objetivo é ajudar seu negócio a crescer no digital com mais tráfego, conversões e autoridade online.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                        aria-expanded="true"
                        aria-controls="faq2"
                      >
                        2. Qual a diferença entre um site comum e um site otimizado para SEO?
                      </button>
                    </h4>
                    <div
                      id="faq2"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                      Um site comum pode ter um bom design, mas sem otimização SEO, ele dificilmente aparecerá no Google. Nossos sites são criados com técnicas avançadas de SEO, copywriting estratégico e estrutura ideal para ranqueamento, garantindo mais visibilidade e clientes para sua empresa.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                        aria-expanded="false"
                        aria-controls="faq3"
                      >
                        Como funciona o serviço de gestão de redes sociais?
                      </button>
                    </h4>
                    <div
                      id="faq3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                      Gerenciamos suas redes sociais com postagens estratégicas, criação de conteúdos alinhados ao seu público, engajamento e análise de desempenho. Nossa abordagem inclui planejamento de linha editorial, criação de artes e copywriting persuasivo para fortalecer a presença digital da sua marca.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                        aria-expanded="false"
                        aria-controls="faq4"
                      >
                        Como a Bolt Agency pode ajudar minha empresa a vender mais?
                      </button>
                    </h4>
                    <div
                      id="faq4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                      Através de um conjunto de estratégias, incluindo sites rápidos e otimizados, funis de vendas automatizados, SEO eficiente e conteúdos persuasivos, direcionamos tráfego qualificado para seu negócio, aumentando suas conversões e fortalecendo seu posicionamento digital.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq5"
                        aria-expanded="false"
                        aria-controls="faq5"
                      >
                        Quanto tempo leva para ver os resultados das estratégias da Bolt Agency?
                      </button>
                    </h4>
                    <div
                      id="faq5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                      Os resultados variam conforme a estratégia adotada. SEO e tráfego orgânico costumam gerar retornos consistentes em 3 a 6 meses, enquanto gestão de redes sociais e funis de vendas podem apresentar impacto nas primeiras semanas. Nosso foco é garantir um crescimento sólido e sustentável para sua empresa.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
