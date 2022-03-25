import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../assets/images/Moda (2).png";
import { listBlogs } from "../../actions/blogActions";
import Dropdown from "react-bootstrap/Dropdown";
import ArrowScrollToTop from "../arrowScrollToTop/ArrowScrollToTop";
import { listProducts } from "../../actions/productActions";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const blogList = useSelector((state) => state.blogList);
  const { blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
    dispatch(listProducts());
  }, [dispatch]);

  const [scrollState, setScrollState] = useState();
  const [hamburger, setHamburger] = useState("false");

  const clickHandler = () => {
    if (hamburger === "true") {
      setHamburger("false");
    } else {
      setHamburger("true");
    }
  };
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      <ArrowScrollToTop />
      <div className={styles.header}>
        <div className="container">
          <nav className={styles.headerWrapper}>
            <div className={styles.mobNav}>
              <div className={styles.logo}>
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div>
                <ul className={styles.hamUl}>
                  <li>
                    <label
                      className={
                        hamburger === "false"
                          ? `${styles.humbergButton}`
                          : `${styles.humbergButton}`
                      }
                      onClick={clickHandler}
                    >
                      <span
                        className={
                          hamburger === "false"
                            ? `${styles.topbar}`
                            : `${styles.topbarab}`
                        }
                      ></span>
                      <span
                        className={
                          hamburger === "false"
                            ? `${styles.middlebar}`
                            : `${styles.middlebarab}`
                        }
                      ></span>
                      <span
                        className={
                          hamburger === "false"
                            ? `${styles.bottombar}`
                            : `${styles.bottombarab}`
                        }
                      ></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.navbar}>
              <div className={styles.rightWrapper}>
                {/* <div className={styles.cartTop}>
                  <div className={styles.myCart}>
                    <Link to="/" className={styles.myCartInner}>
                      Cart - (0)
                      <i
                        className={`fa fa-shopping-cart ${styles.cartIcon}`}
                      ></i>
                    </Link>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div>
                  <ul className={styles.navbarUl}>
                    <li className={styles.navbarItems}>
                      <Link className={styles.navbarLink} to="/">
                        <i className={`fa fa-home`}></i>
                        HOME
                      </Link>
                    </li>
                    {/* <li className={styles.navbarItems}>
                      <Link className={styles.navbarLink} to="/">
                        ABOUT US
                      </Link>
                    </li> */}
                    {/* <li className={styles.navbarItems}>
                      <div
                        className={`${styles.navbarLink} ${styles.dropdown}`}
                      >
                        <Link to="/smart-pills" className={styles.smartPills}>
                          SMART PILLS
                        </Link>
                        <div className={styles.dropdownContent}>
                          {products?.map((product) =>   
                            <div>
                              <Link to={`/product/${product.id}`} style={{textDecoration: 'none', color: 'white'}}> 
                              <div  key={product.id}>{product.name}</div>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </li> */}

                    <li className={styles.navbarItems}>
                      <div
                        className={`${styles.navbarLink} ${styles.dropdown}`}
                      >
                        <Link to="/nootropics" className={styles.smartPills}>
                          NOOTROPICS
                        </Link>

                        {/* <div className={styles.dropdownContent}>
                          {products?.map((product) => (
                              <div>
                                <Link
                                    to={`/buy-${product.name}-australia`}
                                    state={{productId: product.id}}
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                  >
                                  <div  key={product.id}>{product.name}</div>
                                </Link>
                              </div>
                            ))}
                        </div> */}

                        <div className={styles.dropdownContent}>
                          {products?.map((product) => (
                            <div key={product.id} onClick={refreshPage}>
                              <Link
                                to={`/buy-${product.name}-australia`}
                                state={{ productId: product.id }}
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                              >
                                <div key={product.id}>{product.name}</div>
                              </Link>
                            </div>
                          ))}
                        </div>

                        {/* <div className={styles.dropdownContent}>
                          {products?.map((product) => (
                              <div
                                key={product}
                                onClick={() =>
                                  handleProducts(product.id, product.name)
                                }
                              >
                                {product.name}
                              </div>  
                            ))}
                        </div> */}
                      </div>
                    </li>

                    <li className={styles.navbarItems}>
                      <Link className={styles.navbarLink} to="/shipping-policy">
                        SHIPPING
                      </Link>
                    </li>

                    {blogs && blogs.length !== 0 && (
                      <li className={styles.navbarItems}>
                        <Link className={styles.navbarLink} to="/blog">
                          BLOG
                        </Link>
                      </li>
                    )}

                    <li className={styles.navbarItems}>
                      <Link className={styles.navbarLink} to="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li className={styles.navbarItems}>
                      <Link className={styles.navbarLink} to="/contact-us">
                        CONTACT US
                      </Link>
                    </li>
                    <li className={styles.navbarItems}>
                      <div className={styles.myCart1}>
                        <Link to="/add-to-cart" className={styles.myCartInner1}>
                          CART - ({cartItems.length})
                          <i
                            className={`fa fa-shopping-cart ${styles.cartIcon}`}
                          ></i>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {hamburger === "true" ? (
                <div className={styles.wrapper}>
                  <ul className={styles.sideBarUl}>
                    <li
                      className={styles.navbarItemsAg}
                      style={{ margin: "20px 0 !important" }}
                    >
                      <Link className={styles.navbarLink} to="/">
                        HOME
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      {/* <div
                        className={`${styles.navbarLink} ${styles.dropdown}`}
                      >
                        <Link to="/smart-pills" className={styles.smartPills}>
                          NOOTROPICS
                        </Link>
                        <div className={styles.dropdownContent}>
                          {products?.map((product, index) => (
                            <Link
                              to={`/product/${product.id}`}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <div key={product.id}>{product.name}</div>
                            </Link>
                          ))}
                        </div>
                      </div> */}
                      <div className="dropdown1">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            <Link to="/smart-pills"> NOOTROPICS</Link>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            {products?.map((product) => (
                              <div key={product.id} onClick={refreshPage}>
                                <Link
                                  className="ll2"
                                  to={`/buy-${product.name}-australia`}
                                  state={{ productId: product.id }}
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                    fontSize: "13px",
                                    borderBottom: "1px solid black",
                                  }}
                                >
                                  <div key={product.id} className="ddx2">
                                    {product.name}
                                  </div>
                                </Link>
                              </div>

                              // <Link
                              //   className="ll2"
                              //   to={`/buy-${product.name}-australia`}
                              //   state={{productId: product.id}}
                              //   style={{
                              //     textDecoration: "none",
                              //     color: "white",
                              //     fontSize: "13px",
                              //     borderBottom: "1px solid black",
                              //   }}
                              // >
                              // <div key={product.id} className="ddx2">
                              //   {product.name}
                              // </div>
                              // </Link>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </li>

                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/shipping-policy">
                        SHIPPING
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/blog">
                        BLOG
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/contact-us">
                        CONTACT US
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <div className={styles.myCart1}>
                        <Link to="/cart" className={styles.myCartInner1}>
                          CART - ({cartItems?.length})
                          <i
                            className={`fa fa-shopping-cart ${styles.cartIcon}`}
                          ></i>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className={styles.wrapperab}>
                  <ul className={styles.sideBarUl}>
                    <li
                      className={styles.navbarItemsAg}
                      style={{ margin: "20px 0 !important" }}
                    >
                      <Link className={styles.navbarLink} to="/">
                        HOME
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <div
                        className={`${styles.navbarLink} ${styles.dropdown}`}
                      >
                        <Link to="/smart-pills" className={styles.smartPills}>
                          NOOTROPICS
                        </Link>
                        <div className={styles.dropdownContent}>
                          {products?.map((product) => (
                            <div key={product.id}>
                              <Link
                                to={`/buy-${product.name}-australia`}
                                state={{ productId: product.id }}
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                              >
                                <div key={product.id}>{product.name}</div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/shipping-policy">
                        SHIPPING
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/">
                        BLOG
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/contact-us">
                        CONTACT US
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <div className={styles.myCart1}>
                        <Link to="/cart" className={styles.myCartInner1}>
                          CART - ({cartItems?.length})
                          <i
                            className={`fa fa-shopping-cart ${styles.cartIcon}`}
                          ></i>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
