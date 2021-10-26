import "./App.scss";

import Navbar from "./components/Navbar";
import { ReactComponent as Logo } from './assets/img/Logo.svg';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <section className="section-main">
        <div className="logo-container">
          <h2 className="title">Gabriel Menezes</h2>
          <span className="description">Desenvolvedor & Designer</span>
          <Logo className="logo"></Logo>
          <div className="shadow"></div>
        </div>
      </section>
    </>
  );
}

export default App;
