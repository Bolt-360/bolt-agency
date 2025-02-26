export async function getBlogPosts() {
  try {
    const res = await fetch('http://localhost:1337/api/posts?populate=*', {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error(`Erro HTTP! Status: ${res.status}`);
    }

    const data = await res.json();
    
    if (!data?.data || !Array.isArray(data.data)) {
      console.warn('Nenhum post encontrado ou resposta inválida:', data);
      return [];
    }

    return data.data.map((post) => ({
      id: post.attributes.slug || post.id.toString(), // Usar slug como ID primário
      numericId: post.id, // Manter o ID numérico como referência
      title: post.attributes?.title || 'Título não disponível',
      date: post.attributes?.date || new Date().toISOString().split('T')[0],
      image: post.attributes?.image?.data?.attributes?.url
        ? `http://localhost:1337${post.attributes.image.data.attributes.url}`
        : '/assets/img/default.jpg',
      content: post.attributes?.content || 'Conteúdo não disponível',
      author: post.attributes?.author || 'Autor não disponível',
      categories: post.attributes?.categories
        ? Array.isArray(post.attributes.categories)
          ? post.attributes.categories
          : post.attributes.categories.split(', ')
        : [],
    }));
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
}