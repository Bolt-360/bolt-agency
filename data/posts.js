// /data/posts.js

export async function getBlogPosts() {
    try {
      console.log('Fazendo requisição para a API do Strapi...');
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
      
      return data.data.map((post) => ({
        id: post.documentId || post.id.toString(), // Usar documentId se disponível
        title: post.title || 'Título não disponível',
        date: post.date || new Date().toISOString().split('T')[0],
        image: post.image?.url
          ? `http://localhost:1337${post.image.url}`
          : '/assets/img/default.jpg',
        content: post.Content?.[0]?.children?.[0]?.text || 'Conteúdo não disponível',
        author: post.author || 'Autor não disponível',
        categories: post.categories ? post.categories.split(', ') : [],
        documentId: post.documentId, // Adicionar documentId explicitamente
        slug: post.slug
      }));
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      return [];
    }
}
  
export async function getPostById(id) {
    try {
      console.log('Buscando post com ID:', id);
      // Primeiro tenta buscar pelo documentId
      let url = `http://localhost:1337/api/posts?filters[documentId][$eq]=${id}&populate=*`;
      
      let res = await fetch(url, {
        cache: 'no-store',
        headers: {
          'Accept': 'application/json'
        }
      });
      
      let data = await res.json();
      
      // Se não encontrar pelo documentId, tenta pelo ID numérico
      if (!data.data?.[0]) {
        url = `http://localhost:1337/api/posts/${id}?populate=*`;
        res = await fetch(url, {
          cache: 'no-store',
          headers: {
            'Accept': 'application/json'
          }
        });
        data = await res.json();
      }

      const post = data.data?.[0] || data.data;
      
      if (!post) {
        console.warn('Post não encontrado:', id);
        return null;
      }

      return {
        id: post.documentId || post.id.toString(),
        title: post.title || 'Título não disponível',
        date: post.date || new Date().toISOString().split('T')[0],
        image: post.image?.url
          ? `http://localhost:1337${post.image.url}`
          : '/assets/img/default.jpg',
        content: post.Content?.[0]?.children?.[0]?.text || 'Conteúdo não disponível',
        author: post.author || 'Autor não disponível',
        categories: post.categories ? post.categories.split(', ') : [],
        documentId: post.documentId,
        slug: post.slug
      };
    } catch (error) {
      console.error('Erro ao buscar post:', error);
      return null;
    }
}
  
export async function getAllPostIds() {
    const posts = await getBlogPosts();
    return posts.map(post => ({
      params: { 
        id: post.documentId || post.id 
      }
    }));
}