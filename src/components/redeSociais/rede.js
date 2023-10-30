import "./rede.css";

export const RedeSociais = () => {
  const ListaRedes = [
    {
      id: 1,
      urlNome: "Linkedin",
      url: "https://www.linkedin.com/in/diegoandreleffa/",
    },
    { id: 2, urlNome: "GitHub", url: "https://github.com/DiegoAndreLeffa" },
    {
      id: 3,
      urlNome: "Portifolio",
      url: "https://my-portfolio-diegoandreleffa.vercel.app/",
    },
  ];

  const links = ListaRedes.map((props) => (
    <div key={props.id} className="conteudo_links">
      <a href={props.url}>{props.urlNome}</a>
    </div>
  ));

  return <>{links}</>;
};
