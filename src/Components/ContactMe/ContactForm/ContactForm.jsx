import React from 'react';
import './ContactForm.css';


const ContactForm = () => {
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("ContactMeForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        const firstName= document.getElementById("first-name").value;
        const lastName =document.getElementById("last-name")
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validate form data
        if (validateForm(firstName, lastName, email, message)) {
            // Handle form data (e.g., send to server, log to console)
            console.log("Form Submitted Successfully!");
            console.log("firstName:", firstName);
            console.log("lastName:", lastName);
            console.log("Email:", email);
            console.log("Message:", message);

            // Optionally, you can reset the form
            form.reset();
        }
    });

    function validateForm(firstName, lastName, email, message) {
        // Check if fields are not empty
        if (firstName === "" ||  lastName === "" || email === "" || message === "") {
            alert("All fields are required.");
            return false;
        }

        // Check email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        return true;
    }
});


  return (

    
    <div className='contact-form-content'>
      <form className='form' id='ContactMeForm'>
        <div className="name-container">
          <input id='first-name' type='text' name='firstname' placeholder='First Name' required>
          </input>
          <input id='last-name' type='text' name='lastname' placeholder='Last Name' required>
          </input>
          </div>

          <input id='email' type='text' name='email' placeholder='Email' required>
          </input>
          <textarea id='message' type="Text" name='messages' placeholder='Message' rows={3} required>
          </textarea>
          <button type='submit'>SEND</button>
        
      </form>
    </div>
  );
};

export default ContactForm
