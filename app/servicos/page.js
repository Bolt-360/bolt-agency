import NextLayout from '@/layouts/NextLayout';
import Link from 'next/link';

const services = [
  {
    title: 'Desenvolvimento de Sites e Landing Pages',
    icon: 'fas fa-laptop-code',
    description: [
      'Uso de tecnologias recentes para performance e segurança.',
      'Design moderno e intuitivo, alinhado à identidade visual da empresa.',
      'Otimização SEO-ready, garantindo melhor ranqueamento no Google.',
      'Copywriting persuasivo para conversão.'
    ]
  },
  {
    title: 'Planejamento de Marketing e Linha Editorial',
    icon: 'fas fa-bullhorn',
    description: [
      'Estratégia personalizada para atrair e engajar seu público.',
      'Criação de conteúdo relevante e alinhado ao posicionamento da marca.',
      'Definição de calendário editorial para blogs e redes sociais.'
    ]
  },
  {
    title: 'Gestão de Redes Sociais',
    icon: 'fas fa-share-alt',
    description: [
      'Criação de posts estratégicos com Copywriting envolvente.',
      'Análise de desempenho e ajustes para otimização.',
      'Planejamento de conteúdo visual e textual alinhado à marca.'
    ]
  },
  {
    title: 'Criação de Conteúdo com Copywriting e SEO',
    icon: 'fas fa-pen-nib',
    description: [
      'Pesquisa de palavras-chave para otimização.',
      'Utilização de frameworks de marketing para conversão.',
      'Produção de artigos otimizados para blogs.'
    ]
  },
  {
    title: 'Funis de Vendas com E-mail e WhatsApp Marketing',
    icon: 'fas fa-envelope-open-text',
    description: [
      'Automatização de mensagens para captação e conversão de leads.',
      'Sequências de e-mails e mensagens persuasivas.',
      'Estratégia alinhada com customer journey para aumento de conversão.'
    ]
  },
  {
    title: 'SEO para Posicionamento e Crescimento',
    icon: 'fas fa-envelope-open-text',
    description: [
      'Otimização técnica do site para melhor desempenho.',
      'Estratégia de SEO on-page e off-page.',
      'Análise de concorrência para identificação de oportunidades.'
    ]
  }
];

const ServicesPage = () => {
  return (
    <NextLayout header={1} footer={4} single>
    <section className="services-section py-5">
      <div className="container">
        {/* Título da Página */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nossos Serviços</h2>
          <p className="text-muted">Conheça as soluções que oferecemos para impulsionar seu negócio.</p>
        </div>

        {/* Lista de Serviços */}
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <i className={`${service.icon} fa-3x mb-3`} style={{ color: "#2596be" }}></i>
                  <h5 className="card-title">{service.title}</h5>
                  <ul className="list-unstyled text-muted">
                    {service.description.map((item, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check text-success me-2"></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão para Voltar */}
        {/* <div className="text-center mt-4">
          <Link href="/" className="theme-btn">
            <i className="fas fa-home"></i> Voltar para Home
          </Link>
        </div> */}
      </div>
    </section>
    </NextLayout>
  );
};

export default ServicesPage;
