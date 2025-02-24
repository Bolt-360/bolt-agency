// /data/posts.js

export async function getBlogPosts() {
    const res = await fetch('http://localhost:1337/api/posts?populate=*', {
      headers: {
        // Authorization: `Bearer SEU_TOKEN_API`, // Descomente e substitua pelo token se necessário
      },
    });
    const data = await res.json();
    return data.data.map(post => ({
      id: post.id.toString(),
      title: post.title || 'Título não disponível',
      date: post.date || new Date().toISOString().split('T')[0],
      image: post.image?.data?.attributes?.url
        ? `http://localhost:1337${post.image.data.attributes.url}`
        : '/assets/img/default.jpg',
      content: post.content && Array.isArray(post.content)
        ? post.content.map(item => item.children?.map(child => child.text || '').join(' ')).join(' ')
        : 'Conteúdo não disponível',
      author: post.author || 'Autor não disponível',
      categories: post.categories ? post.categories.split(', ') : [],
    }));
  }
  
  export async function getPostById(id) {
    const res = await fetch(`http://localhost:1337/api/posts/${id}?populate=*`, {
      headers: {
        // Authorization: `Bearer SEU_TOKEN_API`,
      },
    });
    const data = await res.json();
    if (!data.data) return null;
    const post = data.data;
    return {
      id: post.id.toString(),
      title: post.title || 'Título não disponível',
      date: post.date || new Date().toISOString().split('T')[0],
      image: post.image?.data?.attributes?.url
        ? `http://localhost:1337${post.image.data.attributes.url}`
        : '/assets/img/default.jpg',
      content: post.content && Array.isArray(post.content)
        ? post.content.map(item => item.children?.map(child => child.text || '').join(' ')).join(' ')
        : 'Conteúdo não disponível',
      author: post.author || 'Autor não disponível',
      categories: post.categories ? post.categories.split(', ') : [],
    };
  }
  
  export async function getAllPostIds() {
    const posts = await getBlogPosts();
    return posts.map(post => ({
      params: { id: post.id },
    }));
  }