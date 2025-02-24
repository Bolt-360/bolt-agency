export async function getBlogPosts() {
    try {
      const res = await fetch('http://localhost:1337/api/posts?populate=*', {
        cache: 'no-store', // Evita cache durante desenvolvimento
      });
  
      if (!res.ok) {
        throw new Error(`Erro HTTP! Status: ${res.status}`);
      }
  
      const data = await res.json();
      console.log('Dados brutos do Strapi:', JSON.stringify(data, null, 2));
  
      if (!data.data || !Array.isArray(data.data)) {
        console.warn('Nenhum post encontrado ou resposta inválida:', data);
        return [];
      }
  
      return data.data.map((post, index) => {
        console.log(`Processando post ${index + 1} (ID: ${post.id}):`, JSON.stringify(post, null, 2));
  
        const contentText = Array.isArray(post.content)
          ? post.content
              .map(item => (item.children ? item.children.map(child => child.text || '').join(' ') : ''))
              .join(' ')
          : 'Conteúdo não disponível';
  
        return {
          id: post.id.toString(),
          title: post.title || 'Título não disponível',
          date: post.date || new Date().toISOString().split('T')[0],
          image: post.image?.data?.attributes?.url
            ? `http://localhost:1337${post.image.data.attributes.url}`
            : '/assets/img/default.jpg',
          content: contentText,
          author: post.author || 'Autor não disponível',
          categories: post.categories ? post.categories.split(', ') : [],
        };
      });
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      return [];
    }
  }