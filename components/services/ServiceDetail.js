import Link from "next/link"
import NextLayout from "@/layouts/NextLayout"

const ServiceDetail = ({ service }) => {
  return (
    <NextLayout header={0} footer={3}>
      <section className="service-section-4 fix bg-cover section-padding"
        style={{
          backgroundImage: 'url("/assets/img/service/service-bg-min.jpg")',
        }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content bg-color-3 wow fadeInUp">
              <img src="/assets/img/balewhite.png" alt="img" />
              Impulsione seus Resultados com nosso Serviços
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">      
              {service.title}
            </h2>
          </div>
          <br />
          <div className="service-content text-white">
            {service.description.map((item, index) => (
              <div key={index} className="service-item mb-4 wow fadeInUp" data-wow-delay={`.${index + 3}s`}>
                <div className="d-flex align-items-start">
                  <i className={`${service.icon} me-3 mt-1`}></i>
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link
              href="https://api.whatsapp.com/send/?phone=558431901700&text=Ol%C3%A1%21+vim+pelo+site+da+Bolt+Agency"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn hover-white wow fadeInUp"
              data-wow-delay=".4s"
            >
              Fale Conosco Agora <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
    </NextLayout>
  )
}

export default ServiceDetail