export default function Article({ titulo, data, imagem, conteudo }) {
  return (
    <article>
      <img src={imagem} alt={titulo} className="imagem-topo-card" />
      
      <div className="conteudo-post">
        <h2>{titulo}</h2>
        {/* Passando a data dinamicamente */}
        <time dateTime="2025-08-15">{data}</time>
        <hr className="divisor" />
        
        {/* Como o conteúdo tem dois parágrafos, vamos renderizá-los dinamicamente */}
        {conteudo.map((paragrafo, index) => (
          <p key={index}>{paragrafo}</p>
        ))}
      </div>
    </article>
  );
}