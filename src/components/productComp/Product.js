import React, { useState, useEffect } from "react";
import styles from "./productComp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  Alert,
  Form,
  Row,
  Col,
  Image,
  Table,
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";

import TextField from "@mui/material/TextField";
import { Helmet } from "react-helmet";

import Loading from "../loading/Loading";
import Message from "../message/Message";
import ReactStars from "react-rating-stars-component";
import Rating from "@mui/material/Rating";

import { useLocation, Link } from "react-router-dom";

import { addToCart } from "../../actions/cartActions";
import {
  listProductDetails,
  createProductReview,
} from "../../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../constants/productConstants";
import { listOthers } from "../../actions/productActions";

function Product({ match }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [loader, setLoader] = useState(false);

  const [strengthValue, setStrengthValue] = useState(0);

  // const [strength, setStrength] = useState(0);

  const navigate = useNavigate();
  // const productId = useParams().id;

  // -------------------------------------
  const location = useLocation();
  const { productId } = location.state;
  // -------------------------------------

  // ================================================================

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingProductReview,
    error: errorProductReview,
    success: successProductReview,
  } = productReviewCreate;

  const others = useSelector((state) => state.others);

  // ================================================================

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  // const handleChange = (val) => setStrength(val);

  // ================================================================

  useEffect(() => {
    if (successProductReview) {
      setName("");
      setEmail("");
      setRating(0);
      setComment("");
      setValue(product.rating);
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
      handleShowAlert();
    }

    dispatch(listProductDetails(productId));
    dispatch(listOthers());
  }, [dispatch, match, successProductReview, rating]);
  // ================================================================

  useEffect(() => {
    if (product?.strength?.length) {
      setStrengthValue(product?.strength[0]?.strength);
    }
  }, [dispatch, product?.strength?.length]);

  // ================================================================
  let qty = 1;

  const addTocarthandler = (tablets, totalPrice) => {
    if (strengthValue === 0) {
      alert("Please select Strength");
      return;
    } else {
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

      navigate("/add-to-cart");
    }
  };

  const reviewSubmitHandler = (e) => {
    e.preventDefault();

    // localStorage.setItem('booking', JSON.stringify({
    //   name: name,
    //   email: email,
    //   rating: rating,
    //   comment: comment,
    // }))

    dispatch(
      createProductReview(productId, {
        name: name,
        email: email,
        rating: rating,
        comment: comment,
      })
    );
  };

  //   function handler(e) {
  //     navigate('/' + e.link)
  // }

  // =============================================

  return (
    <div className={styles.mainDiv}>
      <Helmet>
        <title>{product?.seo_title}</title>
        <meta name="description" content={product?.seo_description} />
      </Helmet>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="container">
          {product && product?.length !== 0 ? (
            <div className={styles.productMainDiv}>
              <Row>
                <Col md={4} className={styles.imgWrap}>
                  <div>
                    <Image
                      src={product.image}
                      fluid
                      rounded
                      className={styles.productImageDiv}
                    ></Image>
                  </div>
                </Col>
                <Col md={8}>
                  <Row className={styles.productNameDiv}>
                    <Col md={8}>
                      <h1 className={styles.headingDecor}>
                        {product.name} {product.productStrength}mg
                      </h1>
                    </Col>
                    <Col md={4}>
                      <div className={styles.productRating}>
                        <Rating
                          name="simple-controlled"
                          value={product.rating}
                          readOnly
                        />
                        <p>({product.numOfReviews} Reviews)</p>
                      </div>
                    </Col>
                  </Row>
                  <p className={styles.productBrandText}>
                    BRAND: {product.brand}
                  </p>
                  <p>{product.description}</p>

                  <div className={styles.productStrengthDiv}>
                    <h5>SELECT STRENGTH </h5>
                    {product.countInStock !== 0 ? (
                      <ButtonGroup className={styles.productStrengthBtn}>
                        {product?.strength?.map((radio, idx) => (
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="outline-dark"
                            name="radio"
                            value={radio.strength}
                            checked={strengthValue === radio.strength}
                            onChange={(e) =>
                              setStrengthValue(e.currentTarget.value)
                            }
                          >
                            {radio.strength}mg
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                    ) : (
                      <p>Out of Stock</p>
                    )}
                  </div>

                  <div>
                    <Table striped bordered>
                      <thead>
                        <tr className={styles.tableHeader}>
                          <th>Tablets</th>
                          <th>Total Price</th>
                          <th>Per Tablet</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className={styles.tableBody}>
                        {product?.tablets?.map((x) => (
                          <tr key={x.id} className={styles.tableRow}>
                            <td>
                              {x.tablets}{" "}
                              {x.price < 200
                                ? ""
                                : "+ " +
                                  others.otherItems[0]?.free_pills +
                                  " Free"}
                            </td>
                            <td>AUD {x.price}</td>
                            <td>
                              AUD{" "}
                              {(
                                x.price /
                                (x.tablets +
                                  (x.price > 200
                                    ? others.otherItems[0]?.free_pills
                                    : 0))
                              ).toFixed(2)}
                            </td>

                            <td>
                              <Button
                                className={styles.tableBtn}
                                // disabled={strengthValue === 0}
                                onClick={() =>
                                  addTocarthandler(
                                    x.tablets,
                                    Number(x.price).toFixed(2)
                                  )
                                }
                              >
                                Buy Now
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Col>
              </Row>
            </div>
          ) : (
            <p className="text-center py-3">No product available</p>
          )}

          {product && product.reviews?.length !== 0 && (
            <div className="container py-3">
              <div className="card pro-img">
                <div
                  className="card-header pro-img"
                  style={{
                    backgroundColor: "rgb(131, 185, 58)",
                    color: "white",
                  }}
                >
                  <h5>Description</h5>
                </div>

                <div className="card-body">
                  <>
                    {product &&
                      product.content.map((x) => (
                        <div key={x.id}>
                          <h3 className={styles.productDetailsHeader}>
                            {x.heading}
                          </h3>
                          {/* <p onClick={() => {handler(x)}} style={{color: 'blue', cursor: 'pointer'}}>
                            Click to view more
                        </p> */}
                          {x.link && (
                            <p>
                              View <a href={x.link}>More</a>
                            </p>
                          )}
                          <p className={styles.productDetailsPara}>
                            {x.content}
                          </p>
                        </div>
                      ))}
                  </>
                </div>
              </div>
            </div>
          )}

          <div className="container py-3">
            <div className="card pro-img">
              <div
                className="card-header pro-img"
                style={{
                  backgroundColor: "#16374b",
                  color: "white",
                  boxShadow: "0 2px 3px #198754",
                }}
              >
                <h5>Please write a review</h5>
              </div>

              <Alert
                show={showAlert}
                variant="success"
                style={{ backgroundColor: "rgb(131, 185, 58)" }}
                className="mt-2 text-white text-center"
              >
                Your review has been submited for the approval 🙂
              </Alert>

              {successProductReview && (
                <Message variant="success">Review Submitted</Message>
              )}
              {errorProductReview && (
                <Message variant="danger">{errorProductReview}</Message>
              )}

              <div className="card-body">
                <Form onSubmit={reviewSubmitHandler}>
                  <div className="py-2">
                    <ReactStars
                      count={5}
                      value={rating}
                      onChange={setRating}
                      size={34}
                      activeColor="#ffd700"
                    />
                  </div>
                  <Row className={styles.reviewForm}>
                    <TextField
                      className="py-3"
                      id="standard-basic"
                      type="text"
                      label="Name"
                      variant="standard"
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                      className="py-3"
                      id="standard-basic"
                      label="Email"
                      type="email"
                      variant="standard"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                      className="py-3"
                      id="filled-multiline-static"
                      rows={4}
                      label="Your review"
                      variant="standard"
                      fullWidth
                      multiline
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </Row>
                  <Button
                    id="submit-btn"
                    type="submit"
                    name="button"
                    className="btn btn-success"
                    disabled={
                      name && email && rating !== 0 && comment ? "" : false
                    }
                  >
                    Submit
                  </Button>
                </Form>
              </div>
              <hr style={{ border: "2px solid #000000" }}></hr>

              <div
                className="card-header"
                style={{ background: "transparent" }}
              >
                <h5>Reviews...</h5>
              </div>
              <div className="card-body">
                {product.reviews?.length ? (
                  <>
                    {product.reviews.map((review) => (
                      <div key={review.id}>
                        {review.approve === true && (
                          <ul
                            key={review.id}
                            className="list-group list-group-flush"
                          >
                            <li
                              className="list-group-item d-flex justify-content-between bg-light mb-3"
                              style={{
                                borderColor: "transparent",
                                borderRadius: "0px 15px 15px 15px",
                                boxShadow: "0 1px 2px rgba(0,0,0,0.35)",
                              }}
                            >
                              <div className="col-md-10">
                                <div className={styles.reviewHeader}>
                                  <h5>{review.name}</h5>
                                  <p>
                                    {" - " +
                                      new Date(review.date_added)
                                        .toString()
                                        .substring(0, 10)}
                                  </p>
                                </div>

                                <p className="text-success">{review.comment}</p>
                              </div>
                              <small>
                                <span className="text-muted">
                                  <Rating
                                    name="simple-controlled"
                                    value={review.rating}
                                    readOnly
                                    size="small"
                                  />
                                </span>
                              </small>
                            </li>
                          </ul>
                        )}
                      </div>
                    ))}{" "}
                  </>
                ) : (
                  <>
                    <p>No reviews yet..</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
