// /data/posts.js

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
      console.log('Resposta completa da API do Strapi:', JSON.stringify(data, null, 2));
  
      if (!data?.data || !Array.isArray(data.data)) {
        console.warn('Nenhum post encontrado ou resposta inválida:', data);
        return [];
      }
  
      return data.data.map((post) => {
        console.log('Post processado em getBlogPosts:', post.id, post.title);
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
          id: String(post.id), // Garante que o ID é uma string
          title: post.attributes?.title || 'Título não disponível',
          date: post.attributes?.date || new Date().toISOString().split('T')[0],
          image: post.attributes?.image?.data?.attributes?.url
            ? `http://localhost:1337${post.attributes.image.data.attributes.url}`
            : '/assets/img/default.jpg', // Verifique se este caminho existe
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
  
  export async function getPostById(id) {
    console.log('Buscando post com ID:', id);
    const res = await fetch(`http://localhost:1337/api/posts/${id}?populate=*`, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json'
      }
    });
    if (!res.ok) {
      console.error(`Erro ao buscar post ${id}: Status ${res.status}, Resposta:`, await res.text());
      return null;
    }
    const data = await res.json();
    console.log('Resposta da API para getPostById:', JSON.stringify(data, null, 2));
    if (!data.data) return null;
    const post = data.data;
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
      id: String(post.id),
      title: post.attributes?.title || 'Título não disponível',
      date: post.attributes?.date || new Date().toISOString().split('T')[0],
      image: post.attributes?.image?.data?.attributes?.url
        ? `http://localhost:1337${post.attributes.image.data.attributes.url}`
        : '/assets/img/default.jpg', // Verifique se este caminho existe
      content: contentText,
      author: post.attributes?.author || 'Autor não disponível',
      categories: post.attributes?.categories
        ? Array.isArray(post.attributes.categories)
          ? post.attributes.categories
          : post.attributes.categories.split(', ')
        : [],
    };
  }
  
  export async function getAllPostIds() {
    const posts = await getBlogPosts();
    console.log('IDs gerados por getAllPostIds:', posts.map(post => post.id));
    return posts.map(post => ({
      params: { id: post.id },
    }));
  }