import React from 'react';
import './ContactForm.css';


const ContactForm = () => {
  return (
    <div className='contact-form-content'>
      <form className='form'>
        <div className="name-container">
          <input type='text' name='firstname' placeholder='First Name'>
          </input>
          <input type='text' name='lastname' placeholder='Last Name'>
          </input>
          </div>

          <input type='text' name='email' placeholder='Email'>
          </input>
          <textarea type="Text" name='messages' placeholder='Message' rows={3}>
          </textarea>
          <button type='submit'>SEND</button>
        
      </form>
    </div>
  );
};

export default ContactForm
