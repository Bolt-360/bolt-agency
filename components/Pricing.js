import Link from "next/link";

const Pricing = () => {
  const plans = [
    {
      name: "Essencial",
      description: "Para pequenas empresas",
      setupCost: "Setup",
      monthlyCost: "R$790,",
      features: [
        "✔️ 5 páginas otimizadas",
        "✔️ Básico Copywriting Estratégico",
        "✔️ Inicial SEO On-Page e Técnica",
        "❌ Gestão de Redes Sociais",
        "✔️ Simples Planejamento de Marketing e Linha Editorial",
        "❌ Blog com SEO e Copywriting",
        "❌ Funis de Vendas Automatizados",
        "✔️ Simples Relatórios e Melhorias Contínuas",
      ],
      delay: ".3s",
    },
    {
      name: "Profissional",
      description: "Para pequenas e médias empresas",
      setupCost: "Setup",
      monthlyCost: "R$1.290,",
      features: [
        "✔️ 10 páginas + SEO avançado",
        "✔️ Profissional Copywriting Estratégico",
        "✔️ Avançado SEO On-Page e Técnica",
        "✔️ 2 redes sociais Gestão de Redes Sociais",
        "✔️ Avançado Planejamento de Marketing e Linha Editorial",
        "✔️ 4 artigos/mês Blog com SEO e Copywriting",
        "✔️ Básico Funis de Vendas Automatizados",
        "✔️ Mensais Relatórios e Melhorias Contínuas",
      ],
      delay: ".5s",
    },
    {
      name: "Premium",
      description: "Para médias e grandes empresas",
      setupCost: "Setup",
      monthlyCost: "R$1.990,",
      features: [
        "✔️ 15+ páginas + estratégia completa",
        "✔️ Premium e persuasivo Copywriting Estratégico",
        "✔️ Full SEO otimizado SEO On-Page e Técnica",
        "✔️ 3 redes sociais Gestão de Redes Sociais",
        "✔️ Completo e personalizado Planejamento de Marketing e Linha Editorial",
        "✔️ 8 artigos/mês Blog com SEO e Copywriting",
        "✔️ Completo Funis de Vendas Automatizados",
        "✔️ Semanais e estratégicos Relatórios e Melhorias Contínuas",
      ],
      delay: ".7s",
    },
  ];

  return (
    <section className="pricing-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" /> Planos
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Plenamente Adequados ao seu Cenário Empresarial
          </h2>
        </div>
        <div className="row">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp ${
                index === 1 ? "active" : ""
              }`}
              data-wow-delay={plan.delay}
            >
              <div className="pricing-card-items">
                <div className="pricing-shape">
                  <img
                    src={`assets/img/pricing-shape${index === 1 ? "-2" : ""}.png`}
                    alt="shape-img"
                  />
                </div>
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                </div>
                <ul className="pricing-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="pricing-bottom">
                  <h2>
                    {plan.setupCost} + {plan.monthlyCost} <span>/mensal</span>
                  </h2>
                </div>
                <div className="pricing-button">
                  <Link href="contact" className="theme-btn style-transparent">
                    Escolher Plano
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
