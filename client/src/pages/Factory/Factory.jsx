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
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      file: formData.get('file'),
    };

    const res = await axios.post('http://localhost:1337/api/upload', formData,{
      headers: formData.getHeaders()
    })

    // const resForm = await makeRequest.post('/quote-requests', {

    //   name: data.name,
    //   email: data.email,
    //   phone: data.phone,
    //   message: data.message,
    //   file: 1,

    // });

  };

  return (
    <section className='factory'>
      <section className='factory__top'>

      </section>
      <form ref={form} onSubmit={sendEmail}>
        <section className='factory__form__input'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </section>
        <section className='factory__form__input'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </section>
        <section className='factory__form__input'>
          <label htmlFor="phone">Numéro</label>
          <input type="tel" name="phone" id="phone" />
        </section>
        <section className='factory__form__input'>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
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