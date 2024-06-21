import React from 'react';
import './ContactMe.css';
import ContactMeCard from './ContactMeCard/ContactMeCard';
import ContactForm from './ContactForm/ContactForm';
import { Element } from 'react-scroll';

const ContactMe = () => {
  return (
    <Element name="contact">
<section className='contact-container'>
<h5>Contact Me </h5>
<div className='contact-content'>
<div style={{flex: 1}}>
<ContactMeCard 
  iconUrl="./public/icons8-email-48.png"
  email="Kaypluzkechi@gmail.com"
  />

<ContactMeCard
  github="https://github.com/Kechi-Kenneth"
  iconUrl="./public/icons8-github-24.png"
  
  />

</div>

<div style={{flex: 1}}>
  <ContactForm />
</div>

</div>

</section>
</Element>
  )
}

export default ContactMe
