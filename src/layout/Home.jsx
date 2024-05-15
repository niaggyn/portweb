import Navbar from "../components/Navbar";
import Nextpag from "../components/Nextpag";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
import {Link} from "react-scroll";

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
            <Navbar/>
          </div>
          <div id="home_content">
            <div id="logo">
              <img src={logoMobile} alt="NiaggyWebDeveloper"/>
            </div>
            <div id="apresentation container">
              <div id="profile_apresentation">
                <div id="msg_home">
                  <img src={msg} alt="Bem-Vindo"/>
                  <div id="foto"></div>
                  <p className="fw-normal text-decoration-none">
                    Olá, sou Niaggy Novoa, um recém-desenvolvedor e entusiasta na área da computação e designer. Formado
                    em Tecnologia em Construção de Edifícios em 2018 e atualmente graduando em Engenharia da Computação
                    pelo Instituto Federal de Ciência e Tecnologia do Maranhão. Apresento um breve resumo da minha
                    trajetória nesse mundo digital neste portfólio. De forma resumida, este portfólio é um dos meus
                    projetos favoritos, pois apresenta os diversos trabalhos e publicações na área de
                    web-desenvolvimento, web-designer e construção civil que venho desenvolvendo, demonstrando do mais
                    simples ao mais complexo. Como tudo está em movimento, este projeto permanece sendo atualizado
                    constantemente. Agradeço a sua visita e, sempre que possível, volte aqui.

                  </p>
                </div>
                <div id="perfil">
                  <div id="perfil_left"></div>
                  <div id="perfil_right">
                    <a
                        href="https://github.com/niaggyn"
                        alt="github"
                        target="_blank"
                        rel="noopener"
                    >
                      <BsGithub/>
                      <p>niaggynovoa</p>
                    </a>
                    <a
                        href="http://www.linkedin.com/in/niaggy-novoa-296497b4/"
                        alt="github"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <BsLinkedin/>
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
                    >
                      <BsInstagram/>
                      <p>@niaggysilva</p>
                    </a>
                  </div>
                  <div id="link_content">
                    <a
                        href="http://www.linkedin.com/in/niaggy-novoa-296497b4/"
                        id="link_contact"
                        target="_blank"
                    >
                      <BsLinkedin/>
                      <p>niaggysilva</p>
                    </a>
                  </div>
                  <div id="link_content">
                    <a
                        href="http://github.com/niaggyn"
                        id="link_contact"
                        target="_blank"
                    >
                      <BsGithub/>
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
                <Nextpag/>
              </Link>
            </div>
          </div>
        </section>
      </>
  );
};

export default Home;
