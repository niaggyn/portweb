import { Link } from "react-scroll";
import Navbar from "../components/Navbar";
import Nextpag from "../components/Nextpag";
import TitlePag from "../components/TitlePag";
import SliderCardDesktop from "../components/ProjectPageFiles/desktop/SliderCardDesktop";
import SliderCard from "../components/ProjectPageFiles/SliderCard";

//style
import "../styles/components/projects.sass";


const Projects = ({ ref, img, name, id }) => {
  return (
    <>
      <section id="projets_container" ref={ref}>
        <div>
          <Navbar />
        </div>
        <div id="project-content">
          <div id="project-title">
            <TitlePag title="Projetos" />
          </div>
          <div id="forMobilePreview" className="">
            <div id="project_file">
              <SliderCard />
            </div>

          </div>
          <div id="forDesktopPreview" className="container mr-1">
            <SliderCardDesktop />
          </div>
          <div id="next">
            <Link
              to="abilities_container"
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

export default Projects;
