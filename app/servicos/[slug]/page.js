import { services } from '@/components/pages/services/service'
import ServiceDetail from '@/components/pages/services/ServiceDetail'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return services.map(service => ({
    slug: service.slug
  }))
}

export default function ServicePage({ params }) {
  const service = services.find(s => s.slug === params.slug)
  
  if (!service) {
    notFound()
  }

  return <ServiceDetail service={service} />
}