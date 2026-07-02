import React, {useContext, useState} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    fetch(`https://formsubmit.co/ajax/${contactInfo.email_address}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => {
            setStatus("idle");
          }, 3000);
        } else {
          setStatus("error");
          setTimeout(() => {
            setStatus("idle");
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setStatus("error");
        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      });
  };

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
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="form-textarea"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="form-submit-btn"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {status === "submitting" && (
                <p className="form-status form-status-loading">
                  Sending your message...
                </p>
              )}
              {status === "success" && (
                <p className="form-status form-status-success">
                  Message sent successfully! Thank you.
                </p>
              )}
              {status === "error" && (
                <p className="form-status form-status-error">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
}

