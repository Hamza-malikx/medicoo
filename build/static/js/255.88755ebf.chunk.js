"use strict";(self.webpackChunkmedico=self.webpackChunkmedico||[]).push([[255],{692:function(e,t,n){n.d(t,{Xq:function(){return l},h2:function(){return d},q7:function(){return u},Dz:function(){return h},BX:function(){return p}});var r=n(5861),i=n(7757),s=n.n(i),c=n(4569),o=n.n(c),a=n(7254),l=function(e,t,n){return function(){var i=(0,r.Z)(s().mark((function r(i,c){var l,d;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o().get("https://medico-django-app.herokuapp.com/api/products/".concat(e));case 2:l=r.sent,d=l.data,i({type:a.Nw,payload:{product:d.id,name:d.name,image:d.image,countInStock:d.countInStock,qty:t,obj:n}}),localStorage.setItem("cartItems",JSON.stringify(c().cart.cartItems));case 6:case"end":return r.stop()}}),r)})));return function(e,t){return i.apply(this,arguments)}}()},d=function(e){return function(t,n){t({type:a.aR,payload:e}),localStorage.setItem("cartItems",JSON.stringify(n().cart.cartItems))}},u=function(e){return function(t){t({type:a.ko,payload:e}),localStorage.setItem("shippingAddress",JSON.stringify(e))}},h=function(e){return function(t){t({type:a.AQ,payload:e}),localStorage.setItem("cardDetails",JSON.stringify(e))}},p=function(e){return function(t){t({type:a.TU,payload:e}),localStorage.setItem("paymentMethod",JSON.stringify(e))}}},1523:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(2791),i=n(2175),s=n(2982),c=n(6030),o="cart_cart__c1aA6",a="cart_cartHeader__uMtEi",l="cart_cartTable__KpaGv",d="cart_greenBg__SIR8H",u="cart_sno__9dCTm",h="cart_grandTotal__imnWe",p="cart_couponArea__plto-",x="cart_coupons__J2Y92",j="cart_formGroup__Tl0K+",m="cart_subTotal__xqLIj",f="cart_continueShopping__GbfVG",b="cart_shoppingCart__0tcpQ",g="cart_tableT__7kGwC",v="cart_row1__dlNWK",_=n(2592),N=n(3855),y=n(3360),k=n(3504),S=n(692),I=n(159),C=n(4270),D=n(184),P=function(){var e,t,n,i,P,q,w=(0,c.I0)(),F=(0,c.v9)((function(e){return e.cart})),Z=F.cartItems,A=(0,c.v9)((function(e){return e.others}));(F.freePills=F.itemsPrice<200?0:null===(e=A.otherItems[0])||void 0===e?void 0:e.free_pills,A.otherItems)&&(F.shippingPrice=F.itemsPrice>150?0:null===(q=A.otherItems[0])||void 0===q?void 0:q.shipping_fee,F.totalPrice=(Number(F.itemsPrice)+Number(F.shippingPrice)+Number(F.taxPrice)).toFixed(2));(0,r.useEffect)((function(){w((0,I.Dy)())}),[w]);return(0,D.jsxs)("div",{className:o,children:[(0,D.jsxs)(C.q,{children:[(0,D.jsx)("title",{children:"Safe and Secure Add to Cart of Modatabs Store"}),(0,D.jsx)("meta",{name:"description",content:"Check all the information of products you have added in safe cart. Add more products in your cart safely. "})]}),(0,D.jsxs)("div",{className:"container",children:[(0,D.jsx)("div",{className:"row ".concat(v),children:(0,D.jsx)("div",{className:"col-lg-12",children:(0,D.jsx)("h2",{className:a,children:(0,D.jsx)("span",{children:"Shopping Cart"})})})}),Z&&0===Z.length?(0,D.jsxs)("div",{className:b,children:[(0,D.jsx)("h2",{children:"Oops! Your cart is Empty \ud83d\ude15"}),(0,D.jsx)("div",{className:f,children:(0,D.jsx)(k.rU,{to:"/",children:(0,D.jsx)("button",{className:"btn",children:"Continue Shopping"})})})]}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("div",{className:"row ".concat(v),children:(0,D.jsxs)("div",{className:"col-lg-12 ".concat(l),children:[(0,D.jsx)("div",{className:g,children:(0,D.jsx)("table",{children:(0,D.jsxs)("tbody",{children:[(0,D.jsxs)("tr",{className:d,children:[(0,D.jsx)("td",{children:"S.No"}),(0,D.jsx)("td",{children:"Item"}),(0,D.jsx)("td",{children:"Pills"}),(0,D.jsx)("td",{children:"Packet"}),(0,D.jsx)("td",{children:"Total"}),(0,D.jsx)("td",{children:"Price/Packet"}),(0,D.jsx)("td",{children:"Remove"})]}),Z.map((function(e,t){return(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{className:u,children:t+1}),(0,D.jsxs)("td",{children:[(0,D.jsx)(_.Z,{src:e.image,fluid:!0,width:110}),(0,D.jsx)("p",{children:e.name})]}),(0,D.jsx)("td",{children:(0,D.jsxs)("p",{children:[e.obj.bookingDetails.strength,"mg x"," ",e.obj.bookingDetails.tablets," Pills"]})}),(0,D.jsx)("td",{children:(0,D.jsx)(N.Z.Select,{as:"select",value:e.qty,onChange:function(t){return n=e.product,r=Number(t.target.value),i=e.obj.bookingDetails.tablets,s=e.obj.bookingDetails.price,c=e.obj.bookingDetails.strength,localStorage.setItem("bookingDetails",JSON.stringify({tablets:i,price:s,strength:c})),void w((0,S.Xq)(n,r,{bookingDetails:JSON.parse(localStorage.getItem("bookingDetails"))}));var n,r,i,s,c},children:(0,s.Z)(Array(e.countInStock).keys()).map((function(e){return(0,D.jsx)("option",{value:e+1,children:e+1},e+1)}))})}),(0,D.jsxs)("td",{children:["$",(e.qty*e.obj.bookingDetails.price).toFixed(2)]}),(0,D.jsxs)("td",{children:["$",e.obj.bookingDetails.price]}),(0,D.jsx)("td",{children:(0,D.jsx)(y.Z,{type:"button",variant:"light",onClick:function(){return t=e.product,void w((0,S.h2)(t));var t},children:(0,D.jsx)("i",{className:"fas fa-trash"})})})]},e.id)}))]})})}),(0,D.jsxs)("div",{className:h,children:[(0,D.jsx)("div",{className:p,children:(0,D.jsxs)("div",{className:x,children:[(0,D.jsx)(C.q,{children:(0,D.jsx)("title",{children:"Modatabs Secure Checkout | Safe Checkout"})}),(0,D.jsx)("h3",{children:"Apply Coupon Code Here"}),(0,D.jsxs)("div",{className:"".concat(j),children:[(0,D.jsx)("input",{type:"text",placeholder:"Enter Coupon Code Here",className:"form-control"}),(0,D.jsx)("button",{className:"btn",children:"Submit"})]})]})}),(0,D.jsxs)("ul",{className:m,children:[(0,D.jsx)("li",{children:(0,D.jsxs)("h6",{style:{fontSize:"16px",fontWeight:"bold"},children:[(0,D.jsx)("span",{children:"Total Pills:"}),Z.reduce((function(e,t){return e+t.obj.bookingDetails.tablets}),0)]})}),(0,D.jsx)("li",{children:(0,D.jsxs)("h6",{style:{fontSize:"16px",fontWeight:"bold"},children:[(0,D.jsx)("span",{children:"Free Pills:"}),Z.reduce((function(e,t){return e+t.qty*t.obj.bookingDetails.price}),0).toFixed(2)<200?0:null===(t=A.otherItems[0])||void 0===t?void 0:t.free_pills]})}),(0,D.jsx)("li",{children:(0,D.jsxs)("h6",{style:{fontSize:"16px",fontWeight:"bold"},children:[(0,D.jsx)("span",{children:"Express Shipping:"}),(0,D.jsxs)("p",{children:[0===(Z.reduce((function(e,t){return e+t.obj.bookingDetails.price*t.qty}),0).toFixed(2)>150?0:null===(n=A.otherItems[0])||void 0===n?void 0:n.shipping_fee)?"":"AUD ",0===(Z.reduce((function(e,t){return e+t.obj.bookingDetails.price*t.qty}),0).toFixed(2)>150?0:null===(i=A.otherItems[0])||void 0===i?void 0:i.shipping_fee)?"Free":Z.reduce((function(e,t){return e+t.obj.bookingDetails.price*t.qty}),0).toFixed(2)>150?0:null===(P=A.otherItems[0])||void 0===P?void 0:P.shipping_fee]})]})}),(0,D.jsxs)("li",{style:{fontSize:"18px",fontWeight:"bold"},children:[(0,D.jsx)("span",{children:"Grand Total: "}),"AUD"," ",Z.reduce((function(e,t){return e+t.qty*t.obj.bookingDetails.price}),0).toFixed(2)]})]})]})]})}),(0,D.jsx)("div",{className:"row ".concat(v),children:(0,D.jsxs)("div",{className:"col-lg-12 ".concat(f),children:[(0,D.jsx)(k.rU,{to:"/",children:(0,D.jsx)("button",{className:"btn me-2",children:"Continue Shopping"})}),(0,D.jsx)(k.rU,{to:"/secure-checkout",children:(0,D.jsx)("button",{className:"btn",children:"Proceed to Checkout"})})]})})]})]})]})},q=n(4009),w=function(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(i.Z,{}),(0,D.jsx)(P,{}),(0,D.jsx)(q.Z,{})]})}},2592:function(e,t,n){var r=n(1413),i=n(5987),s=n(1694),c=n.n(s),o=n(2791),a=n(2007),l=n.n(a),d=n(162),u=n(184),h=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],p=(l().string,l().bool,l().bool,l().bool,l().bool,o.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,o=e.fluid,a=e.rounded,l=e.roundedCircle,p=e.thumbnail,x=(0,i.Z)(e,h);return n=(0,d.vE)(n,"img"),(0,u.jsx)("img",(0,r.Z)((0,r.Z)({ref:t},x),{},{className:c()(s,o&&"".concat(n,"-fluid"),a&&"rounded",l&&"rounded-circle",p&&"".concat(n,"-thumbnail"))}))})));p.displayName="Image",p.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.Z=p}}]);
//# sourceMappingURL=255.88755ebf.chunk.js.map