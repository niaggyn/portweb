import Navbar from "../components/Navbar";
import Nextpag from "../components/Nextpag";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-scroll";

//img
import logoMobile from "../img/logoMobile.png";
import msg from "../img/bemVindo.svg";

//style
import "../styles/components/home.sass";

const Home = () => {
  return (
    <>
      <section className="home container" id="home_container">
        <div>
          <Navbar />
        </div>
        <div id="home_content">
          <div id="logo">
            <img src={logoMobile} alt="NiaggyWebDeveloper" />
          </div>
          <div id="apresentation container">
            <div id="profile_apresentation">
              <div id="msg_home">
                <img src={msg} alt="Bem-Vindo" />
                <div id="foto"></div>
                <p className="fw-normal text-decoration-none">
                  Bem-vindo(a) ao meu portfólio. Sou Niaggy Novoa, um profissional com uma formação única que combina
                  a lógica precisa da Engenharia da Computação com a solidez do Tecnólogo em Construção de Edifícios. 
                  Minha paixão é criar a ponte entre o mundo físico e o digital, desenvolvendo soluções que não 
                  apenas funcionam, mas também inovam.
                  Neste espaço, você descobrirá uma seleção de projetos que refletem meu comprometimento com a 
                  excelência técnica e a criatividade. De sistemas embarcados que otimizam o desempenho a experiências 
                  imersivas com realidade aumentada, e de aplicativos móveis intuitivos a sistemas web robustos, cada trabalho 
                  é uma prova de como a tecnologia pode ser aplicada para resolver desafios complexos.
                  Convido você a mergulhar nos detalhes de cada projeto e a testemunhar como transformo ideias em realidade,
                  construindo o futuro, um bit de cada vez. Agradeço a sua visita e, sempre que possível, volte aqui.
                </p>
              </div>
              <div id="perfil">
                <div id="perfil_left"></div>
                <div id="perfil_right">
                  <a
                    href="https://github.com/niaggyn"
                    alt="github"
                    rel="noopener"
                    onClick={() => window.open("https://github.com/niaggyn")}
                  >
                    <BsGithub />
                    <p>niaggynovoa</p>
                  </a>
                  <a
                    href="http://www.linkedin.com/in/niaggy-novoa-296497b4/"
                    alt="linkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => window.open("http://www.linkedin.com/in/niaggy-novoa-296497b4/")}
                  >
                    <BsLinkedin />
                    <p>niaggynovoa</p>
                  </a>
                </div>
              </div>
              <div id="social-medias">
                <div id="link_content">
                  <a
                    href="http://www.instagram.com/niaggynovoa/"
                    id="link_contact"
                    target="_blank"
                    alt="Instagram"
                    onClick={() => window.open("http://www.instagram.com/niaggynovoa/")}
                  >
                    <BsInstagram />
                    <p>@niaggysilva</p>
                  </a>
                </div>
                <div id="link_content">
                  <a
                    href="http://www.linkedin.com/in/niaggy-novoa-296497b4/"
                    id="link_contact"
                    target="_blank"
                    alt="linkedIn"
                    onClick={() => window.open("http://www.linkedin.com/in/niaggy-novoa-296497b4/")}
                  >
                    <BsLinkedin />
                    <p>niaggysilva</p>
                  </a>
                </div>
                <div id="link_content">
                  <a
                    href="http://github.com/niaggyn"
                    id="link_contact"
                    target="_blank"
                    alt="github"
                    onClick={() => window.open("https://github.com/niaggyn")}
                  >
                    <BsGithub />
                    <p>niaggysilva</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="nextPagHome">
            <Link
              to="projets_container"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Nextpag />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
