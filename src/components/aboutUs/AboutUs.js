import React from "react";
import styles from "./aboutUs.module.css";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <Helmet>
        <title>Read About Modatabs Store | Company Information </title>
        <meta
          name="description"
          content="Read -all the information about Modatabs Pharmacy and its services in Australia. Modatabs is a safe and secure Australian Based Pharmacy."
        />
      </Helmet>
      <div className="container">
        <div className={styles.aboutUsInner}>
          <h2>
            About <span>ModaTabs</span>
          </h2>
          <p>
            ModaTabs.com is a dedicated online pharmacy to cater a wide range of
            popular nootropic medicines including Modafinil and Armodafinil
            variations. The pharmacy offers branded and generic variations of
            nootropic meds which are highly efficient in terms of their
            result-delivering capacity, and low potential for abuse making them
            he safest brain boosters available in the market.
          </p>
          <p>
            We are in collaboration with reputed pharma companies to provide you
            medications that are manufactured under ideal atmosphere and
            complying all quality regulations to ensure that the end products
            are safe and effective. Though we do not have a manufacturing unit,
            we ensure getting all quality checks done prior selling the
            medicines via our web portal. Also, all medications are priced
            fairly.
          </p>
          <h3>
            Why do customers love <span>ModaTabs</span>?
          </h3>
          <h4>Real-time delivery</h4>
          <p>
            We do not just promise, we keep it! Our shipping team is on its toes
            to ensure you get your parcel on time, as promised. There are days
            when we couldn’t do anything to prevent the delay due to unforeseen
            issues such as natural calamities. However, we compensate for the
            same by offering FREE re-shipment and other discount offers.
          </p>
          <h4>24*7 customer support</h4>
          <p>
            Our customer services team is dedicated to extend you support at any
            time of the day. You can call or send an email regarding your query,
            feedback or complaints. Our team surely comes up with a solution.
          </p>
          <h4>Easy refund</h4>
          <p>
            Refund process can be chaotic. But we love our customers and do not
            want them to go through any kind of discomfort. Hence, we have come
            up with a simple land hassle-free refund policy for our customers.
          </p>
          <h4>Pocket-friendly medicines</h4>
          <p>
            Our nootropic range of drugs includes generic version as well. These
            are as effective as their branded parental medicines but kept at low
            price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
