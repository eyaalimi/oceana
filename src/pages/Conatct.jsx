import React , {useRef} from 'react'
import emailjs from '@emailjs/browser';

import './Contact.css'

function Contact(){
    const form =useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5glor9n', 'template_182nc0q', form.current, 'H6e6PosMma-m0KhwD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
  return (
    <>
    
        <div className="containercontact">
            <h2 className="--text-center">Contact us</h2>
            <form ref={form} onSubmit={sendEmail} className="--form-control--card --flex-center --dir-column">
                <input type="text" placeholder='Nom' name='user_name'  required/>
                <input type="email" placeholder='xyz@exemple.com' name='user_email' required/>

                <textarea name='message' cols="30" rows="10"></textarea>
                <button type='submit' className='--btn --btn-primary'>Envoyer</button>
            </form>
        </div>

    </>
  )
}

export default Contact