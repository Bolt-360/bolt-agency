"use client";

import React from 'react';
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const Terms = () => {
  return (
    <NextLayout header={1} footer={4} single>
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
                    <i className="fas fa-circle" />
                    Cadastro : Ao preencher o formulário, você fornece dados como nome da empresa, site, telefone, e-mail e número de colaboradores. Esses dados serão usados ​​para entrar em contato com você e oferecer nossos serviços, conforme detalhado em nossa Política de Privacidade
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Elegibilidade : O formulário é destinado a maiores de 18 anos ou representantes legais de empresas. Não coletamos intencionalmente dados de menores.

                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Veracidade : Você é responsável por fornecer informações corretas e atualizadas. Não nos responsabilizamos por dados incorretos ou incompletos
                  </li>
                </ul>

                <h3 className="mb-4 mt-5">3. Privacidade e Proteção de Dados</h3>
                <p>
                  Respeitamos sua privacidade e protegemos seus dados pessoais de acordo com a LGPD.
                  Suas informações serão utilizadas apenas para os fins específicos dos serviços contratados.
                </p>

                <h3 className="mb-4 mt-5">4. Responsabilidades</h3>
                <p>
                  A Bolt Agency se compromete a fornecer serviços de qualidade, mantendo a transparência
                  e profissionalismo em todas as interações com os clientes.
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
