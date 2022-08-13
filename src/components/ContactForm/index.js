import React from 'react';
import './contact-form.scss';

function ContactForm() {
  return (
    <div className="contact-form">
      <section className="content">
        <div className="form-header">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact Me
          </h2>
          <p className="text-center w-responsive text-center">
            Do you have any questions or are looking to collaborate? Please do
            not hesitate to contact me directly.
          </p>
        </div>
        <div className="row">
          <div className="">
            <form id="contact-form">
              <div className="row">
                <div className="contact-input-container">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <label for="name" className="">
                    Your name
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="contact-input-container">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <label for="email" className="">
                    Your email
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="contact-input-container">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                  ></textarea>
                  <label for="message">Your message</label>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left">
              <button className="contact-btn mt-3">Get in Touch</button>
            </div>
            <div className="status"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
