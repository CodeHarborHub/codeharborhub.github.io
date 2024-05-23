import React from 'react';
import Layout from "@theme/Layout";
import styles from './styles.module.css';

/**
 * Contact Us Page
 */

const Contact = () => {
  return (
    <Layout>
      <h1 style={{marginLeft: '2rem', marginTop: '1rem'}}>Contact Us</h1>
      <div className={styles.division}>
      <form className={styles.myform}>
        <label className={styles.mylabel} htmlFor="name">Name</label>
        <input placeholder='Enter your name' className={styles.myinput} type="text" name="user_name" />
        <label className={styles.mylabel} htmlFor="email">Email</label>
        <input placeholder='Enter your email' className={styles.myinput} type="email" name="user_email" />
        <label className={styles.mylabel} htmlFor="message">Message</label>
        <textarea placeholder='Your message...' className={styles.mytextarea} name="message" />
        <button className={styles.inputsubmit} type="submit">Send</button>
      </form>
      <div className={styles.image}><img src="https://cdn-icons-png.flaticon.com/512/5075/5075578.png" alt="" style={{height: '25rem'}}/></div>
      </div>
    </Layout>
  )
}

export default Contact;
