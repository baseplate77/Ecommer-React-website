(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{56:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(1),r=n.n(a),i=n(32),s=n.n(i),l=n(14),o=n(43),u=(n(56),n(13)),d=n.n(u),j=n(4),b=n(20),m=n(21),p=n(22),h=n(24),O=n(23),f=n(9),v=n(7),g=n(19),x=n(5),y=Object(x.a)([function(e){return e.directory}],(function(e){return e.sections}));n(62);var w=Object(f.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,r=e.linkUrl,i=e.history,s=e.match;return Object(c.jsxs)("div",{className:"menu-item ".concat(a),onClick:function(){i.push("".concat(s.url).concat(r))},children:[Object(c.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(c.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),N=(n(64),Object(x.b)({sections:y})),C=Object(v.b)(N)((function(e){var t=e.sections;return Object(c.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(g.a)(e,["id"]);return Object(c.jsx)(w,Object(j.a)({},n),t)}))})}));n(65);var k=function(){return Object(c.jsx)("div",{className:"homepage",children:Object(c.jsx)(C,{})})},E="HIDE_DROPDOWN",I="ADD_ITEM",S="CLEAR_CART_ITEM",U="REMOVE_ITEM",A=function(){return{type:E}},P=function(e){return{type:I,payload:e}};n(66);var T=Object(v.b)(null,{clearCartItem:function(e){return{type:S,payload:e}},addItem:P,removeItem:function(e){return{type:U,payload:e}}})((function(e){var t=e.cartItem,n=e.clearCartItem,a=e.addItem,r=e.removeItem,i=t.imageUrl,s=t.price,l=t.name,o=t.quantity;return Object(c.jsxs)("div",{className:"checkout-item",children:[Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)("img",{alt:"item",src:i})}),Object(c.jsx)("span",{className:"name",children:l}),Object(c.jsxs)("span",{className:"quantity",children:[Object(c.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276e"}),Object(c.jsx)("span",{className:"value",children:o}),Object(c.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276f"})]}),Object(c.jsx)("span",{className:"price",children:s}),Object(c.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:Object(c.jsx)("span",{children:"\u2715"})})]})})),L=function(e){return e.cart},D=Object(x.a)([L],(function(e){return e.cartItems})),R=Object(x.a)([L],(function(e){return e.hidden})),q=Object(x.a)([D],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),H=Object(x.a)([D],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}));n(67);var M=Object(x.b)({cartItems:D,totalPrice:H}),_=Object(v.b)(M)((function(e){var t=e.cartItems,n=e.totalPrice;return console.log(t),Object(c.jsxs)("div",{className:"checkout-page",children:[Object(c.jsxs)("div",{className:"checkout-header",children:[Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Products"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Description"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Quantity"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Price"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Remove"})})]}),0!==t.length?t.map((function(e){return Object(c.jsx)(T,{cartItem:e},e.id)})):Object(c.jsx)("div",{className:"empty-cart-message",children:Object(c.jsx)("span",{children:"You have no item in your cart"})}),Object(c.jsxs)("div",{className:"total",children:["TOTAL : $",n]})]})})),G=Object(x.a)([function(e){return e.user}],(function(e){return e.currentUser}));function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var W=a.createElement("desc",null,"Created with Sketch."),B=a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function V(e,t){var n=e.title,c=e.titleId,r=F(e,["title","titleId"]);return a.createElement("svg",z({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},r),void 0===n?a.createElement("title",{id:c},"Group"):n?a.createElement("title",{id:c},n):null,W,B)}var Q=a.forwardRef(V);n.p;function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Y=a.createElement("g",null),X=a.createElement("g",null),$=a.createElement("g",null),Z=a.createElement("g",null),ee=a.createElement("g",null),te=a.createElement("g",null),ne=a.createElement("g",null),ce=a.createElement("g",null),ae=a.createElement("g",null),re=a.createElement("g",null),ie=a.createElement("g",null),se=a.createElement("g",null),le=a.createElement("g",null),oe=a.createElement("g",null),ue=a.createElement("g",null);function de(e,t){var n=e.title,c=e.titleId,r=K(e,["title","titleId"]);return a.createElement("svg",J({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},r),n?a.createElement("title",{id:c},n):null,a.createElement("g",null,a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Y,X,$,Z,ee,te,ne,ce,ae,re,ie,se,le,oe,ue)}var je=a.forwardRef(de);n.p,n(68);var be=Object(x.b)({itemCount:q}),me=Object(v.b)(be,{toggleCartHidden:A})((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(c.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(c.jsx)(je,{className:"shopping-icon"}),Object(c.jsx)("span",{className:"item-count",children:n})]})}));n(69);var pe=function(e){var t=e.children,n=e.isGoogleSignin,a=e.inverted,r=Object(g.a)(e,["children","isGoogleSignin","inverted"]);return Object(c.jsx)("button",Object(j.a)(Object(j.a)({className:"".concat(a&&"inverted"," ").concat(n&&"google-sign-in"," custom-button")},r),{},{children:t}))};n(70);var he=function(e){var t=e.item,n=t.imageUrl,a=t.price,r=t.name,i=t.quantity;return Object(c.jsxs)("div",{className:"cart-item",children:[Object(c.jsx)("img",{src:n,alt:"",className:"sr"}),Object(c.jsxs)("div",{className:"item-details",children:[Object(c.jsx)("span",{className:"name",children:r}),Object(c.jsxs)("span",{className:"price",children:[i," x $",a]})]})]})};n(71);var Oe=Object(x.b)({cartItems:D}),fe=Object(f.g)(Object(v.b)(Oe)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return Object(c.jsxs)("div",{className:"cart-dropdown",children:[Object(c.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(c.jsx)(he,{item:e},e.id)})):Object(c.jsx)("span",{className:"empty-message",children:"Your Cart is Empty"})}),Object(c.jsx)(pe,{onClick:function(){n.push("/checkout"),a(A())},children:"Go TO CHECKOUT"})]})}))),ve=n(31);n(72),n(74);ve.a.initializeApp({apiKey:"AIzaSyC7bGA-KQa7J2SdmeT-jwwM6lCu5dQCMS0",authDomain:"crwn-db-996d2.firebaseapp.com",databaseURL:"https://crwn-db-996d2.firebaseio.com",projectId:"crwn-db-996d2",storageBucket:"crwn-db-996d2.appspot.com",messagingSenderId:"452158234037",appId:"1:452158234037:web:cb70e6087b6f2f994c8dfc",measurementId:"G-TC3EYZ068E"});var ge=function(){var e=Object(b.a)(d.a.mark((function e(t,n){var c,a,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=ye.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(!e.sent.exists){a=t.displayName,r=t.email,i=new Date;try{c.set(Object(j.a)({displayName:a,email:r,createAt:i},n))}catch(s){console.log("error in creating user",s.message)}}return e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),xe=ve.a.auth(),ye=ve.a.firestore(),we=new ve.a.auth.GoogleAuthProvider;we.setCustomParameters({prompt:"select_account"});var Ne=function(){return xe.signInWithPopup(we)};ve.a,n(76);var Ce=Object(x.b)({user:G,showDropDown:R}),ke=Object(v.b)(Ce)((function(e){var t=e.user,n=e.showDropDown;return e.hideDropDown,Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(l.b,{to:"/",className:"logo-container",children:Object(c.jsx)(Q,{className:"logo"})}),Object(c.jsxs)("div",{className:"options",children:[Object(c.jsx)(l.b,{className:"option",to:"/shop",children:"SHOP"}),Object(c.jsx)(l.b,{className:"option",to:"/contact",children:"CONTACT"}),t?Object(c.jsx)("div",{className:"option",onClick:function(){return xe.signOut()},children:"Sign out"}):Object(c.jsx)(l.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(c.jsx)(me,{})]}),n&&Object(c.jsx)(fe,{})]})})),Ee=function(e){return e.shop},Ie=Object(x.a)([Ee],(function(e){return e.collections})),Se=Object(x.a)([Ie],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),Ue=Object(x.a)([Ee],(function(e){return e.isFetching})),Ae=Object(x.a)([Ee],(function(e){return!!e.collections})),Pe=n(39),Te=n(40);function Le(){var e=Object(Pe.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return Le=function(){return e},e}function De(){var e=Object(Pe.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return De=function(){return e},e}var Re=Te.a.div(De()),qe=Te.a.div(Le()),He=function(e){return function(t){var n=t.isLoading,a=Object(g.a)(t,["isLoading"]);return n?Object(c.jsx)(Re,{children:Object(c.jsx)(qe,{})}):Object(c.jsx)(e,Object(j.a)({},a))}};n(77);var Me=Object(v.b)(null,{addItem:P})((function(e){var t=e.item,n=e.addItem,a=t.imageUrl,r=t.name,i=t.price;return Object(c.jsxs)("div",{className:"collection-item",children:[Object(c.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object(c.jsxs)("div",{className:"collection-footer",children:[Object(c.jsx)("span",{className:"name",children:r}),Object(c.jsx)("span",{className:"price",children:i})]}),Object(c.jsx)(pe,{onClick:function(){return n(t)},inverted:!0,children:"Go To cart"})]})}));n(78);var _e=Object(x.b)({collections:Ie}),Ge=Object(v.b)(_e)((function(e){var t=e.title,n=e.items,a=e.match;return Object(c.jsxs)("div",{className:"collection-preview",to:"".concat(a.path,"/").concat(t.toLowerCase()),children:[Object(c.jsx)(l.b,{className:"title",to:"".concat(a.path,"/").concat(t.toLowerCase()),children:t.toUpperCase()}),Object(c.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(c.jsx)(Me,{item:e},e.id)}))})]})}));n(79);var ze=Object(x.b)({collections:Se}),Fe=Object(v.b)(ze)((function(e){var t=e.collections,n=e.match;return Object(c.jsx)("div",{className:"collection-overview",children:t.map((function(e){var t=e.id,a=Object(g.a)(e,["id"]);return Object(c.jsx)(Ge,Object(j.a)(Object(j.a)({},a),{},{match:n}),t)}))})})),We=Object(x.b)({isLoading:Ue}),Be=Object(v.b)(We)(He(Fe)),Ve=n(11);n(80);var Qe=Object(v.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(x.a)([Ie],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.collection;console.log(t);var n=t.title,a=t.items;return Object(c.jsxs)("div",{className:"collections",children:[Object(c.jsx)("h2",{className:"title",children:n}),Object(c.jsx)("div",{className:"items",children:a.map((function(e){return Object(c.jsx)(Me,{item:e},e.id)}))})]})})),Je=Object(x.b)({isLoading:function(e){return!Ae(e)}}),Ke=Object(Ve.d)(Object(v.b)(Je),He)(Qe),Ye="FETCH_COLLECTION_START",Xe="FETCH_COLLECTION_SUCCESS",$e="FETCH_COLLECTION_FAILURE",Ze=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionStartAsync)()}},{key:"render",value:function(){var e=this.props.match;return Object(c.jsxs)("div",{children:[Object(c.jsx)(f.b,{exact:!0,path:"".concat(e.path),component:Be}),Object(c.jsx)(f.b,{path:"".concat(e.path,"/:collectionId"),component:Ke})]})}}]),n}(r.a.Component),et=Object(v.b)(null,{fetchCollectionStartAsync:function(){return function(e){e({type:Ye}),ye.collection("collection").get().then((function(t){var n=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,c=t.items;return{routeName:encodeURI(n.toLowerCase()),title:n,items:c}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})}(t);e({type:Xe,payload:n})})).catch((function(t){return e((n=t.message,{type:$e,payload:n}));var n}))}}})(Ze),tt=n(30);n(81),n(82);var nt=function(e){var t=e.handleChange,n=e.label,a=Object(g.a)(e,["handleChange","label"]);return Object(c.jsxs)("div",{className:"group",children:[Object(c.jsx)("input",Object(j.a)({onChange:t,className:"form-input"},a)),n&&Object(c.jsx)("label",{className:"".concat(a.value.length&&"shrink"," form-input-label"),children:n})]})},ct=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:""},e.handleSubmit=function(){var t=Object(b.a)(d.a.mark((function t(n){var c,a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),c=e.state,a=c.email,r=c.password,t.prev=2,t.next=5,xe.signInWithEmailAndPassword(a,r);case 5:e.setState({email:"",password:""}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),alert(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,c=n.value,a=n.name;e.setState(Object(tt.a)({},a,c))},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"sign-in",children:[Object(c.jsx)("h2",{className:"title",children:"I already have an account"}),Object(c.jsx)("span",{children:"Sign in with your email and password"}),Object(c.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(c.jsx)(nt,{name:"email",value:this.state.email,type:"text",handleChange:this.handleChange,label:"email",required:!0}),Object(c.jsx)(nt,{name:"password",label:"password",handleChange:this.handleChange,value:this.state.password,type:"password"}),Object(c.jsxs)("div",{className:"button",children:[Object(c.jsx)(pe,{type:"submit",children:"Sing in"}),Object(c.jsx)(pe,{onClick:Ne,isGoogleSignin:!0,children:"Singin with google"})]})]})]})}}]),n}(r.a.Component),at=(n(83),function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={displayName:"",email:"",password:"",confirmPassword:""},e.handleSubmit=function(){var t=Object(b.a)(d.a.mark((function t(n){var c,a,r,i,s,l,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c=e.state,a=c.displayName,r=c.email,i=c.password,s=c.confirmPassword,i===s){t.next=5;break}return alert("password don;t match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,xe.createUserWithEmailAndPassword(r,i);case 8:return l=t.sent,o=l.user,console.log(o),t.next=13,ge(o,{displayName:a});case 13:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),alert(t.t0.message);case 19:case"end":return t.stop()}}),t,null,[[5,16]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(tt.a)({},c,a))},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,r=e.confirmPassword;return Object(c.jsxs)("div",{className:"sign-up",children:[Object(c.jsx)("h2",{className:"title",children:"I don't have a account"}),Object(c.jsx)("span",{children:"sign up with your email and password"}),Object(c.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(c.jsx)(nt,{type:"text",name:"displayName",value:t,handleChange:this.handleChange,label:"Display Name",required:!0}),Object(c.jsx)(nt,{type:"email",name:"email",value:n,handleChange:this.handleChange,label:"email",required:!0}),Object(c.jsx)(nt,{type:"password",name:"password",value:a,handleChange:this.handleChange,label:"password"}),Object(c.jsx)(nt,{type:"password",name:"confirmPassword",value:r,handleChange:this.handleChange,label:"Confirm password"}),Object(c.jsx)(pe,{type:"submit",children:"sign up"})]})]})}}]),n}(r.a.Component));n(84);var rt=function(){return Object(c.jsxs)("div",{className:"sign-in-out",children:[Object(c.jsx)(ct,{}),Object(c.jsx)(at,{})]})},it="SET_CURRENT_USER",st=(n(85),function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).unsubcribed=null,e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.unsubcribed=xe.onAuthStateChanged(function(){var t=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,ge(n);case 3:t.sent.onSnapshot((function(t){return e.props.setCurrentUser(Object(j.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e.props.setCurrentUser(null);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubcribed()}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(ke,{}),Object(c.jsxs)(f.d,{children:[Object(c.jsx)(f.b,{exact:!0,path:"/",component:k}),Object(c.jsx)(f.b,{path:"/shop",component:et}),Object(c.jsx)(f.b,{path:"/checkout",component:_}),Object(c.jsx)(f.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(c.jsx)(f.a,{to:"/"}):Object(c.jsx)(rt,{})}})]})]})}}]),n}(r.a.Component)),lt=Object(v.b)((function(e){return{currentUser:e.user.currentUser}}),{setCurrentUser:function(e){return{type:it,payload:e}}})(st),ot=(n(86),n(49)),ut=n(33),dt={collections:null,isFetching:!1,errorMessage:void 0},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ye:return Object(j.a)(Object(j.a)({},e),{},{isFetching:!0});case Xe:return Object(j.a)(Object(j.a)({},e),{},{collections:t.payload,isFetching:!1});case $e:return Object(j.a)(Object(j.a)({},e),{},{errorMessage:t.payload,isFetching:!1});default:return e}},bt={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},pt=n(48),ht=n.n(pt),Ot={currentUser:null},ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case it:return Object(j.a)(Object(j.a)({},e),{},{currentUser:t.payload});default:return e}},vt=n(50),gt=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(vt.a)(e),[Object(j.a)(Object(j.a)({},t),{},{quantity:1})])},xt=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity-1}):e}))},yt={hidden:!1,cartItems:[]},wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(j.a)(Object(j.a)({},e),{},{hidden:!e.hidden});case I:return Object(j.a)(Object(j.a)({},e),{},{cartItems:gt(e.cartItems,t.payload)});case U:return Object(j.a)(Object(j.a)({},e),{},{cartItems:xt(e.cartItems,t.payload)});case S:return Object(j.a)(Object(j.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},Nt=Object(Ve.c)({user:ft,cart:wt,directory:mt,shop:jt}),Ct={key:"root",storage:ht.a,whiteList:["cart"]},kt=Object(ut.a)(Ct,Nt),Et=[Object(ot.a)()];var It=Object(Ve.e)(kt,Ve.a.apply(void 0,Et)),St=Object(ut.b)(It);s.a.render(Object(c.jsx)(v.a,{store:It,children:Object(c.jsx)(l.a,{children:Object(c.jsx)(o.a,{persistor:St,children:Object(c.jsx)(lt,{})})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.649f09ac.chunk.js.map