import C from "../img/c";
import Java from "../img/java";
import CPLUSPLUS from "../img/cplusplus";
import { SiSpring } from "react-icons/si";
import { GiCpuShot } from "react-icons/gi";
import { FaUnity } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { DiAndroid } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaGit } from "react-icons/fa";

import "../styles/components/fourthCard.sass";

const programmer = [
  { name: "C", icon: <C /> },
  { name: "Java", icon: <Java /> },
  { name: "C++", icon: <CPLUSPLUS /> },
  { name: "Android", icon: <DiAndroid /> },
  { name: "Spring", icon: <SiSpring /> },
  { name: "Sis. Emb.", icon: <GiCpuShot /> },
  { name: "Unity", icon: <FaUnity /> },
  { name: "Python", icon: <AiOutlinePython /> }, 
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGit /> }
];

const FourthCard = () => {
  return (
    <div className="cardsecondary_block">
      {programmer.map((design) => (
        <a className="cardsecondary" id={design.name} key={design.name}>
          {design.icon}
          <h3>{design.name}</h3>
        </a>
      ))}
    </div>
  );
};

export default FourthCard;
