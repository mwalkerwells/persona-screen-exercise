import { useContext, useRef, useState } from "react";
import { createContext } from "vm";
import styles from "./card.module.css";
import Logo from "./logo";
import { useGlobalContext } from "./MyGlobalContext";

type State = "Welcome";

const context = createContext({ value: "!" });

const Card = () => {
  const [state, setState] = useState<State>("Welcome");

  const { current } = useRef("!");

  const { copy } = useGlobalContext();

  return (
    <div className={`${styles.container} .center`}>
      <h4>{`${state}${current}${copy}`}</h4>
      <Logo />
    </div>
  );
};
export default Card;
