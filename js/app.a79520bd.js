(function(t){function e(e){for(var a,n,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,n=1;n<r.length;n++){var i=r[n];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=r[0]))}return t}var a={},n={app:0},o={app:0},s=[];function i(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-4074c231":"5ee3053b"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r={"chunk-4074c231":1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({}[t]||t)+"."+{"chunk-4074c231":"b973ca1e"}[t]+".css",o=l.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===a||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[t],p.parentNode.removeChild(p),r(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,r[1](d)}o[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(r,a,function(e){return t[e]}.bind(null,a));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"4c03":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-style-2 ptb--30 bg_color--6",attrs:{"data-black-overlay":"6"}},[r("div",{staticClass:"wrapper plr--50 plr_sm--20"},[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{lg:"4",md:"4",sm:"6",cols:"12"}},[r("div",{staticClass:"text-center inner text-md-right mt_md--20 mt_sm--20"},[r("div",{staticClass:"text"},[r("p",[t._v(" Photography by Keith Chu & Nadia Lee ")])])])]),r("v-col",{attrs:{lg:"4",md:"4",sm:"6",cols:"12"}},[r("div",{staticClass:"text-center inner"},[r("ul",{staticClass:"justify-center social-share d-flex liststyle"},t._l(t.socialList,(function(e,a){return r("li",{key:a},[r("a",{attrs:{href:e.url,target:"_blank"}},[r("i",{class:e.icon},[t._v(t._s(e.content))])])])})),0)])]),r("v-col",{attrs:{lg:"4",md:"4",sm:"12",cols:"12"}},[r("div",{staticClass:"text-center inner text-md-right mt_md--20 mt_sm--20"},[r("div",{staticClass:"text"},[r("p",[t._v(" Copyright © "+t._s((new Date).getFullYear())+" "),r("a",{staticClass:"copyright_txt",attrs:{target:"_blank",href:"http://ocunderwaterexplorers.org/"}},[t._v("OC Underwater Explorers")]),t._v(" "),r("br"),t._v("All Rights Reserved. ")])])])])],1)],1)])},n=[],o={data(){return{logo:r("f06c"),socialList:[{icon:"fab fa-facebook-f",url:"https://www.facebook.com/groups/OrangeCountyUnderwaterExplorers",content:""},{icon:"fab fa-instagram",url:"https://www.instagram.com/ocunderwaterexplorers/",content:""}]}}},s=o,i=r("2877"),l=r("6544"),c=r.n(l),u=r("62ad"),d=r("0fd9"),p=Object(i["a"])(s,a,n,!1,null,null,null);e["a"]=p.exports;c()(p,{VCol:u["a"],VRow:d["a"]})},"566b":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-main",[r("router-view")],1),r("v-fab-transition",[r("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],staticClass:"scroll-fab",attrs:{fab:"",color:"white",fixed:"",width:"50",height:"50",bottom:"",right:""},on:{click:t.toTop}},[r("svg",{attrs:{stroke:"currentColor",fill:"none","stroke-width":"2",viewBox:"0 0 24 24","stroke-linecap":"round","stroke-linejoin":"round",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"}},[r("polyline",{attrs:{points:"18 15 12 9 6 15"}})])])],1)],1)},o=[],s={data:()=>({fab:!1}),methods:{onScroll(t){if("undefined"===typeof window)return;const e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>60},toTop(){this.$vuetify.goTo(0)}}},i=s,l=(r("6291"),r("2877")),c=r("6544"),u=r.n(c),d=r("7496"),p=r("8336"),f=r("0789"),v=r("f6c4"),m=r("269a"),h=r.n(m),g=r("f977"),b=Object(l["a"])(i,n,o,!1,null,"58cfb8f5",null),w=b.exports;u()(b,{VApp:d["a"],VBtn:p["a"],VFabTransition:f["b"],VMain:v["a"]}),h()(b,{Scroll:g["b"]});var _=r("8c4f"),y=r("3384"),C=r.n(y),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header",[r("img",{attrs:{slot:"logo",src:t.logo},slot:"logo"})]),r("div",{staticClass:"error-page-inner bg_color--4"},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"inner"},[r("h1",{staticClass:"heading-title theme-gradient"},[t._v("404!")]),r("h3",{staticClass:"sub-title"},[t._v("Page not found")]),r("span",[t._v("The page you were looking for could not be found.")]),r("div",{staticClass:"error-button"},[r("router-link",{staticClass:"btn-default",attrs:{to:"/"}},[t._v("Back To Homepage")])],1)])])],1)],1)],1),r("Footer")],1)},x=[],E=r("a960"),O=r("4c03"),S={components:{Header:E["a"],Footer:O["a"]},data(){return{logo:r("a4ef")}}},j=S,T=r("62ad"),V=r("a523"),L=r("0fd9"),P=Object(l["a"])(j,k,x,!1,null,null,null),F=P.exports;u()(P,{VCol:T["a"],VContainer:V["a"],VRow:L["a"]}),a["a"].use(_["a"]);const A=[{path:"/",name:"LandingHome",meta:{title:"OCUE - Orange County Underwater Explorers"},component:()=>r.e("chunk-4074c231").then(r.bind(null,"bb51"))},{path:"*",component:F,meta:{title:"404 - OCUE"}}],B=new _["a"]({base:"/",routes:A,scrollBehavior:(t,e,r)=>{let a=0;return t.hash?a=t.hash:r&&(a=r.y),C()(a)}});B.beforeEach((t,e,r)=>{document.title=t.meta.title,r()});var N=B,H=(r("5363"),r("f309"));a["a"].use(H["a"]);var I=new H["a"]({theme:{themes:{light:{primary:"#ff5200",success:"#3EB75E",accent:"#FF7F5C",teal:"#26B0A1",warning:"#FF8F3C",error:"#FF585A",cyan:"#42D3D5"}}},icons:{iconfont:"mdi"}}),M=r("98c9"),U=r("5547"),$=(r("e057"),r("7b8d"),r("6a2c"),r("15f5"),r("2223"),r("c1c3"),r("bc3a")),D=r.n($),R=r("a7fe"),q=r.n(R);a["a"].config.productionTip=!1,a["a"].use(M["a"]),a["a"].use(U["a"]),a["a"].use(q.a,D.a);new a["a"]({router:N,vuetify:I,render:t=>t(w)}).$mount("#app")},6291:function(t,e,r){"use strict";r("566b")},a4ef:function(t,e,r){t.exports=r.p+"img/logo.181915fb.png"},a960:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{staticClass:"hidden-md-and-up header-one-page-nav-drawer",attrs:{fixed:"",width:"320"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",{staticClass:"pa-5"},[a("v-spacer"),a("v-btn",{staticClass:"close-icon",attrs:{icon:""},domProps:{innerHTML:t._s(t.iconSvg(t.closeIcon))},on:{click:function(e){t.drawer=!t.drawer}}})],1),a("div",{attrs:{"active-class":"v-btn--active","bezier-easing-value":".5,0,.35,1",offset:70}},[a("v-list",[t._l(t.items,(function(e){return a("v-list-item",{key:e.title,staticClass:"scrollactive-item",attrs:{ripple:!1,to:e.to,link:""}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),a("v-list-item",{staticClass:"scrollactive-item",attrs:{ripple:!1,link:"",onclick:"window.open('https://the-ocue-store.myspreadshop.com/','_blank')"}},[a("v-list-item-content",[a("v-list-item-title",[t._v("Store")])],1)],1),a("v-list-item",{staticClass:"scrollactive-item",attrs:{ripple:!1,link:"",onclick:"window.open('mailto: contact@ocunderwaterexplorers.org','_blank')"}},[a("v-list-item-content",[a("v-list-item-title",[t._v("Contact")])],1)],1)],2)],1)],1),a("v-app-bar",{staticClass:"header-one-page-nav header-one-page-nav-two",attrs:{dark:"",color:"transparent",fixed:"","elevate-on-scroll":""}},[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("img",{attrs:{src:r("b1d1")}})]),a("v-toolbar-items",{staticClass:"hidden-xs-only hidden-sm-only height-auto ml--15"},[a("div",{attrs:{"active-class":"v-btn--active","bezier-easing-value":".5,0,.35,1",offset:71}},[t._l(t.items,(function(e){return a("v-btn",{key:e.title,staticClass:"scrollactive-item",attrs:{to:e.to,link:"",ripple:!1,text:""}},[t._v(t._s(e.title))])})),a("v-btn",{staticClass:"scrollactive-item",attrs:{link:"",ripple:!1,text:"",onclick:"window.open('https://the-ocue-store.myspreadshop.com/','_blank')"}},[t._v("Store")])],2)]),a("v-spacer"),a("div",{staticClass:"social-share-inner"},[a("Social")],1),a("a",{staticClass:"btn-default btn-border btn-opacity",attrs:{target:"_blank",href:"mailto: contact@ocunderwaterexplorers.org"}},[a("span",[t._v("Contact")])]),a("v-btn",{staticClass:"ma-0 pa-0 hidden-md-and-up menu_icon",attrs:{icon:"",ripple:!1},domProps:{innerHTML:t._s(t.iconSvg(t.icon))},on:{click:function(e){t.drawer=!t.drawer}}})],1)],1)},n=[],o=r("77c6"),s=r.n(o),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"social-share social-style--2 color-black d-flex justify-content-start liststyle"},t._l(t.socialList,(function(e,a){return r("li",{key:a},[r("a",{attrs:{target:"_blank",href:e.url}},[r("i",{class:e.icon},[t._v(t._s(e.content))])])])})),0)},l=[],c={data(){return{socialList:[{icon:"fab fa-facebook-f",url:"https://www.facebook.com/groups/OrangeCountyUnderwaterExplorers",content:""},{icon:"fab fa-instagram",url:"https://www.instagram.com/ocunderwaterexplorers/",content:""}]}}},u=c,d=r("2877"),p=Object(d["a"])(u,i,l,!1,null,null,null),f=p.exports,v={components:{Social:f},data:()=>({drawer:!1,items:[{title:"Home",to:"#home"},{title:"About",to:"#about"},{title:"Events",to:"#events"}],icon:"menu",closeIcon:"x"}),methods:{iconSvg(t){return s.a.icons[t].toSvg()}}},m=v,h=r("6544"),g=r.n(h),b=r("40dc"),w=r("8336"),_=r("8860"),y=r("da13"),C=r("5d23"),k=r("f774"),x=r("2fa4"),E=r("2a7f"),O=Object(d["a"])(m,a,n,!1,null,null,null);e["a"]=O.exports;g()(O,{VAppBar:b["a"],VBtn:w["a"],VList:_["a"],VListItem:y["a"],VListItemContent:C["a"],VListItemTitle:C["b"],VNavigationDrawer:k["a"],VSpacer:x["a"],VToolbarItems:E["a"]})},b1d1:function(t,e,r){t.exports=r.p+"img/logo-symbol-dark.181915fb.png"},c1c3:function(t,e,r){},f06c:function(t,e,r){t.exports=r.p+"img/logo-light.181915fb.png"}});
//# sourceMappingURL=app.a79520bd.js.map