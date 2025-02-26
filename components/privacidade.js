"use client";

import React from 'react';
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const Privacidade = () => {
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
                  Política de Privacidade
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  Política de Privacidade
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
                <h3 className="mb-4">Sobre o Bolt 360</h3>
                <p>
                  Na Bolt 360, somos mais do que uma empresa de assessoria: somos parceiros dedicados a transformar o cenário
                  empresarial de nossos clientes. Nosso objetivo é reduzir custos, analisar riscos e aumentar o lucro líquido,
                  orientando cada negócio rumo ao sucesso sustentável. Com uma equipe apaixonada, combinamos inovação, excelência e
                  empatia para oferecer soluções personalizadas e construir relações de confiança.
                </p>

                <h3 className="mb-4 mt-5">Informações que coletamos</h3>
                <p>
                  Adotamos o princípio da minimização, coletando apenas os dados necessários e com especificações específicas,
                  sempre respeitando a Lei Geral de Proteção de Dados (LGPD).
                </p>

                <h3 className="mb-4 mt-5">Dados Fornecidos por Você</h3>
                <p>
                  Ao acessar nosso site, você pode preencher um formulário para receber contato da equipe comercial da Bolt 360.
                </p>
                <p>
                  Para isso, solicitamos:
                </p>
                <ul className="about-list style-2 mt-3">
                  <li><i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />CNPJ</li>
                  <li><i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />Site da empresa</li>
                  <li><i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />Número de WhatsApp</li>
                  <li><i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />E-mail</li>
                </ul>
                <p className="mt-3">
                  Esses dados são usados ​​para entrar em contato com você, com base no seu consentimento. Caso não deseje receber mais
                  contatos, você pode solicitar a exclusão dos dados pelo e-mail contato@bolt.com.br .
                  Não coletamos intencionalmente dados de crianças ou adolescentes. Se isso ocorrer, os dados serão excluídos assim
                  que identificados.
                </p>

                <h3 className="mb-4 mt-5">Dados coletados automaticamente</h3>
                <p>
                  Também coletamos informações automaticamente ao navegar em nosso site, com base em nosso legítimo interesse em
                  melhorar os serviços e garantir sua funcionalidade:
                </p>
                <ul className="about-list style-2 mt-3">
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Uso :</span> Cliques, rolagem, páginas visitadas
                    (para análise e correção de erros);
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Localização :</span> Localização aproximada via endereço IP
                    (para estatísticas regionais);
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Técnicas :</span> Tipo de navegador, dispositivo, sistema operacional,
                    idioma, endereço IP (para diagnóstico de problemas);
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Cookies :</span> Usamos cookies para lembrar e direcionar conteúdos
                    relevantes. Você pode gerenciar ou recusar cookies nas configurações do navegador ou em nosso
                    banner de consentimento.
                  </li>
                </ul>

                <h3 className="mb-4 mt-5">Como Usamos Suas Informações</h3>
                <p>
                  Os dados coletados têm as seguintes finalidades:
                </p>
                <ul className="about-list style-2 mt-3">
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    Entrar em contato com base nos dados do formulário (consentimento);
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    Melhorar o site e corrigir erros (interesse legítimo);
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    Analisar comportamento de uso para melhoria de serviços (interesse legítimo);
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    Proteger o site contra usos indevidos (interesse legítimo).
                  </li>
                </ul>
                <p className="mt-3">
                  Pesquisas questionáveis ​​com usuários podem ser realizadas para entender a interação com nossos serviços,
                  sempre com consentimento prévio.
                </p>
                <h3 className="mb-4 mt-5">Como Armazenamos Suas Informações</h3>
                <p>
                  Os dados são armazenados no Brasil, em provedores de nuvem com padrões de segurança e privacidade. Mantemos
                  os dados pelo tempo necessário para cumprir as finalidades descritas (ex.: enquanto houver relação comercial ou
                  interesse mútuo), salvo obrigações legais ou judiciais que exija retenção por prazo maior. Após esse período, os
                  dados são excluídos de forma segura.
                </p>

                <h3 className="mb-4 mt-5">Como Compartilhamos Suas Informações</h3>
                <p>Não vendemos seus dados pessoais. O compartilhamento ocorre apenas nas seguintes situações:</p>
                <ul className="about-list style-2 mt-3">
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Funcionários e Contratados :</span> Para fornecer os serviços, com
                    garantia de boas práticas de segurança;
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Terceiros :</span> Com plataformas de nuvem, marketing, vendas ou
                    análise de erros, sempre com contratos que garantem proteção;
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Obrigação Legal :</span> Para cumprir leis ou processos judiciais;
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Dados Anonimizados :</span>Estatísticas ou estudos
                    (ex.: com universidades para IA), sem identificação pessoal.
                  </li>
                </ul>
                <p className="mt-3">Não realizamos transferência internacional de dados atualmente. Caso isso ocorra no
                  futuro, informaremos e garantiremos conformidade com a LGPD.
                </p>

                <h3 className="mb-4 mt-5">Seus Direitos</h3>
                <p>
                  Você tem os seguintes direitos sobre seus dados, que podem ser exercidos pelo e-mail suporte@bolt.com.br :
                </p>
                <ul className="about-list style-2 mt-3">
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    Confirmar se tratamos seus dados;
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    Acessar seus dados;
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    Corrigir dados incompletos, inexatos ou desatualizados;
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    Solicitar anonimização, bloqueio ou exclusão de dados desnecessários;
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    Pedir portabilidade de dados, nos limites legais;
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    Solicitar a eliminação dos dados, salvo se houver obrigações legais ou judiciais de retenção;
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    Saber com quem compartilha seus dados;
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    Revogar a assinatura, quando aplicável;
                  </li>
                  <li>
                    <i className="fas fa-circle" style={{ marginLeft: '25px', marginRight: '5px', fontSize: '8px' }} />
                    Informar-se sobre as consequências de não fornecer consentimento.
                  </li>
                </ul>
                <p className="mt-3">Responderemos às solicitações em até 15 dias, em conformidade com a LGPD.</p>

                <h3 className="mb-4 mt-5">Segurança</h3>
                <p>
                  Adotamos medidas administrativas, técnicas e físicas para proteger seus dados contra perda, uso indevido,
                  acesso não autorizado ou vazamentos. Apesar disso, nenhuma transmissão online é 100% segura, então recomendamos
                  que você também proteja suas informações.
                </p>

                <h3 className="mb-4 mt-5">Cookies</h3>
                <p>
                  Utilizamos cookies essenciais (funcionamento do site) e não essenciais (análise e personalização). Você pode
                  aceitar ou recusar cookies não essenciais via banner no site ou nas configurações do navegador.
                </p>

                <h3 className="mb-4 mt-5">Encarregado</h3>
                <p>
                  Nosso encarregado pelo tratamento de dados pode ser contatado pelo e-mail erico@bolt.com.br (ou outro que a
                  empresa definida).
                </p>

                <h3 className="mb-4 mt-5">Atualizações</h3>
                <p>
                  Esta política pode ser atualizada periodicamente. Recomendamos revisá-la regularmente. Alterações importantes
                  serão comunicadas por e-mail ou no site.
                </p>

                <h3 className="mb-4 mt-5">Contato</h3>
                <p>
                  Dúvidas? Entre em contato pelo e-mail suporte@bolt.com.br.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default Privacidade;
