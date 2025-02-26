import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [cookies, setCookies] = useState({
    essential: true,
    performance: false,
    personalization: false
  });

  useEffect(() => {
    const savedPreferences = JSON.parse(localStorage.getItem("cookiePreferences"));
    if (savedPreferences) {
      setCookies(savedPreferences);
      setVisible(false);
      if (savedPreferences.performance || savedPreferences.personalization) {
        enableCookies();
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = { essential: true, performance: true, personalization: true };
    setCookies(newPreferences);
    localStorage.setItem("cookiePreferences", JSON.stringify(newPreferences));
    enableCookies();
    setVisible(false);
    setIsSettingsOpen(false);
  };

  const handleRejectNonEssential = () => {
    const newPreferences = { essential: true, performance: false, personalization: false };
    setCookies(newPreferences);
    localStorage.setItem("cookiePreferences", JSON.stringify(newPreferences));
    setVisible(false);
    setIsSettingsOpen(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(cookies));
    
    if (cookies.performance || cookies.personalization) {
      enableCookies();
    }
    removeCookies();
    
    setIsSettingsOpen(false);
    setVisible(false);
  };

  const enableCookies = () => {
    if (cookies.performance) {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');

      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
      script.async = true;
      document.head.appendChild(script);
    }

    if (cookies.personalization) {
      const userPreferences = {
        theme: 'light',
        fontSize: 'medium',
        lastVisit: new Date().toISOString()
      };
      localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
      
      document.documentElement.setAttribute('data-theme', userPreferences.theme);
    }
  };

  const removeCookies = () => {
    if (!cookies.performance) {
      const cookiesToDelete = ['_ga', '_gid', '_gat'];
      cookiesToDelete.forEach(cookieName => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });
      
      const gaScript = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
      if (gaScript) {
        gaScript.remove();
      }
      
      window.dataLayer = undefined;
    }

    if (!cookies.personalization) {
      localStorage.removeItem('userPreferences');
      document.documentElement.removeAttribute('data-theme');
    }
  };

  return (
    <>
      {visible && (
        <div className="cookie-consent" role="alert" aria-live="polite">
          <div className="cookie-content-main">
            <p>
              Nós usamos cookies para melhorar sua experiência e oferecer conteúdos relevantes.{" "}
              <a href="/privacidade" target="_blank" rel="noopener noreferrer">
                Saiba mais
              </a>
            </p>
            <div className="buttons">
              <button className="btn-secondary" onClick={() => setIsSettingsOpen(true)}>
                Configurações
              </button>
              <button className="btn-primary" onClick={handleAcceptAll}>
                Aceitar Todos
              </button>
              <button className="btn-outline" onClick={handleRejectNonEssential}>
                Recusar Não Essenciais
              </button>
            </div>
          </div>
        </div>
      )}

      {isSettingsOpen && (
        <div className="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title">
          <div className="cookie-modal-overlay" onClick={() => setIsSettingsOpen(false)} />
          <div className="cookie-content">
            <header className="modal-header">
              <h2 id="cookie-settings-title">Configurações de Cookies</h2>
              <button className="close-button" onClick={() => setIsSettingsOpen(false)} aria-label="Fechar">
                ✕
              </button>
            </header>
            
            <div className="cookie-options">
              <div className="cookie-option">
                <div className="option-header">
                  <strong>Cookies Essenciais</strong>
                  <span className="badge">Sempre ativo</span>
                </div>
                <p className="option-description">
                  Necessários para o funcionamento básico do site.
                </p>
              </div>

              {[
                {
                  id: 'performance',
                  title: 'Cookies de Desempenho',
                  description: 'Nos ajudam a entender como os visitantes interagem com o site.'
                },
                {
                  id: 'personalization',
                  title: 'Cookies de Personalização',
                  description: 'Permitem oferecer uma experiência mais personalizada.'
                }
              ].map(({ id, title, description }) => (
                <div key={id} className="cookie-option">
                  <div className="option-header">
                    <strong>{title}</strong>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={cookies[id]}
                        onChange={(e) => setCookies({ ...cookies, [id]: e.target.checked })}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <p className="option-description">{description}</p>
                </div>
              ))}
            </div>

            <footer className="modal-footer">
              <button className="btn-outline" onClick={() => setIsSettingsOpen(false)}>
                Cancelar
              </button>
              <button className="btn-primary" onClick={handleSaveSettings}>
                Salvar e Aceitar
              </button>
            </footer>
          </div>
        </div>
      )}

      <style jsx>{`
        .cookie-consent {
          position: fixed;
          bottom: 0;
          width: 100%;
          background-color: white;
          box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
          z-index: 1000;
        }

        .cookie-content-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .buttons {
          display: flex;
          gap: 0.75rem;
        }

        .btn-primary, .btn-secondary, .btn-outline {
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: 500;
          transition: all 0.2s;
          cursor: pointer;
        }

        .btn-primary {
          background-color: #007bff;
          color: white;
          border: none;
        }

        .btn-secondary {
          background-color: #f8f9fa;
          color: #212529;
          border: 1px solid #dee2e6;
        }

        .btn-outline {
          background-color: transparent;
          color: #6c757d;
          border: 1px solid #dee2e6;
        }

        .cookie-modal {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
        }

        .cookie-modal-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
        }

        .cookie-content {
          position: relative;
          background: white;
          width: 90%;
          max-width: 600px;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid #dee2e6;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
        }

        .cookie-options {
          padding: 1.5rem;
          max-height: 60vh;
          overflow-y: auto;
        }

        .cookie-option {
          margin-bottom: 1.5rem;
        }

        .option-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .option-description {
          color: #6c757d;
          font-size: 0.875rem;
          margin: 0;
        }

        .badge {
          background-color: #e9ecef;
          color: #495057;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 24px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: .4s;
          border-radius: 34px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #007bff;
        }

        input:checked + .slider:before {
          transform: translateX(26px);
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          padding: 1.5rem;
          border-top: 1px solid #dee2e6;
        }

        @media (max-width: 768px) {
          .cookie-content-main {
            flex-direction: column;
            text-align: center;
          }
          
          .buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .btn-primary, .btn-secondary, .btn-outline {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default CookieConsent;
