// 1. Primeiro, vamos criar um arquivo de dados para os posts
// /data/posts.js

export const blogPosts = [
    {
      id: "1",
      title: "O impacto da IA no ranqueamento de Sites",
      date: "Novembro 25, 2024",
      image: "assets/img/news/07.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "João Silva",
      categories: ["IA", "SEO", "Marketing Digital"]
    },
    {
      id: "2",
      title: "Como a velocidade de seu site impacta no comportamento do seu consumidor",
      date: "November 25, 2024",
      image: "assets/img/news/08.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Maria Oliveira",
      categories: ["Desempenho Web", "UX", "Conversão"]
    },
    {
      id: "3",
      title: "Tecnologias Revolucionárias para 2025",
      date: "November 25, 2024",
      image: "assets/img/news/09.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Carlos Mendes",
      categories: ["Tecnologia", "Inovação", "Tendências"]
    }
  ]
  
  // Função para obter post por ID
  export function getPostById(id) {
    return blogPosts.find(post => post.id === id);
  }
  
  // Função para obter todos os IDs de posts (útil para geração estática)
  export function getAllPostIds() {
    return blogPosts.map(post => ({
      params: {
        id: post.id
      }
    }));
  }