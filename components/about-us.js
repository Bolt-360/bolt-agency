"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NextLayout from "@/layouts/NextLayout";
import { TestimonialSlider4 } from "@/components/TestimonialSlider";

const AboutPage = () => {
  return (
    <NextLayout  header={5}   footer={4} single>
      {/* Hero Section Start */}
      <section className="page-banner bg-cover" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content">
                <h2>Sobre Nós</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Sobre</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Start */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-image">
                <Image
                  src="/assets/img/about/05.jpg"
                  alt="about"
                  width={600}
                  height={400}
                  quality={100}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-content wow fadeInUp">
                    <Image
                      src="/assets/img/bale.png"
                      alt="img"
                      width={24}
                      height={24}
                      priority
                      quality={100}
                    />
                    Nossa História
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Transformando Negócios através do Marketing Digital desde 2003
                  </h2>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Com mais de 20 anos de experiência, a Bolt Agency tem se destacado no mercado 
                  digital combinando estratégias inovadoras de marketing com análise avançada de dados.
                  Nossa missão é impulsionar o crescimento sustentável dos nossos clientes através
                  de soluções personalizadas e resultados mensuráveis.
                </p>
                <div className="counter-grid mt-4">
                  <div className="counter-item wow fadeInUp" data-wow-delay=".3s">
                    <h3><span className="counter">1250</span>+</h3>
                    <p>Clientes Satisfeitos</p>
                  </div>
                  <div className="counter-item wow fadeInUp" data-wow-delay=".5s">
                    <h3><span className="counter">25</span>+</h3>
                    <p>Anos de Experiência</p>
                  </div>
                  <div className="counter-item wow fadeInUp" data-wow-delay=".7s">
                    <h3><span className="counter">100</span>%</h3>
                    <p>Garantia de Satisfação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Start */}
      <section className="cta-section section-padding pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">        
              <Link href="/" className="theme-btn">
                    <i className="fas fa-home me-2"></i> Voltar para Home
                  </Link>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default AboutPage;