// /data/posts.js (ajustado para Strapi em produção)

export async function getBlogPosts() {
  try {
    console.log('Fazendo requisição para a API do Strapi...');
    const res = await fetch('https://strapi.webck.com.br/api/posts?populate=*', {
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
      id: post.documentId || post.id.toString(), // Mantém como está
      title: post.title || 'Título não disponível',
      date: post.date || new Date().toISOString().split('T')[0],
      image: post.image?.url
        ? `https://strapi.webck.com.br${post.image.url}`
        : '/assets/img/default.jpg',
      content: processContent(post.content), // Mantém o processamento ajustado
      author: post.author || 'Autor não disponível',
      categories: post.categories ? post.categories.split(', ') : [],
      documentId: post.documentId, // Mantém como está
      slug: post.slug // Mantém como está
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
    let url = `https://strapi.webck.com.br/api/posts?filters[documentId][$eq]=${id}&populate=*`;
    
    let res = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json'
      }
    });
    
    let data = await res.json();
    
    // Se não encontrar pelo documentId, tenta pelo ID numérico
    if (!data.data?.[0]) {
      url = `https://strapi.webck.com.br/api/posts/${id}?populate=*`;
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
      id: post.documentId || post.id.toString(), // Mantém como está
      title: post.title || 'Título não disponível',
      date: post.date || new Date().toISOString().split('T')[0],
      image: post.image?.url
        ? `https://strapi.webck.com.br${post.image.url}`
        : '/assets/img/default.jpg',
      content: processContent(post.content), // Mantém o processamento ajustado
      author: post.author || 'Autor não disponível',
      categories: post.categories ? post.categories.split(', ') : [],
      documentId: post.documentId, // Mantém como está
      slug: post.slug // Mantém como está
    };
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return null;
  }
}

export async function getAllPostIds() {
  const posts = await getBlogPosts();
  console.log('IDs (documentIds) gerados por getAllPostIds:', posts.map(post => post.id));
  return posts.map(post => ({
    params: { 
      id: post.documentId || post.id 
    }
  }));
}

// Função auxiliar atualizada para processar o conteúdo Rich Text
function processContent(content) {
  if (!content) return 'Conteúdo não disponível';

  if (Array.isArray(content)) {
    return content
      .map(block => {
        if (block.type === 'paragraph' && block.children) {
          return block.children
            .map(child => {
              if (child.type === 'text' && child.text) {
                return child.text.trim(); // Retorna o texto do parágrafo, removendo espaços extras
              }
              return ''; // Ignora outros tipos de child
            })
            .join(' ') // Junta o texto dentro de um parágrafo
            .trim(); // Remove espaços extras no parágrafo
        }
        return ''; // Ignora outros tipos de blocos
      })
      .filter(paragraph => paragraph !== '') // Remove parágrafos vazios
      .join('\n\n'); // Adiciona quebras de linha entre parágrafos
  }

  // Se o conteúdo for uma string simples, retorna diretamente
  return String(content).trim();
}