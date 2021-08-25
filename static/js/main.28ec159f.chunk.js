(this["webpackJsonpchai-kart"]=this["webpackJsonpchai-kart"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(8),i=c.n(r),o=(c(13),c(6)),s=c(3),d=c(2),u=(c(14),c(0));function l(t){return Object(u.jsxs)("div",{className:"product-list",children:[Object(u.jsx)("h2",{children:"Products"}),t.products.map((function(e,c){return Object(n.createElement)(j,Object(d.a)(Object(d.a)({},e),{},{key:"product-".concat(c)},t.actions))}))]})}function j(t){return Object(u.jsxs)("div",{className:"product",children:[Object(u.jsxs)("div",{className:"grid",children:[Object(u.jsx)("div",{className:"product-name",children:t.name}),Object(u.jsx)("div",{className:"product-price",children:t.price})]}),Object(u.jsx)("div",{className:"product-buttons",children:Object(u.jsx)("button",{onClick:function(){return t.onProductAdd({name:t.name,price:t.price})},children:"Add"})})]})}var m=[{id:1,name:"simple product",price:1299,quantity:99},{id:2,name:"medium product",price:1499,quantity:77},{id:3,name:"fancy product",price:1999,quantity:88},{id:4,name:"you cannot afford product",price:1299e6,quantity:9}];function b(t){var e=t.item;return Object(u.jsx)(u.Fragment,{children:""!==e.name&&Object(u.jsxs)("div",{className:"cart-item",children:[Object(u.jsxs)("div",{className:"product grid",children:[Object(u.jsx)("div",{className:"product-name",children:t.item.name}),Object(u.jsxs)("div",{children:[t.item.price," ",Object(u.jsxs)("span",{className:"cart-item-quantity",children:["x",t.item.quantity]})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return t.onIncreaseQuantity(t.item)},children:"+1"}),Object(u.jsx)("button",{onClick:function(){return t.onDecreaseQuantity(t.item)},children:"-1"}),Object(u.jsx)("button",{onClick:function(){return t.onRemoveFromCart(t.item)},children:"delete"})]})]})})}function p(t){return Object(u.jsxs)("div",{className:"active-cart",children:[Object(u.jsxs)("h2",{children:["Cart #",t.activeCart.id]}),Object(u.jsxs)("div",{className:"cart-info-container drag-down drag-right",children:[Object(u.jsxs)("div",{className:"cart-total",children:["Total: ",Object(u.jsx)("span",{className:"value",children:t.activeCart.total})]}),Object(u.jsxs)("div",{className:"cart-quantity",children:["Count: ",Object(u.jsx)("span",{className:"value",children:t.activeCart.count})]})]}),Object(u.jsx)("div",{children:t.activeCart.products.map((function(e,c){return Object(u.jsx)(b,Object(d.a)({item:e},t.productActions),"cart-item-".concat(c))}))}),Object(u.jsxs)("div",{className:"cart-action-container drag-down",children:[Object(u.jsx)("button",{onClick:function(){return t.cartActions.onSuspendCart(t.activeCart)},children:"suspend"}),Object(u.jsx)("button",{onClick:t.cartActions.onClearActiveCart,children:"clear"})]})]})}function v(t){return Object(u.jsxs)("div",{className:"suspended-cart-list",children:[Object(u.jsx)("h2",{children:"suspended"}),t.carts.map((function(e,c){return Object(u.jsxs)("div",{className:"suspended-cart",children:[e.total,Object(u.jsx)("button",{onClick:function(){return t.actions.onMakeActive(e)},children:"make active"})]},"suspended-cart-".concat(c))}))]})}var O={id:1,products:[{name:"",quantity:0,price:0}],total:0,count:0};function h(t,e,c){var n=t.products,a=t.total,r=t.count,i=t.id;if("clear-cart"===c)return{id:i,products:[],count:0,total:0};var o=n.findIndex((function(t){return t.name===e.name}));if("add"===c){if(-1===o){var u=e.quantity,l=void 0===u?1:u,j=e.price,m=e.name;return n.push({quantity:l,price:j,name:m}),a+=e.price,r+=1,Object(d.a)(Object(d.a)({},t),{},{products:n,total:a,count:r})}return h(t,e,"increase")}if("increase"===c){var b=n[o],p=b.quantity,v=b.price,O=b.name;return n[o]={quantity:p+1,price:v,name:O},r+=1,{id:i,products:n,total:a+=e.price,count:r}}if("remove"===c){if(o>-1){var x=n[o];return r=Math.max(0,r-x.quantity),a=Math.max(0,a-x.price*x.quantity),{id:i,products:n=[].concat(Object(s.a)(n.slice(0,o)),Object(s.a)(n.slice(o+1))),count:r,total:a}}}else if("decrease"===c&&o>-1){var f=n[o];return 1===f.quantity?h(t,e,"remove"):(r=Math.max(0,r-1),a=Math.max(0,a-f.price),n[o]=Object(d.a)(Object(d.a)({},e),{},{quantity:Math.max(0,f.quantity-1)}),{id:i,products:n,count:r,total:a})}return{id:i,products:n,count:r,total:a}}var x=function(){var t=Object(n.useState)(O),e=Object(o.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),d=i[0],j=i[1],b=Object(n.useState)([]),x=Object(o.a)(b,2),f=x[0],C=x[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h2",{className:"brand",children:"ChaiKart"}),Object(u.jsxs)("div",{className:"grid",children:[m&&Object(u.jsx)(l,{products:m,actions:{onProductAdd:function(t){console.log("onProductAdd"),d||j(!0);var e=h(c,t,"add");a(e)}}}),d&&Object(u.jsx)(p,{activeCart:c,productActions:{onRemoveFromCart:function(t){console.log("onRemoveFromCart");var e=h(c,t,"remove");0===e.count&&j(!1),a(e)},onDecreaseQuantity:function(t){console.log("onDecreaseQuantity");var e=h(c,t,"decrease");0===e.count&&j(!1),a(e)},onIncreaseQuantity:function(t){console.log("onIncreaseQuantity"),console.log(t);var e=h(c,t,"increase");a(e),j(!0)}},cartActions:{onSuspendCart:function(t){console.log("onSuspendCart"),C([].concat(Object(s.a)(f),[t])),a(O),j(!1)},onClearActiveCart:function(){console.log("onClearActiveCart");var t=h(c,null,"clear-cart");a(t),j(!1)}}}),f.length>0&&Object(u.jsx)(v,{actions:{onMakeActive:function(t){console.log("onMakeActive"),console.log(t);var e=f.findIndex((function(e){return e.id===t.id}));C([].concat(Object(s.a)(f.slice(0,e)),Object(s.a)(f.slice(e+1)))),a(t),j(!0)}},carts:f})]})]})},f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),r(t),i(t)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.28ec159f.chunk.js.map