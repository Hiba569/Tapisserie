import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9po86fs",
        "template_qq9pkie",
        form.current,
        "g0muzZgyGn6RUeIQW"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("msg sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="button" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
