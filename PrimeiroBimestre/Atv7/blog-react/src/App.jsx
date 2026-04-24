import Header from './components/Header';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Se você colocou seu CSS no App.css, descomente a linha abaixo:
// import './App.css'; 

export default function App() {
  // 1. Armazenando os dados do post em um objeto
  const dadosDoPost = {
    titulo: "Descobrindo as Praias do Nordeste",
    data: "15 de agosto de 2025",
    imagem: "/praia.jpg", // A imagem que está na pasta public
    // Coloquei os parágrafos em uma lista (Array) para facilitar a renderização
    conteudo: [
      "O Nordeste brasileiro possui algumas das praias mais bonitas do mundo. Com águas cristalinas, areia branca e um clima ensolarado, é o destino perfeito para quem busca relaxar e aproveitar a natureza ao máximo.",
      "Durante nossa viagem, exploramos diversas praias incríveis. A culinária local também é um destaque à parte, com pratos à base de frutos do mar, acarajé e tapioca que deixam qualquer um com água na boca. Recomendo muito a visita!"
    ]
  };

  // 2. Retornando a estrutura da página
  return (
    <>
      <Header />
      
      <main>
        {/* Passando os dados do objeto via Props para o Article */}
        <Article 
          titulo={dadosDoPost.titulo}
          data={dadosDoPost.data}
          imagem={dadosDoPost.imagem}
          conteudo={dadosDoPost.conteudo}
        />
      </main>
      
      <Sidebar />
      <Footer />
    </>
  );
}