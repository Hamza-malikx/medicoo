import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import logo from "../../assets/images/footerLogo.png";
// import logo from "../../assets/images/Moda (2).png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className="row justify-content-between">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <div className={styles.leftContent}>
                <div>
                  <img src={logo} alt="" />
                </div>
                <div className={styles.leftContentInnerWrapper}>
                  <ul>
                    <li>
                      <i className="fa fa-home"></i>
                      <span>
                        34 Upper Park Road <br />
                        Salford <br />
                        M7 4GZ
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>
                      <span>1-3-912309</span>
                    </li>
                  </ul>
                  <p className={styles.availability}>
                    Working hours: 8am to 10pm
                  </p>
                  <p className={styles.availability}>
                    Working days:7 days a week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className={styles.middleContent}>
                <h4>Help & Support</h4>
                <ul>
                  <li>
                    <Link to="/about-us" className={styles.middleContentLinks}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy-policy"
                      className={styles.middleContentLinks}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms-conditions"
                      className={styles.middleContentLinks}
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/refund-policy"
                      className={styles.middleContentLinks}
                    >
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/sitemap" className={styles.middleContentLinks}>
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className={styles.middleContent}>
                <h4>EMAIL NEWSLETTER</h4>
                <form>
                  <input
                    type="text"
                    name=""
                    id=""
                    className={styles.newletterInput}
                  />
                  <button className={styles.subsBtn}>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
