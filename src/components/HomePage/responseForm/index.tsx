import React, { useState } from "react";
import style from "./response.module.css";
import emailjs from "emailjs-com";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const ResponseForm = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const [inputData, setInputData] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const updateInputs = (e) => {
    setInputData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: inputData.from_name,
      to_name: inputData.to_name,
      message: inputData.message,
      reply_to: inputData.reply_to,
    };

    emailjs
      .send(
        customFields.serviceId,
        customFields.templateId,
        templateParams,
        customFields.userId
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("There was an error sending your message.");
      });

    setInputData({
      from_name: "",
      to_name: "",
      message: "",
      reply_to: "",
    });
  };

  return (
    <div className={style.response_section}>
      <div className={style.response_image_container}>
        <img
          src="https://img.freepik.com/free-vector/business-meeting-brainstorming-team-people-working-office-corporate-communication-men-women-sitting-negotiating-studying_575670-2062.jpg"
          className={style.response_img}
          alt="Business Meeting"
        />
      </div>

      <div className={style.response_container}>
        <form onSubmit={handleSubmit}>
          <div className={style.response_input}>
            <label htmlFor="from_name" className={style.response_label}>
              Your Name
            </label>
            <input
              id="from_name"
              name="from_name"
              placeholder="Enter your name here"
              value={inputData.from_name}
              type="text"
              className={style.response_input}
              onChange={updateInputs}
            />
          </div>
          <div className={style.response_input}>
            <label htmlFor="to_name" className={style.response_label}>
              Recipient Name
            </label>
            <input
              id="to_name"
              name="to_name"
              placeholder="Enter recipient's name here"
              value={inputData.to_name}
              type="text"
              className={style.response_input}
              onChange={updateInputs}
            />
          </div>
          <div className={style.response_input}>
            <label htmlFor="reply_to" className={style.response_label}>
              Your Email
            </label>
            <input
              id="reply_to"
              name="reply_to"
              placeholder="Enter your email here"
              value={inputData.reply_to}
              type="email"
              className={style.response_input}
              onChange={updateInputs}
            />
          </div>
          <div className={style.response_input}>
            <label htmlFor="message" className={style.response_label}>
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="3"
              cols="50"
              placeholder="Enter your message here"
              value={inputData.message}
              className={style.response_input}
              onChange={updateInputs}
             />
          </div>
          <button type="submit" className={style.response_btn}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResponseForm;
