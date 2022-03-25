import React, { useEffect } from "react";
import styles from "./sitemap.module.css";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../actions/productActions";
import { Link } from "react-router-dom";
const Sitemap = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <div className="container">
        <div className={styles.sitemapInnerWrapper}>
          <h2>Sitemap</h2>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h3>Nootropics</h3>
              {products?.map((product) => (
                <ul className={styles.productsUl} key={product.id}>
                  <li key={product.id} className={styles.products}>
                    <Link
                      to={`/buy-${product.name}-australia`}
                      state={{ productId: product.id }}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <div key={product.id}>{product.name}</div>
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h3>Quick Links</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ul className={styles.productsUl}>
                    <li className={styles.products}>
                      <Link
                        to="/"
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        Home
                      </Link>
                    </li>
                    <li className={styles.products}>
                      <Link
                        to="/blog"
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        Blog
                      </Link>
                    </li>
                    <li className={styles.products}>
                      <Link
                        to="/contact-us"
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li className={styles.products}>
                      <Link
                        to="/faq"
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        Faq
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ul className={styles.productsUl}>
                    <li className={styles.products}>
                      <Link
                        to="/shipping-policy"
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        Shipping
                      </Link>
                    </li>
                    <li className={styles.products}>
                      <Link
                        to="/about-us"
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className={styles.products}>
                      <Link
                        to="/terms-conditions"
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className={styles.products}>
                      <Link
                        to="/refund-policy"
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        Refund Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
