'use client';

import styles from './contact.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState('');

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!name) {
      formIsValid = false;
      errors['name'] = 'Please enter your name';
    }

    if (!email) {
      formIsValid = false;
      errors['email'] = 'Please enter your email.';
    } else {
      let lastAtPos = email.lastIndexOf('@');
      let lastDotPos = email.lastIndexOf('.');
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf('@@') === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors['email'] = 'Email is not valid.';
      }
    }

    if (!text) {
      formIsValid = false;
      errors['text'] = 'Please enter your message.';
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(`Name: ${name}, Email: ${email}, Text: ${text}`);
      toast.success('Message sended successfully', {
        position: 'bottom-right',
        autoClose: 2000,
        icon: false,
        hideProgressBar: true,
        className: 'success',
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="container"
      id="contact"
    >
      <h2 className="title mb-10">Contact</h2>
      <form name="contactForm" className={styles.form} onSubmit={handleForm}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <span className={styles.error}>{errors['name']}</span>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span className={styles.error}>{errors['email']}</span>
        <label>Text:</label>
        <textarea
          placeholder="Insert a text here"
          rows="6"
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <span className={styles.error}>{errors['text']}</span>
        <button type="submit">Send</button>
      </form>
      <ToastContainer closeButton={false} />
    </motion.section>
  );
}
