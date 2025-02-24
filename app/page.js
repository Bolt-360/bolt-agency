"use client";

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import Services from "@/components/services/Services";
import { TestimonialSlider4, TestimonialSlider5 } from "@/components/TestimonialSlider";
import WorkingProcess from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import Blog from '@/components/blog/Blog';

const page = () => {
  const [isOpen, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [isNome, setIsNome] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    // Accepts formats like: (84)99999-9999 or 84999999999
    const regex = /^(?:\(?([0-9]{2})\)?[-. ]?)?([0-9]{5})[-. ]?([0-9]{4})$/;
    return regex.test(phone.replace(/\D/g, ''));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    
    if (!isAccepted) {
      toast.error('Por favor, aceite os termos e condições para continuar.');
      return;
    } 
    
    if (!isNome || !isEmail || !isPhone) {
      toast.error('Por favor, preencha todos os campos para continuar.');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Por favor, insira um email válido.');
      return;
    }

    if (!validatePhone(phone)) {
      toast.error('Por favor, insira um telefone válido.');
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Mensagem enviada com sucesso!');
        e.target.reset();
      } else {
        toast.error('Erro ao enviar mensagem. Por favor, tente novamente.');
      }
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <NextLayout header={1} footer={4} single>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />

      {/* Componente ModalVideo */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="_oQ7AfVWm_o"
        onClose={() => setOpen(false)}
      />

      {/* Hero Section Start */}
      <section
        className="hero-section hero-1 bg-cover fix"
        style={{ backgroundImage: 'url("assets/img/hero/01.jpg")' }}
      >
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="sub-content wow fadeInUp" data-wow-delay=".2s">
                  <img src="assets/img/balewhite.png" alt="img" />
                   25+ Anos de Experiência
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  O Marketing Digital <br />
                  Perfeito para<br /> Crescer sua Empresa <br />
                </h1>
                <div className="hero-button">
                  <Link
                    href="https://api.whatsapp.com/send/?phone=558431901700&text=Ol%C3%A1%21+vim+pelo+site+da+Bolt+Agency" target="_blank" rel="noopener noreferrer"
                    className="theme-btn hover-white wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    Fale Conosco Agora <i className="far fa-arrow-right" />
                  </Link>
                  <Link
                    href="servicos"
                    className="btn-link wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    Ver Serviços <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="hero-client d-flex align-items-center gap-4 mt-50 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <img src="assets/img/hero/client.png" alt="img" />
                  <p className="text-white">
                    Confiança de 1K+ empresas <br />
                    atendidas
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="hero-contact-box">
                <h4>Faça um Diagnóstico Gratuito</h4>
                <p></p>
                <form
                  onSubmit={handleSubmit}
                  id="contact-form"
                  className="contact-form-item"
                >
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Seu Nome"
                          onChange={(e) => setIsNome(e.target.value.trim() !== '')}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email"
                          onChange={(e) => setIsEmail(e.target.value.trim() !== '')}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Telefone"
                          onChange={(e) => setIsPhone(e.target.value.trim() !== '')}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="payment-save">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="save-for-next"
                          id="saveForNext"
                          checked={isAccepted}
                          onChange={(e) => setIsAccepted(e.target.checked)}
                        />
                        <p>
                          Li e concordo com{" "}
                          <Link href="/terms" target="_blank" rel="noopener noreferrer">Termos &amp; Condições</Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button 
                        type="submit" 
                        className={`theme-btn`}
                      >
                        {isSubmitting ? 'Enviando...' : 'Agende Agora'} 
                        <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Start */}
      <section className="about-section fix section-padding" id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="digital-about-image">
                  <img
                    src="assets/img/about/digittal-about-img.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      Quem Somos
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Experiência de +20 Anos em Gestão Empresarial &amp; Data Science
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Nossa experiência no mercado corporativo nos permite desenvolver estratégias digitais personalizadas, unindo:
                  </p>
                  <ul
                    className="about-list style-2 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li>
                      <i className="fas fa-check-circle" />
                      Marketing Estratégico &amp; Copywriting para SEO
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Automação e Análise de Dados com Data Science
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Tráfego Qualificado e Conversões Reais
                    </li>
                  </ul>
                  <div
                    className="about-button wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Link href="about" className="theme-btn bg-2">
                      Saiba mais sobre a Bolt 360 Assessoria
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cta Video Section Start */}
      <div
        className="cta-video-section fix bg-cover"
        style={{ backgroundImage: 'url("assets/img/cta/cta-video.jpg")' }}
      >
        <div className="container">
          <div className="cta-video-wrapper">
            <div className="video-box">
              <button
                onClick={() => setOpen(true)}
                className="video-buttton ripple"
              >
                <i className="fas fa-play" />
              </button>
            </div>
          </div>
        </div>
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">Marketing</span>
                <span className="text-slider">Consultoria </span>
                <span className="text-slider style-border" />
                <span className="text-slider">SEO</span>
                <span className="text-slider">Data </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IA</span>
                <span className="text-slider">Science </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Desenvolvimento</span>
                <span className="text-slider">Marketing</span>
                <span className="text-slider">Consultoria </span>
                <span className="text-slider style-border" />
                <span className="text-slider">SEO</span>
                <span className="text-slider">Data </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IA</span>
                <span className="text-slider">Science </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Desenvolvimento</span>
                <span className="text-slider">Marketing</span>
                <span className="text-slider">Consultoria </span>
                <span className="text-slider style-border" />
                <span className="text-slider">SEO</span>
                <span className="text-slider">Data </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IA</span>
                <span className="text-slider">Science </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Desenvolvimento</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Services />
      {/* Working Process Section Start */}
      <WorkingProcess />
      {/* Testimonial Section Start */}
      <section
        className="testimonial-section-4 fix section-padding"
        id="testimonial"
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Clientes Atendidos
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              1250+ Clientes Satisfeitos Dizem Sobre Nós
            </h2>
          </div>
        </div>

        <TestimonialSlider4 />
        <TestimonialSlider5 />
      </section>
      {/* Faq Section Start */}
      <Faq />
      {/* Pricing Section Start */}
      <Pricing />
      {/* News Section Start */}
      <Blog />
      {/* Contact Section Start */}
      <section className="contact-section fix section-padding pt-0 fix">
        <div className="pattern-shape">
          <img src="assets/img/box-pattern.png" alt="radius-shape" />
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-lg-1" />
            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-image">
                <img src="assets/img/contact.jpg" alt="img" />
                <div className="circle-musk-shape float-bob-x">
                  <img src="assets/img/hero/circle-musk.png" alt="shape-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-content wow fadeInUp">
                  <img src="assets/img/bale.png" alt="img" />
                  Fale Conosco
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Pronto para impulsionar seu  <br />
                  marketing e resultados ?
                </h2>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                A Bolt Agency usa SEO, copywriting e automação <br /> para aumentar sua visibilidade e conversões no digital.
              </p>
              <Link
                href="contact"
                className="theme-btn mt-4 wow fadeInUp"
                data-wow-delay=".3s"
              >
                Faça um Diagnóstico Gratuito
                <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default page;
