"use client"
import { useState } from 'react';

const Faq = () => {
  const [activeItem, setActiveItem] = useState('faq2'); // Define a segunda pergunta como aberta por padrão

  const toggleAccordion = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const faqItems = [
    {
      id: 'faq1',
      question: 'Qual a Proposta de Valor da Bolt Agency?',
      answer: 'A Bolt Agency cria estratégias digitais completas para empresas, incluindo desenvolvimento de sites e landing pages otimizadas para SEO, planejamento de marketing, gestão de redes sociais, copywriting estratégico e automação de funis de vendas. Nosso objetivo é ajudar seu negócio a crescer no digital com mais tráfego, conversões e autoridade online.'
    },
    {
      id: 'faq2',
      question: 'Qual a diferença entre um site comum e um site otimizado para SEO?',
      answer: 'Um site comum pode ter um bom design, mas sem otimização SEO, ele dificilmente aparecerá no Google. Nossos sites são criados com técnicas avançadas de SEO, copywriting estratégico e estrutura ideal para ranqueamento, garantindo mais visibilidade e clientes para sua empresa.'
    },
    {
      id: 'faq3',
      question: 'Como funciona o serviço de gestão de redes sociais?',
      answer: 'Gerenciamos suas redes sociais com postagens estratégicas, criação de conteúdos alinhados ao seu público, engajamento e análise de desempenho. Nossa abordagem inclui planejamento de linha editorial, criação de artes e copywriting persuasivo para fortalecer a presença digital da sua marca.'
    },
    {
      id: 'faq4',
      question: 'Como a Bolt Agency pode ajudar minha empresa a vender mais?',
      answer: 'Através de um conjunto de estratégias, incluindo sites rápidos e otimizados, funis de vendas automatizados, SEO eficiente e conteúdos persuasivos, direcionamos tráfego qualificado para seu negócio, aumentando suas conversões e fortalecendo seu posicionamento digital.'
    },
    {
      id: 'faq5',
      question: 'Quanto tempo leva para ver os resultados das estratégias da Bolt Agency?',
      answer: 'Os resultados variam conforme a estratégia adotada. SEO e tráfego orgânico costumam gerar retornos consistentes em 3 a 6 meses, enquanto gestão de redes sociais e funis de vendas podem apresentar impacto nas primeiras semanas. Nosso foco é garantir um crescimento sólido e sustentável para sua empresa.'
    }
  ];

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
                  {faqItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="accordion-item wow fadeInUp"
                      data-wow-delay={`.${index + 3}s`}
                    >
                      <h4 className="accordion-header">
                        <button
                          className={`accordion-button ${activeItem === item.id ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => toggleAccordion(item.id)}
                          aria-expanded={activeItem === item.id}
                          aria-controls={item.id}
                        >
                          {item.question}
                        </button>
                      </h4>
                      <div
                        id={item.id}
                        className={`accordion-collapse collapse ${activeItem === item.id ? 'show' : ''}`}
                      >
                        <div className="accordion-body">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  ))}
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