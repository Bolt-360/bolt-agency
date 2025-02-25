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
        console.log('Post processado em getBlogPosts:', post.documentId, post.attributes?.title, ' (ID numérico:', post.id, ')');
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
          id: post.documentId, // Usa documentId como o identificador único (ex.: "xb8snqplafcrnnzw4vudq4jo")
          title: post.attributes?.title || 'Título não disponível',
          date: post.attributes?.date || new Date().toISOString().split('T')[0],
          image: post.attributes?.image?.data?.attributes?.url
            ? `http://localhost:1337${post.attributes.image.data.attributes.url}`
            : '/public/assets/img/default.jpg',
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
    console.log('Buscando post com documentId:', id, ' (tipo:', typeof id, ')');
    const res = await fetch(`http://localhost:1337/api/posts/${id}`, { // Usa documentId como parâmetro
      cache: 'no-store',
      headers: {
        'Accept': 'application/json'
      }
    });
    
    console.log('Resposta bruta de getPostById:', {
      status: res.status,
      statusText: res.statusText,
      headers: Object.fromEntries(res.headers),
      url: res.url
    });
  
    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Erro ao buscar post com documentId ${id}: Status ${res.status}, Resposta: ${errorText}`);
      return null;
    }
  
    const data = await res.json();
    console.log('Resposta da API para getPostById:', JSON.stringify(data, null, 2));
  
    if (!data.data) {
      console.warn('Nenhum dado retornado para o post com documentId:', id, 'Resposta completa:', JSON.stringify(data, null, 2));
      return null;
    }
  
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
  
    let imageUrl = '/public/assets/img/default.jpg';
    if (post.attributes?.image) {
      if (post.attributes.image?.data?.attributes?.url) {
        imageUrl = `http://localhost:1337${post.attributes.image.data.attributes.url}`; // Com populate
      } else if (typeof post.attributes.image === 'string') {
        imageUrl = `http://localhost:1337${post.attributes.image}`; // Sem populate, se for apenas uma URL
      }
    }
  
    return {
      id: post.documentId, // Usa documentId como o identificador único (ex.: "xb8snqplafcrnnzw4vudq4jo")
      title: post.attributes?.title || 'Título não disponível',
      date: post.attributes?.date || new Date().toISOString().split('T')[0],
      image: imageUrl,
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
    console.log('IDs (documentIds) gerados por getAllPostIds:', posts.map(post => post.id));
    return posts.map(post => ({
      params: { id: post.id }, // Usa documentId como o parâmetro para as rotas (ex.: "xb8snqplafcrnnzw4vudq4jo")
    }));
  }