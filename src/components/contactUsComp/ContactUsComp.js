import React, { useState, useEffect } from "react";
import styles from "./contactUsComp.module.css";
import emailjs from "@emailjs/browser";
import { Alert } from "react-bootstrap";
import { Helmet } from "react-helmet";

const ContactUsComp = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const onInputChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const { name, email, phone, message } = value;

  // ======================================================

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const handleContactForm = (e) => {
    e.preventDefault();
    emailjs
      .send("service_dcylj39", "template_ugv5afr", value, "koe0WrRJk3-hzM2ow")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValue({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          handleShowAlert();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className={styles.contactUs}>
      <Helmet>
        <title>Modatabs Contact Information | Contact Here</title>
        <meta
          name="description"
          content="Contact Modatabs, If you are new and want to know about services in Australia. We provide 24*7 support to our customers in Australia and Globally. "
        />
      </Helmet>
      <div className="container">
        <div className={styles.contactUsInnerWrapper}>
          <h2>Get in touch!</h2>
          <p className={styles.contactUsContent}>
            Lorem ipsum dolor sit amet, con
          </p>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className={styles.addressWrapper}>
                <i className="fa fa-map-marker"></i>
                <p>102 street 2714 Don</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className={styles.addressWrapper}>
                <i className="fa fa-phone"></i>
                <p>102 street 2714 Don</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className={styles.addressWrapper}>
                <i className="fa fa-envelope"></i>
                <p>102 street 2714 Don</p>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleContactForm}>
            <div className={`row`}>
              <Alert show={showAlert} className="text-center alertMessage">
                Thank you for Contacting us 🙂
              </Alert>
              <div className={`col-lg-6 col-md-6 col-sm-6`}>
                <div className={styles.formWrapper}>
                  <label htmlFor="">Your Name</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>
                <div className={styles.formWrapper}>
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>
                <div className={styles.formWrapper}>
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="number"
                    required
                    className="form-control"
                    name="phone"
                    value={phone}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>
              </div>
              <div className={`col-lg-6 col-md-6 col-sm-6`}>
                <div className={`${styles.msgWrapper}`}>
                  <label htmlFor="">Message</label>
                  <textarea
                    className={`form-control ${styles.messageTA}`}
                    required
                    name="message"
                    value={message}
                    onChange={(e) => onInputChange(e)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className={styles.submitBtn}>
                {" "}
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComp;
