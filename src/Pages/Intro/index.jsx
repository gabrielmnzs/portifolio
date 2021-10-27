import "./styles.scss";

import { ReactComponent as Logo } from "./../../assets/img/Logo.svg";

function Intro() {
  return (
    <section className="wrapper">
      <h3 className="wrapper__title">Gabriel Menezes</h3>
      <p className="wrapper__subtitle">Desenvolvedor & Designer</p>
      <figure className="wrapper__logo">
        <Logo />
      </figure>
    </section>
  );
}

export default Intro;
