import React from "react";
import styles from "./thanks.module.css";
import { Link } from "react-router-dom";

function ThanksComp() {
  return (
    <div className={styles.thanks}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className={styles.checkoutHeader}>
              <span>Order Placed 😊</span>
            </h2>
          </div>
        </div>

        <div className="text-center py-3">
          <h5>Thanks for placing your order</h5>

          <p className="lead mt-3">
            We have received your order and will begin processing right away. An
            email confirmation has been sent to you. It contains details of the
            items you purchased.
          </p>

          <div className={styles.shoppingCart}>
            <div className={styles.continueShopping}>
              <Link to="/">
                <button className="btn">Continue Shopping</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThanksComp;
