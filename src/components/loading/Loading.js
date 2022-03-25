import React from "react";
import loading from "../../assets/images/loading(2).gif";
// import loading from "../../assets/images/pulseLoading.gif";
import styles from "./laoding.module.css";
const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
