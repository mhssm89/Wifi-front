(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2178)}])},2713:function(t,e,n){"use strict";n.r(e),e.default={src:"/_next/static/media/hotspot.337f4a82.png",height:720,width:720,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAoklEQVR42mOAAZPUJR7GKYvrgXQjEAcC2UxwSSDHCihoDaR1gdgAyDYD0g4wSUEgFgcKygHpaOOURdFAtjqQLQzE4iAFLGYZK5mMkxfKA2l7s8xVbkZAtmn6claQHAMIKLuXgRlK7qWRii5FxWAxj3JWIAUHjFA6AYjroGyEJCMrPwuQFmZk5asEspuAbE2oHBNMNxsQCwKxOBCLAbEoVIwJAGUHLWk83/ELAAAAAElFTkSuQmCC"}},2178:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return it}});var r=n(4051),i=n.n(r),o=n(5893),a=n(7294),c=n(1120),s=n(8463),l=n(253),u=n(2302),f=n(3750),d=n(7394),h=n(8222),m=n(5477),y=n(9613),p=n(7812),x=n(2087),v=n(3579),g=n(4120),j=n(282),A=n(6099),b=n(1425),w=n(6514),Z=n(8951),S=n(6708);function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function E(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,i)}function O(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(t,e)||I(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||I(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){if(t){if("string"===typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(t,e):void 0}}var P=function(t){t.query;var e=O(a.useState([]),2),n=e[0],r=e[1],o=O(a.useState([]),2),c=o[0],s=o[1],l=O(a.useState(0),2),u=l[0],f=l[1],d=O(a.useState(10),2),h=d[0],m=d[1],y=O(a.useState(void 0),2),p=y[0],x=y[1],v=O(a.useState(),2),g=v[0],j=v[1],A=O(a.useState([]),2),b=A[0],w=A[1],Z=O(a.useState(!1),2),S=Z[0],C=Z[1],I=!!g,P=b.length,W=c.length>0,_=c.length>0&&c.length<n.length,L=c.length===n.length,U=function(){var t,e=(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{C(!0)}catch(e){}finally{C(!1)}case 1:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){E(o,r,i,a,c,"next",t)}function c(t){E(o,r,i,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return a.useEffect((function(){U()}),[p,h]),{items:n,selectedItems:c,isAllItemsSelected:L,isSomeItemsSelected:_,page:u,limit:h,hasNext:I,hasPrev:P,isLoading:S,setItems:r,setSelectedItems:s,setLimit:m,enableBulkOperations:W,handleSelectAllItems:function(t){s(t.target.checked?n.map((function(t){return t.id})):[])},handleSelectOneItem:function(t,e){c.includes(e)?s((function(t){return t.filter((function(t){return t!==e}))})):s((function(t){return k(t).concat([e])}))},handlePageChange:function(t,e){f(e),e>u&&(w((function(t){return k(t).concat([p])})),x(g),j(null)),e<u&&(x(b.pop()),w(k(b)),j(null))},handleLimitChange:function(t){var e=parseInt(t.target.value);f(0),m(e),x(void 0),w([]),j(null)}}},W=n(9669),_=n.n(W);function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){U(t,e,n[e])}))}return t}function N(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return L(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var F=(0,c.Z)((function(){return{root:{}}})),R=[{ssid:"tet0",mac:"##################",security:"WPA2"},{ssid:"tet1",mac:"##################",security:"WPA2"},{ssid:"tet2",mac:"##################",security:"WPA2"},{ssid:"tet3",mac:"##################",security:"WPA2"}];var K=function(){F();var t=N(a.useState(!1),2),e=t[0],n=t[1],r=N(a.useState({ssid:"",password:""}),2),i=r[0],c=r[1],C=P({query:R}),E=C.selectedItems,O=C.isLoading;return(0,o.jsxs)("div",{children:[(0,o.jsx)(s.Z,{children:(0,o.jsx)(l.Z,{minWidth:700,children:(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(f.Z,{children:(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(h.Z,{children:"Network Name"}),(0,o.jsx)(h.Z,{children:"MAC address"}),(0,o.jsx)(h.Z,{children:"Encryption"}),(0,o.jsx)(h.Z,{align:"right",children:"connect"})]})}),O?(0,o.jsx)(l.Z,{display:"flex",justifyContent:"center",mt:4,children:(0,o.jsx)(m.Z,{})}):(0,o.jsx)(y.Z,{children:R.map((function(t){return(0,o.jsxs)(d.Z,{hover:!0,selected:-1!==E.indexOf(t.ssid),children:[(0,o.jsx)(h.Z,{children:t.ssid}),(0,o.jsx)(h.Z,{children:t.mac}),(0,o.jsx)(h.Z,{children:t.security[0]}),(0,o.jsx)(h.Z,{align:"right",children:(0,o.jsx)(p.Z,{onClick:function(){n(!0),function(t){var e=D({},i,{ssid:t});c(e)}(t.ssid)},children:(0,o.jsx)(x.Z,{fontSize:"small",children:(0,o.jsx)(A.Z,{})})})})]},t.ssid)}))})]})})}),(0,o.jsxs)(v.Z,{open:e,onClose:function(){n(!1)},children:[(0,o.jsx)(S.Z,{children:"Wifi network Password"}),(0,o.jsxs)("form",{children:[(0,o.jsxs)(w.Z,{children:[(0,o.jsx)(Z.Z,{children:"Please enter the selected Wifi network password you want to connect"}),(0,o.jsx)(g.Z,{autoFocus:!0,margin:"dense",name:"password",id:"password",label:"Wifi password",type:"password",fullWidth:!0,variant:"standard",value:i.password,onChange:function(t){return function(t){var e=D({},i,{password:t});c(e)}(t.target.value)}})]}),(0,o.jsxs)(b.Z,{children:[(0,o.jsx)(j.Z,{onClick:function(){n(!1)},children:"Cancel"}),(0,o.jsx)(j.Z,{onClick:function(){_().post("localhost:9000/connect",i).catch((function(t){return console.log(t)})).then((function(t){return console.log(t)}))},children:"Connect"})]})]})]})]})},M=n(5295),Q=n(7357),B=n(155),G=n(5861),H=n(3321),T=n(3946),q=n(7920);var Y=function(){return(0,o.jsx)(Q.Z,{sx:{flexGrow:1},style:{marginBottom:"1rem"},children:(0,o.jsx)(M.Z,{position:"static",style:{background:"#3e50cc"},children:(0,o.jsxs)(B.Z,{children:[(0,o.jsx)(T.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:(0,o.jsx)(q.Z,{})}),(0,o.jsx)(G.Z,{variant:"h6",align:"center",component:"div",sx:{flexGrow:1},style:{color:"#ffffff"},children:"Wifi DashBoard"}),(0,o.jsx)(H.Z,{style:{color:"#ffffff"},children:"Refresh"})]})})})},J=n(9895),V=n(9912),X=n(1749),z=n(2318);function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var tt=function(){var t;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(J.Z,{elevation:3,children:(0,o.jsx)(s.Z,{sx:{maxWidth:345},children:(0,o.jsxs)(V.Z,{children:[(0,o.jsx)(X.Z,{container:!0,justifyContent:"center",spacing:2,children:(0,o.jsx)(X.Z,{item:!0,children:(0,o.jsx)(z.Z,{gutterBottom:!0,variant:"h5",component:"div",children:"Device Status"})})}),(0,o.jsx)(X.Z,(t={item:!0,container:!0},$(t,"container",!0),$(t,"justifyContent","center"),$(t,"children",(0,o.jsx)("img",{src:n(2713),alt:"",width:"100px",height:"100px"})),t)),(0,o.jsx)(z.Z,{variant:"body2",align:"center",color:"text.secondary",children:"Device mode is Hot spot"})]})})})})};function et(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function nt(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,i)}function rt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return et(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return et(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var it=function(){var t,e=rt(a.useState([]),2),n=e[0],r=e[1],c=a.useCallback((t=i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_().get("http://localhost:9000/scanner");case 3:e=t.sent,n=e.data,console.log("data : ",n),r(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){nt(o,r,i,a,c,"next",t)}function c(t){nt(o,r,i,a,c,"throw",t)}a(void 0)}))}));return a.useEffect((function(){c()}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Y,{}),(0,o.jsxs)(X.Z,{container:!0,spacing:2,children:[(0,o.jsx)(X.Z,{item:!0,xs:12,md:8,children:(0,o.jsx)(K,{query:n})}),(0,o.jsx)(X.Z,{item:!0,xs:12,md:4,children:(0,o.jsx)(tt,{})})]})]})}}},function(t){t.O(0,[540,774,888,179],(function(){return e=8581,t(t.s=e);var e}));var e=t.O();_N_E=e}]);