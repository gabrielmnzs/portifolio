import React from "react";

import "./styles.scss";

function Contact() {
  return (
    <section className="contact">
      <h1 className="contact__title">Contato</h1>
      <form className="contact__form" action="">
        <div className="contact__form-group">
          <input className="contact__input" id="input-name" type="text" placeholder="Nome" />
          <label className="contact__label active" for="input-name">
            Nome
          </label>
        </div>
        <div className="contact__form-group">
          <input className="contact__input" id="input-email" type="text" placeholder="E-mail"/>
          <label className="contact__label" for="input-email">E-mail</label>
        </div>
        <div className="contact__form-group">
          <textarea className="contact__input" name="" id="input-menssage" cols="30" rows="10" placeholder="Mensagem"/>
          <label className="contact__label" for="input-menssage">Mensagem</label>
        </div>
        <button className="contact__form__button">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
