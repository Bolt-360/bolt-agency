// /data/posts.js

export async function getBlogPosts() {
  const res = await fetch('http://localhost:1337/api/posts?populate=*', {
    headers: {
      // Authorization: `Bearer SEU_TOKEN_API`, // Descomente se necessário
    },
  });
  const data = await res.json();
  return data.data.map(post => ({
    id: post.id.toString(),
    title: post.attributes.title,
    date: post.attributes.date,
    image: post.attributes.image?.data?.attributes?.url
      ? `http://localhost:1337${post.attributes.image.data.attributes.url}`
      : '/assets/img/default.jpg',
    content: post.attributes.content,
    author: post.attributes.author,
    categories: post.attributes.categories.split(', '),
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
    title: post.attributes.title,
    date: post.attributes.date,
    image: post.attributes.image?.data?.attributes?.url
      ? `http://localhost:1337${post.attributes.image.data.attributes.url}`
      : '/assets/img/default.jpg',
    content: post.attributes.content,
    author: post.attributes.author,
    categories: post.attributes.categories.split(', '),
  };
}

export async function getAllPostIds() {
  const posts = await getBlogPosts();
  return posts.map(post => ({
    params: { id: post.id },
  }));
}