(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),o=a(154),i=a(163),l=a(190);a(265);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("input",{id:"title",type:"text",placeholder:"Title"}),"undefined"!=typeof sessionStorage&&(sessionStorage.getItem("token")?r.a.createElement(l.a,{textAreaStyle:{height:"60vh"},handleSubmit:function(e,t){var a=document.getElementById("title").value;t&&a&&fetch("https://ktichmann-forum-api.herokuapp.com/posts/create",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:sessionStorage.getItem("token")},body:"title="+a+"&post="+t}).then(function(e){return e.json()}).then(function(e){e.success&&document.getElementById("redirect").click()}).catch(function(e){return console.log(e)})},buttonValue:"Post"}):window.location.replace("/forum-frontend/user/log-in")),r.a.createElement(o.a,{id:"redirect",to:"/",style:{display:"none"}}))}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(32),c=a.n(l);a.d(t,"a",function(){return c.a});a(159);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},159:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},162:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(55),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},163:function(e,t,a){"use strict";var n=a(161),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(154),u=(a(166),function(e){e.siteTitle;return"undefined"!=typeof window&&window.addEventListener("scroll",function(){var e=document.querySelector("header");e&&(0===window.pageYOffset?e.classList.remove("shadow"):e.classList.contains("shadow")||e.classList.add("shadow"))}),o.a.createElement("header",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"left"},o.a.createElement("div",{className:"logo"},o.a.createElement(c.a,{to:"/"},"FOR'M")),o.a.createElement("div",{className:"menu"},o.a.createElement(c.a,{to:"/"},"Home"))),o.a.createElement("div",{className:"menu"},o.a.createElement(c.a,{to:"/user/sign-up"},"Sign Up"),o.a.createElement(c.a,{to:"/user/log-in"},"Log In"))))});u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var s=u,d=(a(36),a(167),function(e){var t="https://ktich-chat-app.herokuapp.com/?auth="+e.auth;return o.a.createElement("div",{className:"chat-container",style:{display:display?"inline-block":"none"}},o.a.createElement("div",{onClick:closeChat,className:"close-button"},"x"),o.a.createElement("iframe",{title:"chatBox",id:"chatBox",src:t}))});d.propTypes={auth:l.a.string,display:l.a.bool,closeChat:l.a.func},d.defaultProps={display:!1,closeChat:!1};var m=d,p=(a(168),function(){var e;"undefined"!=typeof window&&(e=window.sessionStorage.getItem("token"));var t=Object(r.useState)(!1),a=t[0],n=t[1];return o.a.createElement("div",null,o.a.createElement("span",{onClick:function(){e?(n(!0),document.getElementById("chatIcon").style.display="none"):window.location.replace("forum-frontend/user/log-in")},id:"chatIcon"}),!!e&&o.a.createElement(m,{closeChat:function(){n(!1),document.getElementById("chatIcon").style.display="inline-block"},display:a,auth:e}))}),f=(a(169),function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem"}},o.a.createElement("main",{style:{paddingTop:"100px"}},t),o.a.createElement("footer",null,o.a.createElement(p,null))))},data:n})});f.propTypes={children:l.a.node.isRequired};t.a=f},190:function(e,t,a){"use strict";a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=function(e){var t={defaultTextAreaStyle:{width:"100%",height:"120px",padding:"5px",border:"none",boxShadow:"1px 1px 4px 0px rgba(0,0,0,.3)",fontFamily:"Ubuntu, sans-serif",resize:"none"},mainStyle:{},defaultButtonStyle:{padding:"8px 45px",backgroundColor:"#113af1",border:"none",boxShadow:"1px 1px 3px 0px rgba(0,0,0, .8)",fontWeight:"600",color:"white",fontFamily:"Ubuntu",borderRadius:"3px",letterSpacing:".03rem",marginTop:"1rem"}},a=Object(n.useState)(e.textValue),o=a[0],i=a[1];return r.a.createElement("div",{id:e.id,style:e.mainStyle?Object.assign({},t.mainStyle,e.mainStyle):t.mainStyle},r.a.createElement("textarea",{value:o,onChange:function(e){i(e.target.value)},style:e.textAreaStyle?Object.assign({},t.defaultTextAreaStyle,e.textAreaStyle):t.defaultTextAreaStyle}),r.a.createElement("button",{onClick:function(t){e.handleSubmit(t,o),i("")},style:e.buttonStyle?Object.assign({},t.defaultButtonStyle,e.buttonStyle):t.defaultButtonStyle},e.buttonValue))};l.propTypes={textValue:i.a.string,id:i.a.string,mainStyle:i.a.object,textAreaStyle:i.a.object,handleSubmit:i.a.func,buttonStyle:i.a.object,buttonValue:i.a.string},l.defaultProps={textValue:"",id:0,buttonValue:"Submit"},t.a=l}}]);
//# sourceMappingURL=component---src-pages-post-create-js-bf380022eaeab6fea2b7.js.map