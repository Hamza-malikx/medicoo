import React from "react";
import styles from "./faq.module.css";
import { Helmet } from "react-helmet";

const Faq = () => {
  return (
    <div className={styles.mainDiv}>
      <Helmet>
        <title>Read Modatabs FAQs | Frequently Asked Question </title>
        <meta
          name="description"
          content="Read all common frequently asked questions. We tried our best to clear your doubts in our FAQ page of Modatabs Store. "
        />
      </Helmet>
      <div className="container">
        <div className={styles.faqInner}>
          <h1>General and Medicine FAQs</h1>
          <h3>What are nootropic medicines?</h3>
          <p>
            Nootropic medicines are also called as wakefulness enhancers. These
            are used to treat daytime sleepiness. These meds are also called as
            smart drugs because they help boosting cognitive health.
          </p>
          <h3>Are nootropic medicines safe?</h3>
          <p>
            These medicines are FDA approved and thus safe for human
            consumption. However, it is vital to consume these medications under
            medical supervision and for the prescribed period of time.
          </p>
          <h3>Can we consume nootropic medicines daily?</h3>
          <p>
            Yes. You can consume these medications on a regular basis as long as
            it is being monitored by your doctor. Do not overdose on nootropics.
            Also, talk to your doctor if you experience severe side effects with
            these meds.
          </p>
          <h3>Are nootropic medicines available over-the-counter?</h3>
          <p>
            No. These medicines are scheduled IV medicines which mean these
            cannot be obtained without a prescription. Your doctor will diagnose
            your sleep disorder and prescribe these meds if required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
