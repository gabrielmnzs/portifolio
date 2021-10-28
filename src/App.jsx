import "./App.scss";

import { ReactComponent as Logo } from "./assets/img/Logo.svg";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <section className="section-main">
        <div className="logo-container">
          <h2 className="title">Gabriel Menezes</h2>
          <span className="description">Desenvolvedor & Designer</span>
          <Logo className="logo"></Logo>
          {/* <div className="shadow"></div> */}
        </div>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/gabrielmnzs/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="ri-linkedin-box-fill"></i>
          </a>
          <a
            href="https://github.com/gabrielmnzs"
            target="_blank"
            rel="noreferrer"
          >
            <i class="ri-github-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/gm.codes/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="ri-instagram-line"></i>
          </a>
        </div>
        <footer>Em breve</footer>
      </section>
    </>
  );
}

export default App;
