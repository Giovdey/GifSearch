(this["webpackJsonpintro-js"]=this["webpackJsonpintro-js"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(10),u=n(8),o=n.n(u),j=n(0),d=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),u(""))},children:Object(j.jsx)("input",{type:"text",value:r,onChange:function(t){u(t.target.value)}})})};d.protoTypes={setCategories:o.a.func.isRequired};var l=n(11),b=n(6),f=n.n(b),m=n(9),O=function(){var t=Object(m.a)(f.a.mark((function t(e){var n,a,c,r,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=u77GuxfQwEZj1iCmqWBwAGt0cmAXS8kA"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){t.id;var e=t.title,n=t.url;return Object(j.jsxs)("div",{class:"card animate__animated animate__bounce",children:[Object(j.jsx)("img",{src:n,alt:e}),Object(j.jsx)("p",{children:e})]})},p=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){O(t).then((function(t){setTimeout((function(){r({data:t,loading:!1})}),3e3)}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{class:"card animate__animated animate__fadeIn",children:e}),r&&Object(j.jsx)("p",{class:"card animate__animated animate__flash",children:"Loading..."}),Object(j.jsx)("div",{className:"cardGrid ",children:c.map((function(t){return Object(j.jsx)(h,Object(l.a)({},t),t.id)}))})]})},x=function(){var t=Object(a.useState)(["One Piece"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"GiftSearchApp"}),Object(j.jsx)(d,{setCategories:c}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(t){return Object(j.jsx)(p,{category:t},t)}))})]})};n(20);r.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.65758070.chunk.js.map