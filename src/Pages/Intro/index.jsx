import "./styles.scss";

import { ReactComponent as Logo } from "./../../assets/img/Logo.svg";

const Intro = () => {
  return (
    <section className="intro">
      <figure>
        <Logo />
      </figure>
      <h3 className="intro__title">Gabriel Menezes</h3>
      <p className="intro__subtitle">Desenvolvedor & Designer</p>
    </section>
  );
};

export default Intro;
