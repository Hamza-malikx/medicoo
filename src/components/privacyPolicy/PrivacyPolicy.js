import React from "react";
import styles from "./privacyPolicy.module.css";
const PrivacyPolicy = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.privacyPolicyInner}>
          <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
            Privacy Policy
          </h2>
          <p>
            We have crafted our privacy policy in alignment with the laws of
            Australian regulatory bodies in collaboration with the law regarding
            usage and collection of data. When you access our website, you agree
            to the privacy policy along with terms and conditions of our
            company. Our privacy policy is changeable without sending out any
            prior notice. Therefore, we recommend visiting our policy sections
            periodically to stay updated with regards to our operational
            changes.
          </p>
          <h2>The data we collect</h2>
          <p>
            We collect the identifiable data which include banking details and
            personal data of customers. We also collect non-identifiable data –
            IP address, browser name, operating system etc. We collect the data
            for our operational team and the data is non-shareable. We do not
            share your data to third party without your permission. The website
            is encrypted with SSL security software to ensure your data is safe
            with us. We encourage the practice of submitting correct shipping
            address, and other details to ensure smooth shipment process.
          </p>
          <h2>What do we do with the data collected from customers?</h2>
          <p>
            Identifiable and non-identifiable data by us is used to optimize
            customers’ online experience on our website. This helps us
            understand whether our website is user-friendly, efficient, and
            productive. We keep the data with us and use it at certain
            operations such as shipping or refund process. We use email
            addresses to send customers promotional newsletters and emails.
            However, customers can opt out of this service by unsubscribing to
            our mails. It is an easy process. As mentioned earlier, we do not
            share the data to any third party unless required by the law.
          </p>
          <h2>Cookie policy</h2>
          <p>
            We do use cookies to enhance customers’ experience with us. Also,
            this helps service providers associated with us to get access to the
            non-identifiable data of a customer. We have full control over this
            function and thus we can monitor it quite closely. We may also
            disable the permission given to third parties to have access to the
            non-identifiable data of customers at any given time.
          </p>
          <p>
            We are in association with a few third party service providers to
            assure our customers get the best of the online experiences.
            However, we have not given permission to affiliated third parties to
            have access to the identifiable data of customers.
          </p>
          <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
            FAQs
          </h2>
          <h3>Is my data safe with you?</h3>
          <p>
            Yes, your data is absolutely safe with us. Conceding the risks
            involved with online transactions, we have protected our website
            with SSL security software. This software ensures your data stays
            secure with us concealed from third parties.
          </p>
          <h3>Is it mandatory to create an account with your pharmacy?</h3>
          <p>
            It is entirely up to you whether or not to create account with us.
            Although, when you create an account, you get to enjoy certain perks
            as well. These include easy navigation through our website on your
            every visit, seamless order tracking, receiving email notifications
            regarding discount offers, launch of new products, product
            availability, placing orders with ease etc.
          </p>
          <h3>Is it safe to use my debit/credit card?</h3>
          <p>
            Recognizing growing concern for having a secure online environment
            for online shopping portals, we have safeguarded the website with
            the advanced SSL security software that captures the data fed by the
            customer and it is not shared with any third party under any
            circumstances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
