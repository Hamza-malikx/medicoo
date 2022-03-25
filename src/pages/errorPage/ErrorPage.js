import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import errorImg from "../../assets/images/pngfind.com-404-png-6375883.png";
const ErrorPage = () => {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center" }}>
        <img src={errorImg} alt="" className="errorImg" />
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
