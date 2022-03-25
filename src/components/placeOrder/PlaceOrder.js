import styles from "./placeOrder.module.css";
import React, { useState, useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import Message from "../message/Message";
import emailjs from "@emailjs/browser";
import { getOrderDetails } from "../../actions/orderActions";
import { listOthers } from "../../actions/productActions";
import { Helmet } from "react-helmet";

function PlaceOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const others = useSelector((state) => state.others);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  const [name, setName] = useState(cart.shippingAddress.firstName);
  const [email, setEmail] = useState(cart.shippingAddress.email);

  const [value, setValue] = useState({
    user_name: name,
    user_email: email,
  });
  // =============================================================

  cart.taxPrice = Number(0.082 * cart.itemsPrice).toFixed(2);
  if (others.otherItems) {
    cart.shippingPrice =
      cart.itemsPrice > 150 ? 0 : others.otherItems[0]?.shipping_fee;
    cart.totalPrice = (
      Number(cart.itemsPrice) +
      Number(cart.shippingPrice) +
      Number(cart.taxPrice)
    ).toFixed(2);
  }

  // =============================================================

  useEffect(() => {
    let orderId = JSON.parse(localStorage.getItem("OrderId"));
    let emailSent = JSON.parse(localStorage.getItem("emailSent"));
    dispatch(listOthers());
    if (orderId != null) dispatch(getOrderDetails(orderId));

    if (emailSent !== null) {
      emailjs
        .send("service_dcylj39", "template_8r37lbo", value, "koe0WrRJk3-hzM2ow")
        .then(
          (response) => {
            console.log("SUCCESS!", response);
            localStorage.removeItem("emailSent");
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  }, [dispatch]);

  // =============================================================

  return loading ? (
    <Loading />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div className={styles.checkout}>
      <Helmet>
        <title>Thank you for Order With Modatabs Pharmacy </title>
      </Helmet>
      <div className="container">
        <Row>
          <div className="col-lg-12">
            <h2 className={styles.checkoutHeader}>
              <span>Thank you. Your order has been received.</span>
            </h2>
          </div>
        </Row>

        <div className="px-3 mt-3">
          <p className="lead mt-3">
            We have received your order and will begin processing right away. An
            email confirmation has been sent to{" "}
            <strong>{cart.shippingAddress.email}</strong>.
          </p>
        </div>

        <div className="py-3">
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>Shipping</h3>

                  <p>
                    <strong>Shipping: </strong>
                    {cart.shippingAddress.firstName}{" "}
                    {cart.shippingAddress.lastName},{" "}
                    {cart.shippingAddress.email}, {cart.shippingAddress.phoneNo}
                    , {cart.shippingAddress.addressLine1},{" "}
                    {cart.shippingAddress.addressLine2},{" "}
                    {cart.shippingAddress.state}, {cart.shippingAddress.town}{" "}
                    {cart.shippingAddress.postCode},{" "}
                    {cart.shippingAddress.shippingCountry}
                  </p>
                </ListGroup.Item>

                <ListGroup.Item>
                  <h3>Payment Method</h3>
                  <p>
                    <strong>Method: </strong>
                    {order?.paymentMethod}
                  </p>
                </ListGroup.Item>

                <ListGroup.Item>
                  <h3>Order Items</h3>
                  {order?.orderItems?.length === 0 ? (
                    <Message variant="info">No Ordered Items</Message>
                  ) : (
                    <ListGroup variant="flush">
                      {order.orderItems.map((item, index) => (
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                              <Image src={item.image} alt="Img" fluid rounded />
                            </Col>

                            <Col>
                              <Link
                                className={styles.linkStyle}
                                to={`/product/${item.name}`}
                              >
                                <p>
                                  {item.name}, {item.tablets} Pills, (
                                  {item.strength}mg)
                                </p>
                              </Link>
                            </Col>

                            <Col md={4}>
                              {item.packets} x {item.price} = AUD{" "}
                              {(item.packets * item.price).toFixed(2)}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2>Order Summary</h2>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Items Total:</Col>
                      <Col>
                        AUD{" "}
                        {(order.totalPrice - order.shippingPrice).toFixed(2)}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Free Pills:</Col>
                      <Col>{order.freePills}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping:</Col>
                      <Col>
                        {order.shippingPrice === 0 ? "" : "AUD"}{" "}
                        {order.shippingPrice === 0
                          ? "Free"
                          : order.shippingPrice}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Total:</Col>
                      <Col>AUD {order.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    {error && <Message variant="danger">{error}</Message>}
                  </ListGroup.Item>

                  {/* <ListGroup.Item>
                                    <div className="row">
                                        <div className={styles.continueShopping}>
                                            <Button
                                                id="submit-btn"
                                                type="submit"
                                                className="btn"
                                            >
                                                Continue Shopping
                                            </Button>
                                        </div>
                                    </div>
                                    </ListGroup.Item> */}
                </ListGroup>
              </Card>
              <div className={styles.continueShopping}>
                <Link to="/">
                  <Button id="submit-btn" type="submit" className="btn my-3">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
