import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./cart.module.css";
import { Image, Form, ListGroup, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { listOthers } from "../../actions/productActions";
import { Helmet } from "react-helmet";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const others = useSelector((state) => state.others);

  cart.freePills = cart.itemsPrice < 200 ? 0 : others.otherItems[0]?.free_pills;

  if (others.otherItems) {
    cart.shippingPrice =
      cart.itemsPrice > 150 ? 0 : others.otherItems[0]?.shipping_fee;
    cart.totalPrice = (
      Number(cart.itemsPrice) +
      Number(cart.shippingPrice) +
      Number(cart.taxPrice)
    ).toFixed(2);
  }

  // ============================================================

  useEffect(() => {
    dispatch(listOthers());
  }, [dispatch]);

  const updateCarthandler = (
    productId,
    qty,
    tablets,
    totalPrice,
    strengthValue
  ) => {
    localStorage.setItem(
      "bookingDetails",
      JSON.stringify({
        tablets: tablets,
        price: totalPrice,
        strength: strengthValue,
      })
    );

    dispatch(
      addToCart(productId, qty, {
        bookingDetails: JSON.parse(localStorage.getItem("bookingDetails")),
      })
    );
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={styles.cart}>
      <Helmet>
        <title>Safe and Secure Add to Cart of Modatabs Store</title>
        <meta
          name="description"
          content="Check all the information of products you have added in safe cart. Add more products in your cart safely. "
        />
      </Helmet>
      <div className="container">
        <div className={`row ${styles.row1}`}>
          <div className="col-lg-12">
            <h2 className={styles.cartHeader}>
              <span>Shopping Cart</span>
            </h2>
          </div>
        </div>

        {cartItems && cartItems.length === 0 ? (
          <div className={styles.shoppingCart}>
            <h2>Oops! Your cart is Empty 😕</h2>
            <div className={styles.continueShopping}>
              <Link to="/">
                <button className="btn">Continue Shopping</button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className={`row ${styles.row1}`}>
              <div className={`col-lg-12 ${styles.cartTable}`}>
                <div className={styles.tableT}>
                  <table>
                    <tbody>
                      <tr className={styles.greenBg}>
                        <td>S.No</td>
                        <td>Item</td>
                        <td>Pills</td>
                        <td>Packet</td>
                        <td>Total</td>
                        <td>Price/Packet</td>
                        <td>Remove</td>
                      </tr>

                      {cartItems.map((item, i) => (
                        <tr key={item.id}>
                          <td className={styles.sno}>{i + 1}</td>
                          <td>
                            <Image src={item.image} fluid width={110}></Image>
                            <p>{item.name}</p>
                          </td>
                          <td>
                            <p>
                              {item.obj.bookingDetails.strength}mg x{" "}
                              {item.obj.bookingDetails.tablets} Pills
                            </p>
                          </td>
                          <td>
                            <Form.Select
                              as="select"
                              value={item.qty}
                              onChange={(e) =>
                                updateCarthandler(
                                  item.product,
                                  Number(e.target.value),
                                  item.obj.bookingDetails.tablets,
                                  item.obj.bookingDetails.price,
                                  item.obj.bookingDetails.strength
                                )
                              }

                              // onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value), {
                              //   'bookingDetails': JSON.parse(localStorage.getItem('bookingDetails')),
                              // }))}
                            >
                              {[...Array(item.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </Form.Select>
                          </td>
                          <td>
                            $
                            {(item.qty * item.obj.bookingDetails.price).toFixed(
                              2
                            )}
                          </td>
                          <td>${item.obj.bookingDetails.price}</td>
                          <td>
                            <Button
                              type="button"
                              variant="light"
                              onClick={() =>
                                removeFromCartHandler(item.product)
                              }
                            >
                              <i className="fas fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className={styles.grandTotal}>
                  <div className={styles.couponArea}>
                    <div className={styles.coupons}>
                      <Helmet>
                        <title>Modatabs Secure Checkout | Safe Checkout</title>
                      </Helmet>
                      <h3>Apply Coupon Code Here</h3>
                      <div className={`${styles.formGroup}`}>
                        <input
                          type="text"
                          placeholder="Enter Coupon Code Here"
                          className="form-control"
                        ></input>
                        <button className="btn">Submit</button>
                      </div>
                    </div>
                  </div>
                  <ul className={styles.subTotal}>
                    <li>
                      <h6 style={{ fontSize: "16px", fontWeight: "bold" }}>
                        <span>Total Pills:</span>
                        {cartItems.reduce(
                          (acc, item) => acc + item.obj.bookingDetails.tablets,
                          0
                        )}
                      </h6>
                    </li>
                    <li>
                      <h6 style={{ fontSize: "16px", fontWeight: "bold" }}>
                        <span>Free Pills:</span>
                        {cartItems
                          .reduce(
                            (acc, item) =>
                              acc + item.qty * item.obj.bookingDetails.price,
                            0
                          )
                          .toFixed(2) < 200
                          ? 0
                          : others.otherItems[0]?.free_pills}
                      </h6>
                    </li>
                    <li>
                      <h6 style={{ fontSize: "16px", fontWeight: "bold" }}>
                        <span>Express Shipping:</span>

                        {/* {cart.itemsPrice = cartItems.reduce((acc, item) => acc + item.obj.bookingDetails.price * item.qty, 0).toFixed(2)} */}
                        {/* {cart.shippingPrice = (cart.itemsPrice > 150 ? 0 : others.otherItems[0]?.shipping_fee)} */}

                        <p>
                          {(cartItems
                            .reduce(
                              (acc, item) =>
                                acc + item.obj.bookingDetails.price * item.qty,
                              0
                            )
                            .toFixed(2) > 150
                            ? 0
                            : others.otherItems[0]?.shipping_fee) === 0
                            ? ""
                            : "AUD "}

                          {(cartItems
                            .reduce(
                              (acc, item) =>
                                acc + item.obj.bookingDetails.price * item.qty,
                              0
                            )
                            .toFixed(2) > 150
                            ? 0
                            : others.otherItems[0]?.shipping_fee) === 0
                            ? "Free"
                            : cartItems
                                .reduce(
                                  (acc, item) =>
                                    acc +
                                    item.obj.bookingDetails.price * item.qty,
                                  0
                                )
                                .toFixed(2) > 150
                            ? 0
                            : others.otherItems[0]?.shipping_fee}
                        </p>
                      </h6>
                    </li>
                    <li style={{ fontSize: "18px", fontWeight: "bold" }}>
                      <span>Grand Total: </span>
                      AUD{" "}
                      {cartItems
                        .reduce(
                          (acc, item) =>
                            acc + item.qty * item.obj.bookingDetails.price,
                          0
                        )
                        .toFixed(2)}
                    </li>
                    {/* <li style={{ fontSize: "18px", fontWeight: "bold" }}>
                      <span>Grand Total :</span>
                      <div className={styles.total}>$xyz</div>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className={`row ${styles.row1}`}>
              <div className={`col-lg-12 ${styles.continueShopping}`}>
                <Link to="/">
                  <button className="btn me-2">Continue Shopping</button>
                </Link>
                <Link to="/secure-checkout">
                  <button className="btn">Proceed to Checkout</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
