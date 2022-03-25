import React from "react";
import styles from "./termsnCond.module.css";
import { Helmet } from "react-helmet";

const TermsnCond = () => {
  return (
    <div>
      <Helmet>
        <title>Read Modatabs Terms and Conditions </title>
        <meta
          name="description"
          content="Read all terms and conditions of Modatabs Pharmacy. This page helps you understand about the terms and conditions of our website.  "
        />
      </Helmet>
      <div className="container">
        <div className={styles.termsNcondWrapper}>
          <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
            Terms and Conditions
          </h2>
          <p>
            The terms and condition section of ModaTabs explains the rules and
            regulations that a user needs to abide by while accessing the
            website. We recommend reading this section and understand the points
            explained in it. We also recommend not using the website if you do
            not agree with the terms and conditions explained.
          </p>
          <p>
            We hereby announce that by accessing our website, you agree to
            follow the rules and regulations mentioned. We can add, modify or
            delete the terms and conditions without giving any prior
            notification. To stay updated with the latest changes in any type of
            information displayed on, we recommend visiting our website
            periodically.
          </p>
          <h2>Website Usage</h2>
          <p>
            Please refrain from using any kind of automated device, algorithm,
            or methods of data collection to access or monitor any permitted
            portion of the website or the content. You should not copy or
            reproduce our website’s presentation, navigational structure and the
            content displayed on it. Under the terms and conditions, you agree
            not to copy or use information, any material, documents, image from
            our website. Upon finding such activities, we reserve a right to
            impose a lasting ban on such user id. Legal actions could be taken
            if necessary.
          </p>
          <h2>Copyright/Trademark Information</h2>
          <p>
            We have protected our website and its content such as logo, texts,
            images, forms, textual content by copyright rules. You are not
            allowed to copy, edit, share and/or promote our copyrighted contents
            and trademarks without our prior permission.
          </p>
          <h2>Website Uptime</h2>
          <p>
            Our website runs seamlessly on all platforms. A sudden downtime may
            happen due to any technical reason. We shall not be responsible for
            the temporary inconvenience.
          </p>
          <p>
            In certain situations, for example, at the time of periodic
            maintenance, we do notify our customers. However, we shall not be
            obligated to provide a prior notice.
          </p>
          <h2>Limitation, Liability, and Compensation</h2>
          <p>
            We are an online platform to get medicines manufactured by reputed
            manufacturers and associated distributors. We do not give any
            warranty on the products displayed on our website. We are not
            responsible for the content, information, products, ingredients or
            products displayed on the website. You agree to purchase from our
            website at your own decision and risk as approved by pertinent law.
          </p>
          <p>
            You must insure and hold us and our associates, agents,
            shareholders, officers and directors harmless from any type of
            damage, loss, or financial setbacks caused in linkage with the
            claims made by any third party. We keep the right to control the
            settlement, defense and resolution at your own risk.
          </p>
          <h2>Third Party Links</h2>
          <p>
            We have entertained third party links to be displayed on our website
            under special contracts. Please note that we do not support or
            promote these third party links. If a customer wishes to click on
            third party link and explore; we shall not be responsible for any
            damage that occurs after hitting third party links. Any third party
            link you see on our website is not seeking us as its marketing
            partners unless it is been acknowledged by a written agreement.
          </p>
          <p>
            The third party should not forged its relationship with our website
            and other sites which are linked to us. Also, the third party
            websites should not display offensive or controversial content. Any
            damage occur due to such type of linking should be bore by the third
            party website in question.
          </p>
          <h2>Privacy Protection</h2>
          <p>
            Our website is protected with the latest security software that
            ensures safeguarding your data – personal as well as banking
            details. The software protects your data from third parties and
            hackers.
          </p>
          <h2>Refund Policy</h2>
          <p>
            We have a customer-centric refund policy that allows us to repay
            full refund or offer a free re-shipment of products due to
            conditions mentioned in the policy. We recommend reading the refund
            policy displayed on the website.
          </p>
          <h2>About Orders</h2>
          <p>
            All orders are subjected to availability and if any product isn’t
            available, we will notify when it would be available. We keep the
            rights to reject your orders at any given time. You should know that
            any type of automated acknowledgment with respect to your order
            shall not agree to our acceptance of your order request. The
            contract between us will launch when the products will be dispatched
            from us and you will be notified regarding the same via an email – a
            confirmation email – containing product details and an order
            tracking code.
          </p>
          <p>
            All orders being shipped outside Australia may subject to delay
            because of customs of the destination country. We shall not be held
            responsible for delays occur due to customs handlings.
          </p>
          <h2>Prices</h2>
          <p>
            The prices displayed on the website have been set and agreed by the
            seller and the buyer. If the agreement is missing, the prices must
            be listed in the seller’s price list.
          </p>
          <p>
            The seller has kept the rights to discard any discount from the
            regular price and revise the existing price of the product. The
            price can be increased without a prior intimation. The buyer shall
            be accountable to pay the taxes to the seller at the time of buying
            products.
          </p>
          <h2>Payment Options</h2>
          <p>
            Payment options include credit cards, debit cards, bank transfers,
            MasterCard, Visa, and virtual wallets such as Bitcoin, PayPal etc.{" "}
          </p>
          <h2>The Agreement</h2>
          <p>
            This terms and conditions embody the agreement between the buyer
            (you) and the seller (us).
          </p>
          <h2>Disclaimer</h2>
          <p>
            We are a third party drug seller. We do not have a manufacturing
            facility. We obtain medicines from reputed and well-known drug
            manufacturing companies that follow the rules and regulations set by
            the WHO and FDA. The information exhibited on our website regarding
            the medicines we sell is only for educational purpose. The data
            should not be utilized for self-diagnosis. We shall not be held
            accountable for any health issues occur due to self-medication
            practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsnCond;
