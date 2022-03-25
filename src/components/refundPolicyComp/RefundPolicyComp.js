import React from "react";
import styles from "./refundPolicyComp.module.css";
import { Helmet } from "react-helmet";

const RefundPolicyComp = () => {
  return (
    <div className={styles.refundPolicy}>
      <Helmet>
        <title>Read Modatabs Refund Policy | Return and Refund Terms</title>
        <meta
          name="description"
          content="Read all the information about refund and return. We will provide full refund if not delivered in time, missing of parcel and not satisfied with product."
        />
      </Helmet>
      <div className="container">
        <div className={styles.refundPolicyInner}>
          <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
            Refund Policy
          </h1>
          <p className={styles.refundPolicyP1}>
            Modatabs.com has created a customer-centric refund policy to ensure
            easy and smooth refund and return process. If the medicine is
            changed by your doctor or pharmacists, we will not be providing
            refund. However, we can re-ship the medicine for free once you place
            order for the new medicine prescribed by your doctor.
          </p>
          <p className={styles.refundPolicyP1}>
            We take around 5 to 7 business working days to credit the refund
            amount in your credit card account. In some cases, it may take a
            little longer; you can always get connected with our customer care
            team to get detailed information regarding the same.
          </p>
          <h2>Following are some cases where we offer refund:</h2>
          <ul className={styles.list}>
            <li>
              If you receive a damaged parcel or torn parcel. You can claim for
              refund. Our customer care team need images of the torn parcel to
              initiate refund request.
            </li>
            <li>
              If you get medicines past their expiry date, you can claim for
              refund.
            </li>
            <li>
              If the parcel reaches to the wrong address due to error from our
              system, we offer refund or free re-shipment as per your choice and
              convenience.
            </li>
          </ul>
          <h2>Following are scenarios where refund request cannot be made:</h2>
          <ul className={styles.list}>
            <li>
              If the parcel reaches to the wrong address provided by you. We
              request our customers to submit accurate shipping address to avoid
              such incidents.
            </li>
            <li>
              If shipment is delayed to natural calamities and due to the
              ongoing pandemic, refund claim cannot be made.
            </li>
          </ul>
          <h1>FAQs</h1>
          <h3>Do you have a refund policy?</h3>
          <p className={styles.refundPolicyP1}>
            We indeed have a refund policy created for our customers. The motto
            behind creating a customer-centric refund policy is to simplify the
            process for our customers. You can find the refund policy at the
            bottom of the home page of our website. You can also contact our
            customer care team to know more about the same or reach out to them
            if you have any doubts after reading the refund policy.
          </p>
          <h3>How much time will it take to get the refund?</h3>
          <p className={styles.refundPolicyP1}>
            It will take about 10 to 15 working days to get the refund amount
            reflected in your debit/credit card account. The refund process
            takes time in terms of processing and verifying necessary details
            before refund is released.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyComp;
