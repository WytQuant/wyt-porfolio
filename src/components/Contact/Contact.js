import { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const doUserFillout = Object.values(formData).every(
      (value) => value !== ''
    );

    if (!doUserFillout) {
      await Swal.fire({
        icon: 'error',
        title: 'Contact form was blank!',
        text: 'You need to fillout required information on the contact form.',
      });
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_USERID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    await Swal.fire({
      icon: 'success',
      title: 'Thankyou for contact me!',
    });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id='contact'>
      <h1 className='contact-title' data-aos='fade-down'>
        Contact
      </h1>
      <div className='contact-input' data-aos='fade-left'>
        <h1 className='contact-input-text'>Want to get in touch?</h1>
        <form onSubmit={sendEmail}>
          <div className='contact-name-email'>
            <div className='contact-name'>
              <label>Name</label>
              <input
                type='text'
                placeholder='Enter your name'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='contact-email'>
              <label>Email</label>
              <input
                type='email'
                placeholder='Enter your email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='contact-message'>
            <label>message</label>
            <textarea
              rows='7'
              placeholder='Enter your message'
              name='message'
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button className='contact-submit' type='submit'>
            Submit
          </button>
        </form>
      </div>
      <div className='contact-icon'>
        <a href='https://github.com/WytQuant' target='_blank' rel='noreferrer'>
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/wytquant/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin />
        </a>
        <a href='mailto:wittawas.ks@gmail.com'>
          <MdEmail />
        </a>
      </div>
    </section>
  );
};

export default Contact;
