import Layout from "@theme/Layout";
import styles from "./Contact.module.css";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * Renders the contact page component.
 * @returns {JSX.Element} A JSX element for the contact page.
 */
export default function Contact(): JSX.Element {
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formValues);
  };
  return (
    <Layout>
      <section id="contact" className={styles.main__contact}>
        <div className={styles.main__contact_child1}></div>
        <div className={styles.main__contact_child2}></div>
        <div className={styles.main__contact_container}>
          <div className={styles.main__contact_contains}>
            <div className={styles.main__contact_contains_left}>
              <div className={styles.main__contact_ud_wrapper}>
                <div className={styles.ud_contact_title}>
                  <span className={styles.contact_us}>
                    <b>CONTACT US</b>
                  </span>
                  <h2 className={styles.contact_heading}>
                    Let's talk about your problem.
                  </h2>
                </div>
                <div className={styles.contact_info}>
                  <div className={styles.contact_info_item}>
                    <div className={styles.icon}>
                      <svg
                        width="29"
                        height="35"
                        viewBox="0 0 29 35"
                        className={styles.fill_current}
                      >
                        <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
                        <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className={styles.location_heading}>Our Location</h5>
                      <p className={styles.location_text}>
                        Mandsaur, Madhya Pradesh, India - 458002
                      </p>
                    </div>
                  </div>
                  <div className={styles.contact_info_item}>
                    <div className={styles.icon}>
                      <svg
                        width="34"
                        height="25"
                        viewBox="0 0 34 25"
                        className={styles.fill_current}
                      >
                        <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className={styles.help_heading}>How Can We Help?</h5>
                      <p className={styles.help_text}>
                        ajaydhyangar49@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.main__contact_contains_right}>
              <div className={styles.form_container}>
                <h3 className={styles.form_heading}>Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className={styles.form_group}>
                    <label htmlFor="fullName" className={styles.form_label}>
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Ajay Dhangar"
                      value={formValues.fullName}
                      onChange={handleInputChange}
                      className={styles.form_input}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <label htmlFor="email" className={styles.form_label}>
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      value={formValues.email}
                      onChange={handleInputChange}
                      className={styles.form_input}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <label htmlFor="phone" className={styles.form_label}>
                      Phone*
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="+91 1254 5211 552"
                      value={formValues.phone}
                      onChange={handleInputChange}
                      className={styles.form_input}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <label htmlFor="message" className={styles.form_label}>
                      Message*
                    </label>
                    <textarea
                      name="message"
                      rows={1}
                      placeholder="type your message here"
                      value={formValues.message}
                      onChange={handleInputChange}
                      className={styles.form_textarea}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <button type="submit" className={styles.form_button}>
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
