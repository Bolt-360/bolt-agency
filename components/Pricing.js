import Link from "next/link";

const Pricing = () => {
  const plans = [
    {
      name: "Essencial",
      description: "Para pequenas empresas",
      setupCost: "Setup",
      monthlyCost: "R$790,00",
      features: [
        "✔️ 5 Páginas Otimizadas",
        "✔️ Copywriting Estratégico Básico",
        "✔️ SEO On-Page e Técnica Inicial",
        "❌ Gestão de Redes Sociais",
        "✔️ Planejamento de Marketing e Linha Editorial Simples",
        "❌ Blog com SEO e Copywriting",
        "❌ Funis de Vendas Automatizados",
        "✔️ Relatórios e Melhorias Contínuas Simples",
      ],
      delay: ".3s",
    },
    {
      name: "Profissional",
      description: "Para pequenas e médias empresas",
      setupCost: "Setup",
      monthlyCost: "R$1.290,00",
      features: [
        "✔️ 10 Páginas + SEO Avançado",
        "✔️ Copywriting Estratégico Profissional",
        "✔️ SEO On-Page e Técnica Avançado",
        "✔️ Gestão de Redes Sociais (2)",
        "✔️ Planejamento de Marketing e Linha Editorial Avançado",
        "✔️ Blog com SEO e Copywriting, 4 artigos/mês",
        "✔️ Funis de Vendas Automatizados Básico",
        "✔️ Relatórios e Melhorias Contínuas Mensais",
      ],
      delay: ".5s",
    },
    {
      name: "Premium",
      description: "Para médias e grandes empresas",
      setupCost: "Setup",
      monthlyCost: "R$1.990,00",
      features: [
        "✔️ 15+ Páginas + Estratégia Completa",
        "✔️ Copywriting Estratégico Premium e Persuasivo",
        "✔️ SEO Otimizado SEO On-Page e Técnica Full",
        "✔️ Gestão de Redes Sociais (3)",
        "✔️ Planejamento de Marketing e Linha Editorial Completo e Personalizado",
        "✔️ Blog com SEO e Copywriting, 8 artigos/mês",
        "✔️ Funis de Vendas Automatizados Completo",
        "✔️ Relatórios e Melhorias Contínuas Semanais e Estratégicos",
      ],
      delay: ".7s",
    },
  ];

  return (
    <section className="pricing-section section-padding" id="pricing">
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
                  <Link href={`https://api.whatsapp.com/send/?phone=558431901700&text=Ol%C3%A1%21+vim+pelo+site+da+Bolt+Agency+e+estou+interessado+no+plano+${plan.name}+e+gostaria+de+mais+informa%C3%A7%C3%B5es`} target="_blank" className="theme-btn style-transparent">
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
