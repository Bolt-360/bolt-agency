"use client";

import React from 'react';
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const Terms = () => {
  return (
    <NextLayout header={5} footer={4} single>
      {/* Hero Section Start */}
      <section
        className="hero-section hero-1 bg-cover fix"
        style={{ backgroundImage: 'url("assets/img/hero/01.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <span className="sub-content wow fadeInUp" data-wow-delay=".2s">
                  <img src="assets/img/bale.png" alt="img" />
                  Termos e Condições
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  Termos e Condições
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="terms-content">
                <h3 className="mb-4">Bem-vindo ao Bolt 360</h3>
                <p>
                  Nós da Bolt 360 somos uma empresa dedicada a transformar negócios, reduzir custos, analisar riscos e aumentar o lucro dos nossos clientes. Estes Termos e Condições ("Termos") regem o uso de nossa landing page (https://bolt-agency-pi.vercel.app/) e dos serviços oferecidos por meio dela. Ao acessar ou utilizar nosso LP, você concorda com estes Termos. Caso não concorde, pedimos que não utilize o site.
                </p>

                <h3 className="mb-4 mt-5">1. Objetivo da Landing Page</h3>
                <p>
                  Nossa LP tem como objetivo principal captar informações de potenciais clientes específicos em nossos serviços de assessoria empresarial, incluindo a criação de sites. Atualmente, oferecemos um formulário para cadastro. No futuro, poderemos disponibilizar materiais gratuitos (como e-books) e diagnósticos gratuitos de sites, conforme descrito abaixo
                </p>

                <h3 className="mb-4 mt-5">2. Uso do Formulário</h3>
                <ul className="about-list style-2 mt-3">
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Cadastro :</span> Ao preencher o formulário, você fornece dados como nome da empresa, site, telefone, e-mail e número de colaboradores. Esses dados serão usados ​​para entrar em contato com você e oferecer nossos serviços, conforme detalhado em nossa Política de Privacidade
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Elegibilidade :</span> O formulário é destinado a maiores de 18 anos ou representantes legais de empresas. Não coletamos intencionalmente dados de menores.

                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Veracidade :</span> Você é responsável por fornecer informações corretas e atualizadas. Não nos responsabilizamos por dados incorretos ou incompletos
                  </li>
                </ul>

                <h3 className="mb-4 mt-5">3. Materiais Gratuitos (Futuro)</h3>
                <ul className="about-list style-2 mt-3">
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Disponibilização :</span> Caso venhamos a oferecer e-books ou outros materiais gratuitos, eles serão disponibilizados para download mediante preenchimento do formulário.
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Uso Permitido :</span> Os materiais são para uso pessoal e não comercial. Você não pode copiar, distribuir, vender ou modificar esses conteúdos sem nossa autorização expressa.
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Propriedade :</span> Todos os materiais permanecem sob propriedade intelectual da Bolt 360, protegidos pela Lei de Direitos Autorais (Lei nº 9.610/1998).
                  </li>
                </ul>
                <h3 className="mb-4 mt-5">4. Diagnóstico Gratuito de Sites (Futuro)</h3>
                <ul className="about-list style-2 mt-3">
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Serviço :</span> Poderemos oferecer um diagnóstico gratuito do site de sua empresa como parte de nossa estratégia de captação. Para isso, solicitaremos a URL do site e, opcionalmente, outros dados relevantes via formulário.
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Limitações :</span> O diagnóstico é uma análise preliminar e não substitui uma consultoria completa. Os resultados serão entregues por e-mail ou outro meio informado, sem garantia de solução imediata de problemas identificados.
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Uso de Dados :</span> As informações fornecidas serão tratadas de acordo com nossa Política de Privacidade e não serão compartilhadas com terceiros sem seu consentimento.
                  </li>
                </ul>

                <h3 className="mb-4 mt-5">5. Regras de Uso</h3>
                <ul className="about-list style-2 mt-3">
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Permitido :</span> Usar o LP para os fins descritos (cadastro, download de materiais, solicitação de diagnóstico).
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Proibido :</span>
                    <ul>

                      <li> <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '5px', marginLeft: '25px' }} /> Tentar acessar áreas restritas do site ou interferir em seu funcionamento (ex.: ataques cibernéticos)</li>
                      <li> <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '5px', marginLeft: '25px' }} /> Usar um LP para fins ilegais ou contrários a estes Termos</li>
                      <li> <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '5px', marginLeft: '25px' }} /> Fornecer informações falsas ou de terceiros sem consentimento</li>
                    </ul>
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Suspensão :</span> Reservamo-nos o direito de bloquear o acesso de usuários que violarem estas regras, sem aviso prévio.
                  </li>
                </ul>

                <h3 className="mb-4 mt-5">6. Propriedade Intelectual</h3>
                <p>
                  Todo o conteúdo do LP (textos, logotipos, design) é propriedade da Bolt 360 ou licenciado para nosso uso. Você não pode reproduzir, distribuir ou usar esse conteúdo sem nossa permissão por escrito, exceto conforme permitido nestes Termos.
                </p>

                <h3 className="mb-4 mt-5">7. Limitação de Responsabilidade</h3>
                <ul className="about-list style-2 mt-3">
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Disponibilidade :</span> Fazemos o possível para manter o LP ativo, mas não garantimos que ela esteja sempre disponível ou livre de erros.
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Uso por Sua Conta :</span> Você acessa o LP por sua conta e risco. Não nos responsabilizamos por danos decorrentes do uso inadequado ou indireto no serviço, salvo em casos de dolo ou culpa grave, conforme a lei.
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Diagnósticos e Materiais :</span> Os diagnósticos gratuitos e materiais são oferecidos "como estão", sem garantias de resultados específicos.
                  </li>
                </ul>

                <h3 className="mb-4 mt-5">8. Alterações nos Termos</h3>
                <p>
                  Podemos atualizar estes Termos a qualquer momento. A versão mais recente estará sempre disponível em LP, e os dados de atualização serão indicados. Alterações importantes serão comunicadas por e-mail ou aviso no site. O uso contínuo da LP após mudanças implica liberdade dos novos termos.
                </p>

                <h3 className="mb-4 mt-5">9. Rescisão</h3>
                <p>
                  Você pode parar de usar um LP a qualquer momento. Nós podemos encerrar ou suspender seu acesso se descumprir estes Termos ou por razões operacionais, sem prejuízo de outras medidas legais.
                </p>

                <h3 className="mb-4 mt-5">10. Lei Aplicável e Foro</h3>
                <p>
                  Estes Termos são regidos pelas leis do Brasil. Qualquer disputa será resolvida no foro da comarca de [inserir cidade/estado da sede da Bolt 360], com renúncia a qualquer outro, por mais privilegiado que seja.
                </p>

                <h3 className="mb-4 mt-5">11. Contato</h3>
                <p>
                  Dúvidas sobre estes Termos? Entre em contato pelo e-mail contato@bolt.com.br.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default Terms;
