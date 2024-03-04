import React from 'react'
import { useRef, useState } from 'react'
import './Factory.scss'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import { makeRequest } from '../../makeRequest'
import axios from 'axios'

function factory() {

  const form = useRef();


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
        console.log(res);
        imgId = res.data[0].id;

        const resForm = makeRequest.post('/quote-requests', {

          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          file: (imgId) ? imgId : null,

        }).then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error.message);
        });

      }).catch(error => {
        console.log(error.message);
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
      }).catch(error => {
        console.log(error.message);
      });
    }
  };
  
  return (
    <section className='factory'>
      <section className='factory__top'>

      </section>
      <form ref={form} onSubmit={sendEmail}>
        <section className='factory__form__input'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required/>
        </section>
        <section className='factory__form__input'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required/>
        </section>
        <section className='factory__form__input'>
          <label htmlFor="phone">Numéro</label>
          <input type="tel" name="phone" id="phone" pattern='[0-9]{9,10}' />
        </section>
        <section className='factory__form__input'>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="80" rows="10" required />
        </section>
        <section className='factory__form__input'>
          <label htmlFor="file">file</label>
          <input type="file" name="file" id="file" />
        </section>
        <section className='factory__form__input'>
          {/* <PrimaryButton type="submit" title="Envoyer" /> */}
          <input type='submit' value="send" />
        </section>

      </form>
    </section>
  
  )
}

export default factory