import React from "react";
import styles from "./shippingComp.module.css";
import { Helmet } from "react-helmet";
const ShippingComp = () => {
  return (
    <div className={styles.shippingWrapper}>
      <Helmet>
        <title>Read Modatabs Shipping Policy | Shipping Conditions</title>
        <meta
          name="description"
          content="Read all the information of Shipping after placing order with us. Shipping policies contains information regarding shipping days and cost in Australia."
        />
      </Helmet>
      <div className="container">
        <div className={styles.shippingInner}>
          <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
            Shipping Policy
          </h2>
          <p>
            <a href="http://modatabs.com/" style={{ color: "#16374b" }}>
              Modatabs.com
            </a>
            is an online pharmacy dedicated to cater high quality, FDA approved
            nootropic medicines also known as wakefulness promoters. We are the
            one-stop-shop pharmacy for Australia. We also deliver medicines
            across the globe. We aim to provide you effective and
            result-oriented drugs. All medicines displayed on our website are
            FDA and are priced fairly.
          </p>
          <p>
            We have two shipping options – regular and express shipping. The
            time taken for delivery by regular shipping is 10 to 15 business
            days and for express shipping it is 5 to 7 business days. We provide
            FREE shipping for the orders above 150$. For orders above 200$,
            shipping is FREE with 20 pills as an added bonus.
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Please note: </span>
            Due to the ongoing pandemic, shipping has been affected badly. With
            the less attendance at the custom, we face delays in processing the
            parcel delivery. Therefore, we are facing incidents where we face a
            little delay in providing your parcel.
          </p>
          <p>
            We might not be able to send parcels on time due to natural
            calamities, postal delays, strikes, delays due to public holidays
            etc. We do not offer refund for delayed shipping due to the reasons
            mentioned. However, we do offer FREE re-shipment if the parcel gets
            lost in the process or gets stuck at the custom.
          </p>
          <p>
            An order is confirmed within 24 hours. Once it is confirmed, our
            customer care team sends a confirmation email to you. The mail
            includes order details and unique code. This code is useful in
            tracking your order till it reaches you. In case if you are unable
            to track down your order, get in touch with our customer care team.
          </p>
          <p>
            We ship only to the correct address. We do not ship to P.O boxes.
          </p>
          <h1>FAQs</h1>
          <h3>Which countries do you ship to?</h3>
          <p>
            We are based out of Australia and we ship across the globe. To
            ensure a seamless shipping experience, we request our customers to
            check with the legal status of nootropic medicines in your country
            or the country where the products are to be shipped. It helps us to
            complete your order with ease.
          </p>
          <h3>Which are the shipping methods you provide?</h3>
          <p>
            We have deployed two shipping methods – regular and express
            shipping. The former takes about 10 to 15 working days while the
            latter takes 5 to 7 working days. To get more information about the
            same, please feel free to contact our customer care team.
          </p>
          <h3>What are the shipping charges?</h3>
          <p>
            We offer free shipment for orders above 150$. We also offer 20 bonus
            pills for order above 200$. Orders below 150$ are charged at 20$.
          </p>
          <h3>How can I track my order?</h3>
          <p>
            Once your order is confirmed from our end, you receive a
            conformation mail from our customer care team. The mail consists of
            the product details along with the order tracking number. You can
            track your order by signing in your account made with our website.
            You can track down your order without creating an account as well.
            Simply click on “Track My Order” button on the top right of the
            website.
          </p>
          <p>
            You will be able to see the order status once the parcel reaches to
            your country. If you are unable to see the order status, you need to
            wait for 3 to 4 days and re-check it. If you couldn’t track your
            order, please connect with the customer care team.
          </p>
          <h3>How can I cancel my order?</h3>
          <p>
            You can request cancellation within 24 hours of placing order with
            us. Once we confirm the order, it cannot be cancelled.
          </p>
          <h3>What if I don’t get my order on time?</h3>
          <p>
            We strive hard to deliver your order on time regardless of
            challenges we face in the process. Although, there are days when
            delay in shipment is unavoidable. You may face delayed shipment due
            to natural disasters, holiday seasons etc to name a few. Also, the
            ongoing pandemic also one of the reasons you may experience delayed
            shipment. We expect you to cooperate with us during this tough
            phase. You can connect with the customer care team in case of any
            queries, feedbacks, or complaints.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingComp;
