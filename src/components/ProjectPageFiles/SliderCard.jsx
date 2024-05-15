import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "../ProjectPageFiles/Button";

//style
import "../../styles/components/slider/sliderCard.sass";

//projetos
import musicProject from "../../img/projects/music.jpg";
import streamProject from "../../img/projects/stream.jpg";
import solucoesProject from "../../img/projects/solucoes.jpg";
import tecnologoProject from "../../img/projects/tecnologo.jpg";
import dashProject from "../../img/projects/dash.jpg";
import lojaProject from "../../img/projects/loja.jpg";
import clinicaProject from "../../img/projects/clinica.jpg";
import escritorioProject from "../../img/projects/escritorio.jpg";
import cordelProject from "../../img/projects/cordel.jpg";
import loginProject from "../../img/projects/login.jpg";
import formProject from "../../img/projects/form.jpg";
import bibliografiaProject from "../../img/projects/bibliografia.jpg";

export const cardsMobile = [
  {
    ID: 1,
    img: musicProject,
    name: "MusicDot",
    description:
      "Site com tematica musical, apresentando uma escola de musica com cursos, videos-aulas e conteudos diversos para seus clientes.",
    detail: "Responsivo, Estilizado, Institucional, Várias Págínas.",
    link: "https://niaggyn.github.io/MusicDot---Wd43/",
  },
  {
    ID: 2,
    img: streamProject,
    name: "StreamFlix",
    description:
      "Site com tematica para stream de filmes,series e novidades. Apresentando uma plataforma de vídeos online com uma biblioteca, área para usuários se cadastrar, planos e muito mais.",
    detail: "Responsivo*, Estilizado, Institucional, Várias Págínas.",
    link: "https://niaggyn.github.io/Stream-Service/",
  },
  {
    ID: 3,
    img: solucoesProject,
    name: "NN Solucões",
    description:
      "Site com tematica de suporte cibernetico. Apresentando uma plataforma com serviços de gerenciamento de sites e servidores.",
    detail: "Estático*, Estilizado, Institucional, Página Única.",
    link: "https://niaggyn.github.io/Informatica/",
  },
  {
    ID: 4,
    img: tecnologoProject,
    name: "Construção Civil",
    description:
      "Site Pessoal/Profissional com tematica de construção civil. Apresentando os serviços prestados por parte do profissional, neste caso para planejamento e execução de obras.",
    detail: "Responsivo*, Estilizado, Empresarial, Página Única.",
    link: "https://niaggyn.github.io/Services-for-Civil-Construction/",
  },
  {
    ID: 5,
    img: dashProject,
    name: "Dashboard",
    description:
      "Landpage com tematica de dashboard. Apresentando uma área para usuarios do aplicativo, com várias opções para gerenciamento de tarefas.",
    detail: "Estático*, Apenas UX, Empresarial, Página Única.",
    link: "https://github.com/niaggyn",
  },
  {
    ID: 6,
    img: lojaProject,
    name: "Loja de Eletro",
    description:
      "Landpage com tematica de loja online. Apresentando uma perspectiva de loja online de produtos eletrônicos, com visualização do produto, pesquisa por nome, tipo, valores e afins",
    detail: "Estático*, Apenas UX, Empresarial, Página Única.",
    link: "https://github.com/niaggyn",
  },
  {
    ID: 7,
    img: clinicaProject,
    name: "Clí. Odontológica",
    description:
      "Landpage com tematica de clínica especializada. Apresentando uma clinica médica e seus serviços odontológicos, planos, opiniões dos clientes, e afins.",
    detail: "Estático*, Apenas UX, Empresarial, Página Única.",
    link: "https://niaggyn.github.io/Clinica-Odontologica/",
  },
  {
    ID: 8,
    img: escritorioProject,
    name: "Aplicativo Mobile",
    description:
      "Landpage para demonstração de Aplicativo Mobile. Apresentando uma perspectiva de aplicativo em sua versão mobile com disposição de elementos.",
    detail: "Estático*, Apenas UX, Portifólio, Página Única.",
    link: "https://niaggyn.github.io/NN-Desgin-Programa-o/",
  },
  {
    ID: 9,
    img: cordelProject,
    name: "Conto de Cordel",
    description:
      "Landpage com tematica de página de livro de cordel. Apresentando um cordel com efeitos de visualização que promovam a apreciação do texto.",
    detail: "Estático*, Apenas UX (Paralax), Institucional, Página Única.",
    link: "https://niaggyn.github.io/Projeto-Cordel/",
  },
  {
    ID: 10,
    img: loginProject,
    name: "Página de Login",
    description:
      "Landpage com tematica de login de usuário. Apresentando uma área para o usuário do aplicativo obter acesso a plataforma.",
    detail: "Estático*, Apenas UX, Institucional, Página Única.",
    link: "https://niaggyn.github.io/Tela-de-Login/",
  },
  {
    ID: 11,
    img: formProject,
    name: "Form. de Inscrição",
    description:
      "Landpage com tematica de formulário. Apresentando uma área para inscrição de usuário de uma biblioteca.",
    detail: "Estático*, Apenas UX, Institucional, Página Única.",
    link: "https://niaggyn.github.io/cadastro_formulario/",
  },
  {
    ID: 12,
    img: bibliografiaProject,
    name: "Blog Pessoal",
    description:
      "Landpage com tematica de blog pessoal. Apresentando um blog com bibliografia, fotos e contato de uma modelo.",
    detail: "Estático*, Apenas UX, Institucional, Várias páginas.",
    link: "https://github.com/niaggyn",
  },
];

function SliderCard() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="main">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="container h-100"
        slide={false}
      >
        {cardsMobile.map((card) => (
          <Carousel.Item key={card.ID} className="h-100">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={card.img}
                className="object-fit-cover "
              />
              <Card.Body className="h-25">
                <Card.Title className="text-center p-0">
                <a href={card.link} className="link-dark fw-semibold">
                    <button type="button" class="btn btn-info btn-sm">
                      {card.name}
                    </button>
                  </a>
                </Card.Title>
                <hr />
                <Card.Text className=" text-center card_text ">
                  {card.description}
                </Card.Text>
                <ListGroup className="list-group-flush list_info">
                  <ListGroup.Item className=" text-black-50 text-center p-0">
                    {card.detail}
                  </ListGroup.Item>
                </ListGroup>
              
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default SliderCard;
