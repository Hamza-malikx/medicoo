import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "../components/loading/Loading";
// import ProductPage from "../pages/productPage/ProductPage";
import ScrollToTop from "../components/ScrollToTop";

const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const ProductPage = lazy(() => import("../pages/productPage/ProductPage"));
const ContactUsPage = lazy(() =>
  import("../pages/contactUsPage/ContactUsPage")
);
const CartPage = lazy(() => import("../pages/cartPage/CartPage"));
const CheckoutPage = lazy(() => import("../pages/checkoutPage/CheckoutPage"));
const PaymentPage = lazy(() => import("../pages/paymentPage/PaymentPage"));
const PlaceOrderPage = lazy(() =>
  import("../pages/placeOrderPage/PlaceOrderPage")
);
const ThanksPage = lazy(() => import("../pages/thanksPage/ThanksPage"));
const RefundPolicyPage = lazy(() =>
  import("../pages/refundPolicyPage/RefundPolicyPage")
);
const AboutUsPage = lazy(() => import("../pages/aboutUsPage/AboutUsPage.js"));
const FaqPage = lazy(() => import("../pages/faqPage/FaqPage"));
const PrivacyPolicyPage = lazy(() =>
  import("../pages/privacyPolicyPage/PrivacyPolicyPage")
);
const BlogPage = lazy(() => import("../pages/blogPage/BlogPage.js"));
const BlogDetailPage = lazy(() =>
  import("../pages/blogPage/BlogDetailPage.js")
);
const CategoryPage = lazy(() =>
  import("../pages/categoryPage/CategoryPage.js")
);
const TermsnCondPage = lazy(() =>
  import("../pages/termsnCondPage/TermsnCondPage.js")
);
const ShippingPage = lazy(() =>
  import("../pages/shippingPage/ShippingPage.js")
);
const SitemapPage = lazy(() => import("../pages/sitemapPage/SitemapPage.js"));
const ErrorPage = lazy(() => import("../pages/errorPage/ErrorPage.js"));
const Config = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/contact-us" element={<ContactUsPage />} />
          <Route exact path="/buy-:name-australia" element={<ProductPage />} />
          <Route exact path="/add-to-cart" element={<CartPage />} />
          <Route exact path="/secure-checkout" element={<CheckoutPage />} />
          <Route exact path="/payment" element={<PaymentPage />} />
          <Route exact path="/thank-you" element={<PlaceOrderPage />} />
          <Route exact path="/thanks" element={<ThanksPage />} />
          <Route exact path="/refund-policy" element={<RefundPolicyPage />} />
          <Route exact path="/about-us" element={<AboutUsPage />} />
          <Route exact path="/faq" element={<FaqPage />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route exact path="/blog/:id" element={<BlogDetailPage />} />
          <Route exact path="/nootropics" element={<CategoryPage />} />
          <Route exact path="/terms-conditions" element={<TermsnCondPage />} />
          <Route exact path="/shipping-policy" element={<ShippingPage />} />
          <Route exact path="/sitemap" element={<SitemapPage />} />
          <Route path="*" exact={true} element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Config;
