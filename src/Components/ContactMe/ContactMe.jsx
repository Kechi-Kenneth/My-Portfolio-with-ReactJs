import React from 'react';
import './ContactMe.css';
import ContactMeCard from './ContactMeCard/ContactMeCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
<section className='contact-container'>
<h5>Contact Me </h5>
<div className='contact-content'>
<div style={{flex: 1}}>
<ContactMeCard
  iconUrl="./src/assets/icons8-email-48.png"
  text="Kaypluzkechi@gmail.com"
  />

<ContactMeCard
  iconUrl="./src/assets/icons8-github-24.png"
  text="https://github.com/Kechi-Kenneth"
  />

</div>

<div style={{flex: 1}}>
  <ContactForm />
</div>

</div>

</section>
  )
}

export default ContactMe
