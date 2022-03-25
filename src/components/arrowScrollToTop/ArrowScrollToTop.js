import React, { useState, useEffect } from "react";
import styles from "./arrowScrollToTop.module.css";
const ArrowScrollToTop = () => {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 650) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [show]);

  return (
    <div
      className={
        show === false
          ? `${styles.arrowScroll} ${styles.hide}`
          : `${styles.active} ${styles.arrowScroll}`
      }
    >
      <div className={styles.arrowScrollWrapper} onClick={scrollToTop}>
        <i className="fas fa-angle-up"></i>
      </div>
    </div>
  );
};

export default ArrowScrollToTop;
