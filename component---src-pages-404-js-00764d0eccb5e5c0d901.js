(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(162);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(32),o=a.n(l);a.d(t,"a",function(){return o.a});a(158);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},158:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},161:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},162:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(153),s=(a(165),function(e){e.siteTitle;return"undefined"!=typeof window&&window.addEventListener("scroll",function(){var e=document.querySelector("header");e&&(0===window.pageYOffset?e.classList.remove("shadow"):e.classList.contains("shadow")||e.classList.add("shadow"))}),i.a.createElement("header",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"left"},i.a.createElement("div",{className:"logo"},i.a.createElement(o.a,{to:"/"},"FOR'M")),i.a.createElement("div",{className:"menu"},i.a.createElement(o.a,{to:"/"},"Home"))),i.a.createElement("div",{className:"menu"},i.a.createElement(o.a,{to:"/user/sign-up"},"Sign Up"),i.a.createElement(o.a,{to:"/user/log-in"},"Log In"))))});s.propTypes={siteTitle:l.a.string},s.defaultProps={siteTitle:""};var u=s,d=(a(36),a(166),function(e){var t="https://ktich-chat-app.herokuapp.com/?auth="+e.auth;return i.a.createElement("div",{className:"chat-container",style:{display:e.display?"inline-block":"none"}},i.a.createElement("div",{onClick:e.closeChat,className:"close-button"},"x"),i.a.createElement("iframe",{title:"chatBox",id:"chatBox",src:t}))});d.propTypes={auth:l.a.string,display:l.a.bool,closeChat:l.a.func},d.defaultProps={display:!1,closeChat:!1};var m=d,p=(a(167),function(){var e;"undefined"!=typeof window&&(e=window.sessionStorage.getItem("token"));var t=Object(r.useState)(!1),a=t[0],n=t[1];return i.a.createElement("div",null,i.a.createElement("span",{onClick:function(){e?(n(!0),document.getElementById("chatIcon").style.display="none"):window.location.replace("forum-frontend/user/log-in")},id:"chatIcon"}),!!e&&i.a.createElement(m,{closeChat:function(){n(!1),document.getElementById("chatIcon").style.display="inline-block"},display:a,auth:e}))}),f=(a(168),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem"}},i.a.createElement("main",{style:{paddingTop:"100px"}},t),i.a.createElement("footer",null,i.a.createElement(p,null))))},data:n})});f.propTypes={children:l.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-404-js-00764d0eccb5e5c0d901.js.map