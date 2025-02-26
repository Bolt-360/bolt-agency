import Link from "next/link"
import NextLayout from "@/layouts/NextLayout"
import Image from "next/image"
const ServiceDetail = ({ service }) => {
  return (
    <NextLayout header={5} footer={3}>
      <section
        className="service-section-4 fix bg-cover section-padding py-16"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container mx-auto px-4">
          <div className="section-title text-center mb-12">
            <span className="sub-content bg-color-3 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-black font-medium wow fadeInUp">
              <img src="/assets/img/bale.png" alt="ícone" className="w-5 h-5" />
              Impulsione seus Resultados com nossos Serviços
            </span>
            <h2
              className="text-4xl font-bold mt-6 mb-3 wow fadeInUp"
              data-wow-delay=".3s"
              style={{ color: "#000" }}
            >
              {service.title}
            </h2>
            <h4 className="mt-3 text-xl text-gray-700 font-medium">{service.subtitle}</h4>
          </div>

          <div className="service-introduction text-center text-lg text-gray-800 max-w-3xl mx-auto mb-12 wow fadeInUp">
            <p className="leading-relaxed">{service.introdution}</p>
          </div>

          <br />

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 pb-3">
              Como Podemos Transformar Seu Negócio
            </h3>

            <div className="service-content text-gray-800 grid gap-6">
              {service.description.map((item, index) => (
                <div
                  key={index}
                  className="service-item wow fadeInUp text-center p-2 transition-all duration-300"
                  data-wow-delay={`.${index + 3}s`}
                >
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-gray-800">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <br />

          <div className="service-details mt-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center pb-3">Nossos serviços incluem:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-center">
              {service.servicos.map((item, index) => (
                <li
                  key={index}
                  className="wow fadeInUp p-2 transition-all duration-300"
                  data-wow-delay={`.${index + 3}s`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <br />
          <br />

          <div className="text-center mt-12 gap-3 d-flex">
            <Link href="/" className="theme-btn">
              <i className="fas fa-home me-2"></i> Home
            </Link>
            <Link href="/#services" className="theme-btn">
              <i className="fas fa-arrow-left me-2"></i> Voltar para serviços
            </Link>
          </div>
        </div>
      </section>
    </NextLayout>
  )
}

export default ServiceDetail