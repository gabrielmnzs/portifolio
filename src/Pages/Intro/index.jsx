import "./styles.scss";

import { ReactComponent as Logo } from "./../../assets/img/Logo.svg";

function Intro() {
  return (
    <section className="intro">
      <h3 className="intro__title">Gabriel Menezes</h3>
      <p className="intro__subtitle">Desenvolvedor & Designer</p>
      <figure className="intro__logo">
        <Logo />
      </figure>
    </section>
  );
}

export default Intro;
