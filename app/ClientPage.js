"use client";

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Blog from '@/components/blog/Blog';

const ClientPage = ({ posts }) => {
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
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="_oQ7AfVWm_o"
        onClose={() => setOpen(false)}
      />

      <Blog posts={posts} />

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
              <div className="hero-contact-box">
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
                          <Link href="/terms" target="_blank" rel="noopener noreferrer">Termos & Condições</Link>
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
    </>
  );
};

export default ClientPage;