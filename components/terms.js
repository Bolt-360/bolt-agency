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
                  Termos de Uso e <br />
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
                <h3 className="mb-4">1. Aceitação dos Termos</h3>
                <p>
                  Ao acessar e utilizar os serviços da Bolt Agency, você concorda com estes termos e condições. 
                  Estes termos constituem um acordo legal entre você e a Bolt Agency.
                </p>

                <h3 className="mb-4 mt-5">2. Uso do Serviço</h3>
                <p>
                  Nossos serviços de marketing digital são fornecidos mediante acordo prévio e podem incluir:
                </p>
                <ul className="about-list style-2 mt-3">
                  <li>
                    <i className="fas fa-check-circle" />
                    Consultoria em Marketing Digital
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Serviços de SEO e Otimização
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Gestão de Mídias Sociais
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
