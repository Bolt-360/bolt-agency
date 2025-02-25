export async function getBlogPosts() {
  try {
      const res = await fetch('http://localhost:1337/api/posts?populate=*', {
          cache: 'no-store',
          headers: {
              'Accept': 'application/json' // Boa prática: especificar tipo de resposta esperada
          }
      });

      if (!res.ok) {
          throw new Error(`Erro HTTP! Status: ${res.status}`);
      }

      const data = await res.json();

      // Verificação mais robusta da estrutura dos dados
      if (!data?.data || !Array.isArray(data.data)) {
          console.warn('Nenhum post encontrado ou resposta inválida:', data);
          return [];
      }

      return data.data.map((post) => {
          // Verificação segura para a estrutura do content
          const contentText = post.attributes?.content 
              ? Array.isArray(post.attributes.content)
                  ? post.attributes.content
                      .map(item => {
                          if (!item?.children) return '';
                          return item.children
                              .map(child => child?.text || '')
                              .join(' ');
                      })
                      .join(' ')
                  : String(post.attributes.content)
              : 'Conteúdo não disponível';

          return {
              id: String(post.id), // Conversão mais limpa para string
              title: post.attributes?.title || 'Título não disponível',
              date: post.attributes?.date || new Date().toISOString().split('T')[0],
              image: post.attributes?.image?.data?.attributes?.url
                  ? `http://localhost:1337${post.attributes.image.data.attributes.url}`
                  : '/assets/img/default.jpg',
              content: contentText,
              author: post.attributes?.author || 'Autor não disponível',
              categories: post.attributes?.categories
                  ? Array.isArray(post.attributes.categories)
                      ? post.attributes.categories
                      : post.attributes.categories.split(', ')
                  : [],
          };
      });
  } catch (error) {
      console.error('Erro ao buscar posts:', error);
      return [];
  }
}