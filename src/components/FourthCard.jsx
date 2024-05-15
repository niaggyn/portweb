import C from "../img/c";
import Java from "../img/java";
import CPLUSPLUS from "../img/cplusplus";
import { SiSpring } from "react-icons/si";

import "../styles/components/fourthCard.sass";

const programmer = [
  { name: "C", icon: <C /> },
  { name: "Java", icon: <Java /> },
  { name: "C++", icon: <CPLUSPLUS /> },
  { name: "Spring", icon: <SiSpring /> },
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
