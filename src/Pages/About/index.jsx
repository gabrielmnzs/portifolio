import React from "react";

import "./styles.scss";
import profile from "./../../assets/images/profile.png";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <figure className="about__image">
          <img src={profile} alt="Gabriel Menezes" />
        </figure>
        <div className="about__content">
          <h1 className="about__content__title">Sobre Mim</h1>
          <p className="about__content__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            semper nunc a dolor sodales mollis. Curabitur semper ante quis massa
            rutrum, quis porttitor orci condimentum. Pellentesque lacinia, augue
            in euismod lacinia, mauris neque ullamcorper mi, et feugiat est
            velit aliquam orci.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
