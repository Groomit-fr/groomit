import React from 'react'
import { useRef, useState } from 'react'
import './Factory.scss'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import { makeRequest } from '../../makeRequest'
import axios from 'axios'

function factory() {

  const form = useRef();
  const message = useRef();


  const sendEmail = async (e) => {

    e.preventDefault();

    var imgId = null;

    const formDataText = new FormData(form.current);
    const data = {
      name: formDataText.get('name'),
      email: formDataText.get('email'),
      phone: formDataText.get('phone'),
      message: formDataText.get('message'),
      file: formDataText.get('file'),
    };

    const imgfile = data.file;
    const formData = new FormData();

    if (imgfile) {
      formData.append('files', imgfile, imgfile.name);

      axios.post(`http://localhost:1337/api/upload`, formData).then(res => {
        imgId = res.data[0].id;

        const resForm = makeRequest.post('/quote-requests', {

          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          file: (imgId) ? imgId : null,

        }).then(response => {
          console.log(response);
          message.current.innerHTML = 'Email envoyé, Groomit reviendra bientôt vers vous !';
        }).catch(error => {
          console.log(error.message);
          message.current.innerHTML = 'Erreur lors de l\'envoi de l\'email, veuillez réessayer plus tard. 1';
        });

      }).catch(error => {
        console.log(error.message);
        message.current.innerHTML = 'Erreur lors de l\'envoi de l\'email, veuillez réessayer plus tard. 2';

      });
    } else {
      const resForm = makeRequest.post('/quote-requests', {

        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        file: (imgId) ? imgId : null,

      }).then(response => {
        console.log(response);
        message.current.innerHTML = 'Email envoyé, Groomit reviendra bientôt vers vous !';
      }).catch(error => {
        console.log(error.message);
        message.current.innerHTML = 'Erreur lors de l\'envoi de l\'email, veuillez réessayer plus tard. 3';
      });
    }
  };

  return (
    <section className='factory'>
      <section className='factory__top'>
        <section className='factory__top__text'>
          <h1>Groomit Factory</h1>
          <p>
            Imaginez un t-shirt.... Il est doux... Il est confortable, il est fait avec les matières premières Groomit,
            la qualité Groomit, et tout le savoir faire de Groomit. Il ne manque plus qu’un détail pour qu’il soit parfait : un peu de vous... <br />
            Personnalisez vos t-shirts et hoodies en envoyant votre idée à Groomit à l’aide du formulaire ci-dessous.
          </p>
        </section>
        <section className='factory__top__illu'>
          <img className='factory__top__illu__shirt' src="/svg/Factory/factoryShirt.svg" alt="" />
          <img className='factory__top__illu__rope' src="/svg/List/rope.svg" alt="" />
        </section>
      </section>
      <form className='factory__form' ref={form} onSubmit={sendEmail}>
        <section className='factory__form__input'>
          <label htmlFor="name">Nom - Prénom</label>
          <input type="text" name="name" id="name" required />
        </section>
        <section className='factory__form__input'>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" required />
        </section>
        <section className='factory__form__input'>
          <label htmlFor="phone">Numéro de téléphone</label>
          <input type="tel" name="phone" id="phone" pattern='[0-9]{9,10}' />
        </section>
        <section className='factory__form__input'>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="80" rows="10" required />
        </section>
        <section className='factory__form__input__file'>
          <label htmlFor="file">Designs & Références</label>
          <div>
            <label htmlFor="file" className='factory__form__input__file__selector'>
              <img src="/svg/Factory/upload.svg" alt="" />
              <p>Joindre un fichier</p>
            </label>
            <input type="file" name="file" id="file" />
          </div>

        </section>
        <section className='factory__form__input button'>
          <PrimaryButton type="submit" title="Envoyer" />
          <p ref={message}></p>
        </section>

      </form>
    </section>

  )
}

export default factory