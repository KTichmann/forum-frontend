(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{145:function(e,a,r){"use strict";r.r(a);var t=r(37),n=r.n(t),s=r(7),o=r.n(s),l=r(0),i=r.n(l),c=r(154),u=r(163),d=r(196),m=(r(254),function(e){function a(a){var r;return(r=e.call(this,a)||this).state={usernameError:!1,passwordError:!1,usernameErrorMessage:"",passwordErrorMessage:""},r.handleClick=r.handleClick.bind(n()(r)),r}o()(a,e);var r=a.prototype;return r.handleClick=function(e){var a=this;e.preventDefault();var r=document.getElementById("username").value,t=document.getElementById("password").value;if(r?this.setState({usernameError:!1,usernameErrorMessage:""}):this.setState({usernameError:!0,usernameErrorMessage:"Username cannot be empty"}),t?this.setState({passwordError:!1,passwordErrorMessage:""}):this.setState({passwordError:!0,passwordErrorMessage:"Password cannot be empty"}),t&&r){fetch("https://ktichmann-forum-api.herokuapp.com/user/sign-up",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"username="+r+"&password="+t}).then(function(e){return e.json()}).then(function(e){e.success?document.getElementById("relocate").click():"username taken"===e.message?a.setState({usernameError:!0,usernameErrorMessage:"Username Taken"}):a.setState({usernameErrorMessage:"There was a problem signing you up"})}).catch(function(e){return console.log(e)})}},r.render=function(){return i.a.createElement(u.a,null,i.a.createElement("h1",null,"Sign Up"),i.a.createElement("div",{className:"user-form"},i.a.createElement(d.a,{usernameError:this.state.usernameError,passwordError:this.state.passwordError,usernameErrorMessage:this.state.usernameErrorMessage,passwordErrorMessage:this.state.passwordErrorMessage,handleClick:this.handleClick,buttonText:"Sign Up"}),i.a.createElement("div",{className:"login-message"},"Already a user? ",i.a.createElement(c.a,{to:"/user/log-in"},"Log in here"))),i.a.createElement(c.a,{to:"/user/log-in",id:"relocate",state:{signed_up:!0},style:{display:"none"}}))},a}(i.a.Component));a.default=m},154:function(e,a,r){"use strict";r.d(a,"b",function(){return u});var t=r(0),n=r.n(t),s=r(4),o=r.n(s),l=r(32),i=r.n(l);r.d(a,"a",function(){return i.a});r(159);var c=n.a.createContext({}),u=function(e){return n.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(e,a,r){var t;e.exports=(t=r(162))&&t.default||t},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},162:function(e,a,r){"use strict";r.r(a);r(34);var t=r(0),n=r.n(t),s=r(4),o=r.n(s),l=r(55),i=r(2),c=function(e){var a=e.location,r=i.default.getResourcesForPathnameSync(a.pathname);return n.a.createElement(l.a,Object.assign({location:a,pageResources:r},r.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=c},163:function(e,a,r){"use strict";var t=r(161),n=r(0),s=r.n(n),o=r(4),l=r.n(o),i=r(154),c=(r(166),function(e){e.siteTitle;return"undefined"!=typeof window&&window.addEventListener("scroll",function(){var e=document.querySelector("header");e&&(0===window.pageYOffset?e.classList.remove("shadow"):e.classList.contains("shadow")||e.classList.add("shadow"))}),s.a.createElement("header",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"left"},s.a.createElement("div",{className:"logo"},s.a.createElement(i.a,{to:"/"},"FOR'M")),s.a.createElement("div",{className:"menu"},s.a.createElement(i.a,{to:"/"},"Home"))),s.a.createElement("div",{className:"menu"},s.a.createElement(i.a,{to:"/user/sign-up"},"Sign Up"),s.a.createElement(i.a,{to:"/user/log-in"},"Log In"))))});c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var u=c,d=(r(36),r(167),function(e){e.auth;return s.a.createElement("div",{className:"chat-container",style:{display:display?"inline-block":"none"}},s.a.createElement("div",{onClick:e.closeChat,className:"close-button"},"x"),s.a.createElement("iframe",{title:"chatBox",id:"chatBox",src:e.url}))});d.propTypes={auth:l.a.string,display:l.a.bool,closeChat:l.a.func},d.defaultProps={display:!1,closeChat:!1};var m=d,p=(r(168),function(){var e;"undefined"!=typeof window&&(e=window.sessionStorage.getItem("token"));var a=Object(n.useState)(!1),r=a[0],t=a[1];return s.a.createElement("div",null,s.a.createElement("span",{onClick:function(){e?(t(!0),document.getElementById("chatIcon").style.display="none"):window.location.replace("forum-frontend/user/log-in")},id:"chatIcon"}),!!e&&s.a.createElement(m,{closeChat:function(){t(!1),document.getElementById("chatIcon").style.display="inline-block"},display:r,auth:e}))}),E=(r(169),function(e){var a=e.children;return s.a.createElement(i.b,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem"}},s.a.createElement("main",{style:{paddingTop:"100px"}},a),s.a.createElement("footer",null,s.a.createElement(p,null))))},data:t})});E.propTypes={children:l.a.node.isRequired};a.a=E},196:function(e,a,r){"use strict";var t=r(0),n=r.n(t),s=r(253),o=r.n(s),l=r(223),i=r.n(l),c=r(4),u=r.n(c),d=function(e){return n.a.createElement("form",{style:{paddingLeft:"2rem"}},n.a.createElement("p",null,e.usernameErrorMessage),n.a.createElement(i.a,{style:{display:"block"},id:"username",label:"Username",margin:"normal",variant:"outlined",error:e.usernameError}),n.a.createElement("p",null,e.passwordErrorMessage),n.a.createElement(i.a,{style:{display:"block"},id:"password",label:"Password",type:"password",margin:"normal",variant:"outlined",error:e.passwordError}),n.a.createElement(o.a,{variant:"contained",color:"primary",type:"submit",style:{marginLeft:"8rem",marginTop:"1rem"},onClick:function(a){return e.handleClick(a)}},e.buttonText))};d.propTypes={usernameErrorMessage:u.a.string,passwordErrorMessage:u.a.string,usernameError:u.a.bool,passwordError:u.a.bool},d.defaultProps={usernameErrorMessage:"Error",passwordErrorMessage:"Error",usernameError:!1,passwordError:!1},a.a=d}}]);
//# sourceMappingURL=component---src-pages-user-sign-up-js-1f001383d88e94400d2d.js.map