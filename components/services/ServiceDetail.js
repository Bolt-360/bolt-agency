import Link from "next/link"
import NextLayout from "@/layouts/NextLayout"
import Image from "next/image"  
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
              <Image src="/assets/img/balewhite.png" alt="img" width={24} height={24} priority quality={100} />
              Impulsione seus Resultados com nosso Serviços
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

          <br/>

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

          <br/>

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

          <br/>
          <br/>

          <div className="text-center mt-12">
            <Link
              href="https://api.whatsapp.com/send/?phone=558431901700&text=Ol%C3%A1%21+vim+pelo+site+da+Bolt+Agency"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn hover-white py-3 px-8 inline-flex items-center gap-2 rounded-lg transition-all duration-300 hover:transform hover:scale-105 wow fadeInUp"
              data-wow-delay=".4s"
            >
              Fale Conosco Agora <i className="far fa-arrow-right ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </NextLayout>
  )
}

export default ServiceDetail