(self.webpackChunkmedico=self.webpackChunkmedico||[]).push([[213],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},1885:function(e,n,r){"use strict";r(2791);var t=r(2469),i=r(184);n.Z=function(e){var n=e.variant,r=e.children;return(0,i.jsx)(t.Z,{variant:n,children:r})}},2074:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return g}});var t=r(2791),i=r(7824),o=r(6030),s=r(3178),a=r(1885),c=r(6871),u=r(9212),l=r(4921),d=r(184),f=function(e){var n=e.match,r=(0,o.I0)(),f=((0,c.s0)(),(0,c.UO)().id),p=(0,o.v9)((function(e){return e.blogDetails})),h=p.loading,g=p.error,v=p.blog;return(0,t.useEffect)((function(){r((0,l.B)(f))}),[r,n]),(0,d.jsx)("div",{className:i.Z.blogMainDiv,children:(0,d.jsx)("div",{className:"container-sm",children:h?(0,d.jsx)(s.Z,{}):g?(0,d.jsx)(a.Z,{variant:"danger",children:g}):(0,d.jsx)(d.Fragment,{children:v&&0!==(null===v||void 0===v?void 0:v.length)?(0,d.jsx)("div",{className:i.Z.blogDiv,children:(0,d.jsxs)("div",{className:i.Z.blogInner,children:[(0,d.jsx)("h1",{children:v.h1}),(0,d.jsxs)("div",{className:i.Z.blogTime,children:[(0,d.jsx)(u.Z,{className:"text-muted",style:{fontSize:"18px",marginTop:"5px",marginRight:"3px"}}),(0,d.jsxs)("p",{className:"text-muted",children:["",new Date(v.created).toString().substring(0,10)]})]}),(0,d.jsx)("hr",{}),(0,d.jsx)("p",{children:v.paragraph_1}),(0,d.jsx)("h3",{children:v.h2}),(0,d.jsx)("p",{children:v.paragraph_2}),(0,d.jsx)("h3",{children:v.h3}),(0,d.jsx)("p",{children:v.paragraph_3}),(0,d.jsx)("h3",{children:v.h4}),(0,d.jsx)("p",{children:v.paragraph_4}),(0,d.jsx)("h3",{children:v.h5}),(0,d.jsx)("p",{children:v.paragraph_5}),(0,d.jsx)("hr",{})]})}):(0,d.jsx)("p",{className:"text-center py-3",style:{marginBottom:"230px"},children:"No Blogs Yet"})})})})},p=r(2175),h=r(4009),g=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.Z,{}),(0,d.jsx)(f,{}),(0,d.jsx)(h.Z,{})]})}},9212:function(e,n,r){"use strict";var t=r(5318);n.Z=void 0;var i=t(r(5649)),o=r(184),s=(0,i.default)([(0,o.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,o.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");n.Z=s},5649:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=r(8610)},1260:function(e,n,r){"use strict";var t=r(8949);n.Z=t.Z},8610:function(e,n,r){"use strict";r.r(n),r.d(n,{capitalize:function(){return t.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return o.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return a},isMuiElement:function(){return c.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return l.Z},requirePropFactory:function(){return d},setRef:function(){return f},unstable_ClassNameGenerator:function(){return Z.Z},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return h.Z},unsupportedProp:function(){return g},useControlled:function(){return v.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return m.Z},useIsFocusVisible:function(){return x.Z}});var t=r(4036),i=r(1260),o=r(9201),s=r(3199);var a=function(e,n){return function(){return null}},c=r(9103),u=r(8301),l=r(7602);r(7462);var d=function(e,n){return function(){return null}},f=r(2971).Z,p=r(2886),h=r(7384);var g=function(e,n,r,t,i){return null},v=r(8278),b=r(9683),m=r(2071),x=r(3031),Z=r(7125)},9683:function(e,n,r){"use strict";var t=r(8956);n.Z=t.Z},888:function(e,n,r){"use strict";var t=r(9047);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,n,r,i,o,s){if(s!==t){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},2007:function(e,n,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2469:function(e,n,r){"use strict";var t=r(1413),i=r(5987),o=r(1694),s=r.n(o),a=r(2791),c=r(239),u=r(9007),l=r(6445),d=r(162),f=r(5e3),p=r(473),h=r(7472),g=r(6543),v=r(184),b=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],m=(0,h.Z)("h4");m.displayName="DivStyledAsH4";var x=(0,g.Z)("alert-heading",{Component:m}),Z=(0,g.Z)("alert-link",{Component:l.Z}),_={variant:"primary",show:!0,transition:f.Z,closeLabel:"Close alert"},j=a.forwardRef((function(e,n){var r=(0,c.Ch)(e,{show:"onClose"}),o=r.bsPrefix,a=r.show,l=r.closeLabel,h=r.closeVariant,g=r.className,m=r.children,x=r.variant,Z=r.onClose,_=r.dismissible,j=r.transition,y=(0,i.Z)(r,b),C=(0,d.vE)(o,"alert"),k=(0,u.Z)((function(e){Z&&Z(!1,e)})),N=!0===j?f.Z:j,T=(0,v.jsxs)("div",(0,t.Z)((0,t.Z)({role:"alert"},N?void 0:y),{},{ref:n,className:s()(g,C,x&&"".concat(C,"-").concat(x),_&&"".concat(C,"-dismissible")),children:[_&&(0,v.jsx)(p.Z,{onClick:k,"aria-label":l,variant:h}),m]}));return N?(0,v.jsx)(N,(0,t.Z)((0,t.Z)({unmountOnExit:!0},y),{},{ref:void 0,in:a,children:T})):a?T:null}));j.displayName="Alert",j.defaultProps=_,n.Z=Object.assign(j,{Link:Z,Heading:x})},7824:function(e,n){"use strict";n.Z={blogMainDiv:"blog_blogMainDiv__SqRDI",blogInner:"blog_blogInner__r0C+X",blogDiv:"blog_blogDiv__4BjXO",blogTime:"blog_blogTime__t99mG",productImg:"blog_productImg__1kdHn",blogLink:"blog_blogLink__D5MBC"}}}]);
//# sourceMappingURL=213.4c6b0a5b.chunk.js.map