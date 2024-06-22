import React from 'react';
import './ContactMeCard.css';

const ContactMeCard = ({iconUrl, github, email}) => {
  return (
    
    <div className='contact-details-card' >
      <div className='icon'>
        <img src={iconUrl} alt={""} />
      </div>

      <a href='https://github.com/Kechi-Kenneth' >
      <p>{github}</p>
      </a>
      
      <a href='mailto:kaypluzkechi@gmail.com'>
      <p>{email}</p>
      </a>
    </div>
   
  )
}

export default ContactMeCard;
