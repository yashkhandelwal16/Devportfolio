import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div className="social-media-container">
              <SocialMedia />
            </div>
          </div>
          <div className="contact-form-div">
            <form
              action={`https://formsubmit.co/${contactInfo.email_address}`}
              method="POST"
              className="contact-form"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Message from Portfolio Website!"
              />

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows="4"
                  className="form-textarea"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
}

