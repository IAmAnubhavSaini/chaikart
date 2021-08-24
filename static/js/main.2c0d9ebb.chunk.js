(this["webpackJsonpchai-kart"]=this["webpackJsonpchai-kart"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(8),i=c.n(r),o=(c(13),c(6)),s=c(3),u=c(2),d=(c(14),c(0));function l(t){return Object(d.jsxs)("div",{className:"product-list",children:[Object(d.jsx)("h2",{children:"Products"}),t.products.map((function(e,c){return Object(n.createElement)(j,Object(u.a)(Object(u.a)({},e),{},{key:"product-".concat(c)},t.actions))}))]})}function j(t){return Object(d.jsxs)("div",{className:"product",children:[Object(d.jsxs)("div",{className:"grid",children:[Object(d.jsx)("div",{className:"product-name",children:t.name}),Object(d.jsx)("div",{className:"product-price",children:t.price})]}),Object(d.jsx)("div",{className:"product-buttons",children:Object(d.jsx)("button",{onClick:function(){return t.onProductAdd({name:t.name,price:t.price})},children:"Add"})})]})}var b=[{name:"simple product",price:1299,quantity:99},{name:"medium product",price:1499,quantity:77},{name:"fancy product",price:1999,quantity:88},{name:"you cannot afford product",price:1299e6,quantity:9}];function m(t){var e=t.item;return Object(d.jsx)(d.Fragment,{children:""!==e.name&&Object(d.jsxs)("div",{className:"cart-item",children:[Object(d.jsxs)("div",{className:"product grid",children:[Object(d.jsx)("div",{className:"product-name",children:t.item.name}),Object(d.jsxs)("div",{children:[t.item.price," ",Object(d.jsxs)("span",{className:"cart-item-quantity",children:["x",t.item.quantity]})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return t.onIncreaseQuantity(t.item)},children:"+1"}),Object(d.jsx)("button",{onClick:function(){return t.onDecreaseQuantity(t.item)},children:"-1"}),Object(d.jsx)("button",{onClick:function(){return t.onRemoveFromCart(t.item)},children:"delete"})]})]})})}function p(t){return Object(d.jsxs)("div",{className:"active-cart",children:[Object(d.jsxs)("h2",{children:["Cart #",t.activeCart.id]}),Object(d.jsxs)("div",{className:"cart-info-container drag-down drag-right",children:[Object(d.jsxs)("div",{className:"cart-total",children:["Total: ",Object(d.jsx)("span",{className:"value",children:t.activeCart.total})]}),Object(d.jsxs)("div",{className:"cart-quantity",children:["Count: ",Object(d.jsx)("span",{className:"value",children:t.activeCart.count})]})]}),Object(d.jsx)("div",{children:t.activeCart.products.map((function(e,c){return Object(d.jsx)(m,Object(u.a)({item:e},t.productActions),"cart-item-".concat(c))}))}),Object(d.jsxs)("div",{className:"cart-action-container drag-down",children:[Object(d.jsx)("button",{onClick:function(){return t.cartActions.onSuspendCart(t.activeCart)},children:"suspend"}),Object(d.jsx)("button",{onClick:t.cartActions.onClearActiveCart,children:"clear"})]})]})}function v(t){return Object(d.jsxs)("div",{className:"suspended-cart-list",children:[Object(d.jsx)("h2",{children:"suspended"}),t.carts.map((function(e,c){return Object(d.jsxs)("div",{className:"suspended-cart",children:[e.total,Object(d.jsx)("button",{onClick:function(){return t.actions.onMakeActive(e)},children:"make active"})]},"suspended-cart-".concat(c))}))]})}var O={id:1,products:[{name:"",quantity:0,price:0}],total:0,count:0};function h(t,e,c){var n=t.products,a=t.total,r=t.count,i=t.id;if("clear-cart"===c)return{id:i,products:[],count:0,total:0};var o=n.findIndex((function(t){return t.name===e.name}));if("add"===c){if(-1===o){var d=e.quantity,l=void 0===d?1:d,j=e.price,b=e.name;return n.push({quantity:l,price:j,name:b}),a+=e.price,r+=1,Object(u.a)(Object(u.a)({},t),{},{products:n,total:a,count:r})}return h(t,e,"increase")}if("increase"===c){var m=n[o],p=m.quantity,v=m.price,O=m.name;return n[o]={quantity:p+1,price:v,name:O},r+=1,{id:i,products:n,total:a+=e.price,count:r}}if("remove"===c){if(o>-1){var x=n[o];return r-=x.quantity,a-=x.price*x.quantity,{id:i,products:n=[].concat(Object(s.a)(n.slice(0,o)),Object(s.a)(n.slice(o+1))),count:r,total:a}}}else if("decrease"===c&&o>-1){var f=n[o];return 1===f.quantity?h(t,e,"remove"):(r-=1,a-=f.price,n[o]=Object(u.a)({quantity:f.quantity-1},e),{id:i,products:n,count:r,total:a})}return{id:i,products:n,count:r,total:a}}var x=function(){var t=Object(n.useState)(O),e=Object(o.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),u=i[0],j=i[1],m=Object(n.useState)([]),x=Object(o.a)(m,2),f=x[0],C=x[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h2",{className:"brand",children:"ChaiKart"}),Object(d.jsxs)("div",{className:"grid",children:[b&&Object(d.jsx)(l,{products:b,actions:{onProductAdd:function(t){console.log("onProductAdd"),u||j(!0);var e=h(c,t,"add");a(e)}}}),u&&Object(d.jsx)(p,{activeCart:c,productActions:{onRemoveFromCart:function(t){console.log("onRemoveFromCart");var e=h(c,t,"remove");0===e.count&&j(!1),a(e)},onDecreaseQuantity:function(t){console.log("onDecreaseQuantity");var e=h(c,t,"decrease");0===e.count&&j(!1),a(e)},onIncreaseQuantity:function(t){console.log("onIncreaseQuantity"),console.log(t);var e=h(c,t,"increase");a(e),j(!0)}},cartActions:{onSuspendCart:function(t){console.log("onSuspendCart"),C([].concat(Object(s.a)(f),[t])),a(O),j(!1)},onClearActiveCart:function(){console.log("onClearActiveCart");var t=h(c,null,"clear-cart");a(t),j(!1)}}}),f.length>0&&Object(d.jsx)(v,{actions:{onMakeActive:function(t){console.log("onMakeActive"),console.log(t);var e=f.findIndex((function(e){return e.id===t.id}));C([].concat(Object(s.a)(f.slice(0,e)),Object(s.a)(f.slice(e+1)))),a(t),j(!0)}},carts:f})]})]})},f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),r(t),i(t)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.2c0d9ebb.chunk.js.map