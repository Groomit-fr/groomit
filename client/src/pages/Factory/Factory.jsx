import React from 'react'
import { useRef, useState } from 'react'
import './Factory.scss'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import { makeRequest } from '../../makeRequest'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import useFetch from "../../hooks/useFetch";
import emailjs from '@emailjs/browser';


function factory() {

  const form = useRef();
  const message = useRef();

  const { data, loading, error } = useFetch(`/factory-image/?populate=*`);

  const sendEmailGrommit = () => {

    const formDataText = new FormData(form.current);
    const formData = {
      name: formDataText.get('name'),
      email: formDataText.get('email'),
      phone: formDataText.get('phone'),
      message: formDataText.get('message'),
      file: formDataText.get('file'),
    };

    var templateParams = {
      from_name: formData.name,
      message: formData.message,
    };

    emailjs
      .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  }

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

    if (imgfile.size != 0) {
      formData.append('files', imgfile, imgfile.name);

      axios.post(import.meta.env.VITE_API_URL + "/upload", formData).then(res => {
        imgId = res.data[0].id;

        const resForm = makeRequest.post('/quote-requests', {

          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          file: (imgId) ? imgId : null,

        }).then(response => {
          console.log(response);
          sendEmailGrommit();
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
            Imaginez un t-shirt.... Il est doux... Il est confortable, il est fait avec
            la qualité Groomit, et tout le savoir faire de Groomit. Il ne manque plus qu’un détail pour qu’il soit parfait : un peu de vous... <br />
            Personnalisez vos t-shirts et hoodies en envoyant votre idée à Groomit à l’aide du formulaire ci-dessous.
            <br />
            <br />
            Vous pouvez aussi contacter groomit au 06.26.66.30.73
          </p>
        </section>
        <section className='factory__top__illu'>
          <img className='factory__top__illu__shirt' src="/svg/Factory/factoryShirt.svg" alt="" />
          <img className='factory__top__illu__rope' src="/svg/List/rope.svg" alt="" />
        </section>
      </section>


      {data?.attributes.Image.data ?
        <Swiper spaceBetween={30} navigation={true} slidesPerView={2} loop={true}
          modules={[Navigation, Pagination]}
          className="mySwiperFactory"

          breakpoints={{
            // when window width is >= 480px
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 5,
            },
          }}
        >

          {data?.attributes.Image.data.map((image, index) => {
            return (
              <SwiperSlide key={index} >
                <div className='swiperContent'>
                  <img key={index} src={import.meta.env.VITE_UPLOAD_URL + image.attributes.url} alt="T-Shirt Blanc" />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        : null}


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