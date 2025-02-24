// app/api/posts.js
export async function getBlogPosts() {
    try {
      const res = await fetch('http://localhost:1337/api/posts?populate=*', {
        headers: {
          // Authorization: `Bearer SEU_TOKEN_API`, 
        },
        cache: 'force-cache', // Para SSR ou ISR (opcional)
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const data = await res.json();
  
      if (!data.data || !Array.isArray(data.data)) {
        console.warn('Nenhum post encontrado ou resposta inválida:', data);
        return []; 
      }
  
      return data.data.map(post => {
        let contentText = 'Conteúdo não disponível';
        if (post.content && Array.isArray(post.content)) {
          contentText = post.content
            .map(item => item.children?.map(child => child.text || '').join(' '))
            .join(' ');
        }
  
        return {
          id: post.id.toString(),
          title: post.title || 'Título não disponível', // Fallback
          date: post.date || new Date().toISOString().split('T')[0], // Fallback
          image: post.image?.url
            ? `http://localhost:1337${post.image.url}` // Ajuste para o novo formato da URL
            : '/assets/img/default.jpg',
          content: contentText, // Texto do Rich Text
          author: post.author || 'Autor não disponível', // Fallback
          categories: post.categories ? post.categories.split(', ') : [], // Fallback
        };
      });
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      return []; 
    }
  }