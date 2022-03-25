import React, { useEffect } from "react";
import styles from "./productList.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import Message from "../message/Message";
import { listProducts } from "../../actions/productActions";
const ProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <section>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <ul className={styles.productList}>
          {products?.map((x) => (
            <li key={x.id}>
              <div className={styles.productWrapper}>
                <div className={styles.productTag}>
                  <div className={styles.productTagAnch}>
                    {x.name} {x.productStrength}mg
                  </div>
                </div>
                <figure>
                  {/* <Link to={`/product/${x.id}`} data-id={x.id} className={styles.productImg}>
                    <img src={x.image} alt="img" />
                  </Link> */}
                  <Link
                    className={styles.productImg}
                    to={`/buy-${x.name}-australia`}
                    state={{ productId: x.id }}
                  >
                    <img src={x.image} alt="img" />
                  </Link>
                </figure>
                <p>{x.overview}</p>
                <Link
                  to={`/buy-${x.name}-australia`}
                  state={{ productId: x.id }}
                >
                  <button className={styles.shopNowBtn}>Shop Now</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ProductList;
