import React from "react";

function Contact() {
  return (
    <div>
      <h2>Contact Information</h2>
      <p>Email address: <a href="jackling@mail.com">jackling@mail.com</a></p>
      <p>CV: <a href="path/to/your/CV.pdf" target="_blank">Download</a></p>
      <p>GitHub: <a href="https://github.com/GitJackL" target="">GitJackL</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/" target="">Jack Ling's Profile</a></p>
      <h2>Contact Form</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;