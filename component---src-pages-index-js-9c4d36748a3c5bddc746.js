(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);a(210);var n=a(37),s=a.n(n),i=a(7),r=a.n(i),o=a(0),c=a.n(o),l=a(186),u=a(163),d=a(154),m=(a(214),a(264),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={auth:"",comments:[],data:[],likes:[],postView:c.a.createElement("div",{className:"loader"},"Loading...")},a.sortBy=a.sortBy.bind(s()(a)),a.preparePosts=a.preparePosts.bind(s()(a)),a.setPosts=a.setPosts.bind(s()(a)),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setPosts(),this.getComments(),this.getLikes(),this.setState({auth:window.sessionStorage.getItem("token")})},a.getLikeCount=function(e,t){var a=t.filter(function(t){return t.id===e});return a[0]?a[0].count:0},a.preparePosts=function(e,t){var a=this;void 0===t&&(t=!0);var n=e;t&&(n=e.sort(function(e,t){return t.post_id-e.post_id}));var s=n.map(function(e){return c.a.createElement(d.a,{to:"/post",state:{post_id:e.post_id},style:{textDecoration:"none"},key:e.post_id},c.a.createElement(l.a,{id:e.post_id,username:e.username,content:e.post.substring(0,175),title:e.title,date:e.created_at,commentCount:a.state.comments.filter(function(t){return t===e.post_id}).length,likes:a.getLikeCount(e.post_id,a.state.likes),hover:!0}))});this.setState({postView:s})},a.setPosts=function(){var e=this;fetch("https://ktichmann-forum-api.herokuapp.com/posts/").then(function(e){return e.json()}).then(function(t){e.setState({data:t.data}),e.preparePosts(e.state.data)})},a.getComments=function(){var e=this;fetch("https://ktichmann-forum-api.herokuapp.com/comments/").then(function(e){return e.json()}).then(function(t){var a=t.data.map(function(e){return e.post_id});e.setState({comments:a}),e.preparePosts(e.state.data)})},a.getLikes=function(){var e=this;fetch("https://ktichmann-forum-api.herokuapp.com/likes/posts").then(function(e){return e.json()}).then(function(t){e.setState({likes:t.data}),e.preparePosts(e.state.data)})},a.sortBy=function(e){var t,a=this,n=e.target.value,s=function(e,t){return e<t?-1:1};switch(n){case"title":t=this.state.data.sort(function(e,t){var a=e.title.toUpperCase(),n=t.title.toUpperCase();return s(a,n)});break;case"date":t=this.state.data.sort(function(e,t){var a=e.created_at,n=t.created_at;return s(n,a)});break;case"likes":t=this.state.data.sort(function(e,t){var n=a.state.likes.filter(function(t){return t.id===e.post_id})[0],i=a.state.likes.filter(function(e){return e.id===t.post_id})[0];return n&&i?s(i.count,n.count):n?-1:1});break;case"comments":t=this.state.data.sort(function(e,t){var n=a.state.comments.filter(function(t){return t==e.post_id}).length,i=a.state.comments.filter(function(e){return e==t.post_id}).length;return s(i,n)});break;default:t=this.state.data}this.preparePosts(t,!1)},a.render=function(){return c.a.createElement(u.a,{title:"For'm"},c.a.createElement("div",{style:{marginBottom:"30px",display:"flex",justifyContent:"space-between"}},c.a.createElement(d.a,{to:"post/create",className:"create-post-button"},"Start a Discussion"),c.a.createElement("select",{className:"sort",onChange:this.sortBy},c.a.createElement("option",{value:"title"},"Title"),c.a.createElement("option",{value:"date"},"Date"),c.a.createElement("option",{value:"likes"},"Likes"),c.a.createElement("option",{value:"comments"},"Comments"))),this.state.postView)},t}(c.a.Component));t.default=m},154:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),s=a.n(n),i=a(4),r=a.n(i),o=a(32),c=a.n(o);a.d(t,"a",function(){return c.a});a(159);var l=s.a.createContext({}),u=function(e){return s.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},159:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},162:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),s=a.n(n),i=a(4),r=a.n(i),o=a(55),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},163:function(e,t,a){"use strict";var n=a(161),s=a(0),i=a.n(s),r=a(4),o=a.n(r),c=a(154),l=(a(166),function(e){e.siteTitle;return"undefined"!=typeof window&&window.addEventListener("scroll",function(){var e=document.querySelector("header");e&&(0===window.pageYOffset?e.classList.remove("shadow"):e.classList.contains("shadow")||e.classList.add("shadow"))}),i.a.createElement("header",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"left"},i.a.createElement("div",{className:"logo"},i.a.createElement(c.a,{to:"/"},"FOR'M")),i.a.createElement("div",{className:"menu"},i.a.createElement(c.a,{to:"/"},"Home"))),i.a.createElement("div",{className:"menu"},i.a.createElement(c.a,{to:"/user/sign-up"},"Sign Up"),i.a.createElement(c.a,{to:"/user/log-in"},"Log In"))))});l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};var u=l,d=(a(36),a(167),function(e){e.auth;return i.a.createElement("div",{className:"chat-container",style:{display:display?"inline-block":"none"}},i.a.createElement("div",{onClick:e.closeChat,className:"close-button"},"x"),i.a.createElement("iframe",{title:"chatBox",id:"chatBox",src:e.url}))});d.propTypes={auth:o.a.string,display:o.a.bool,closeChat:o.a.func},d.defaultProps={display:!1,closeChat:!1};var m=d,p=(a(168),function(){var e;"undefined"!=typeof window&&(e=window.sessionStorage.getItem("token"));var t=Object(s.useState)(!1),a=t[0],n=t[1];return i.a.createElement("div",null,i.a.createElement("span",{onClick:function(){e?(n(!0),document.getElementById("chatIcon").style.display="none"):window.location.replace("forum-frontend/user/log-in")},id:"chatIcon"}),!!e&&i.a.createElement(m,{closeChat:function(){n(!1),document.getElementById("chatIcon").style.display="inline-block"},display:a,auth:e}))}),h=(a(169),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem"}},i.a.createElement("main",{style:{paddingTop:"100px"}},t),i.a.createElement("footer",null,i.a.createElement(p,null))))},data:n})});h.propTypes={children:o.a.node.isRequired};t.a=h},179:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALtSURBVGhD7ZlLqE1RGICvt/IWQhJCRh6JgZHHgJmJZwkJA7opBibe74EUYkCeiTChZKCYUEgpBshzQB4pRPJ+fN/q7Lrdzrm39tlnn3XqfPV1+/+971rrP4+11lm7oU6dOlVhEF7AH/gKt2MnrCn64gv8h38Kf/UqtsWaoA1eRgd+HXvjBHxTyM3HmmA1OuDX2M9EgZVo/kyIImc8+p3w4zTNRBOmoIVcC1HEdMPH6GB3mmjGCvTa0RBFzEl0oLewg4lm3EavzwpRpCxAB/kJh5poxkT0+jvsaCJGRuBndKClZqQT6PWtIYoQX9076CBLffZdU5wAfuEAEzGyGy3iIXYxUYR16D1nQxQhM/AvfsdxJorgO+Z6YiGTTMRGf3yLDnCViRIsRO+5G6LIcAtyBR3gpUJcCgvwvrkhioy16OD8yPQxUYLJ6H3vcSQOK6I75F5F7IwVxfUg2YJMNdEC7qksJK3PcT1mvvXvjs/QTnaYaIVl+AD9n9Z0ofzQRF+spCC3/sV2Cqk5hDZ8E9ubqCC27ybzJdrncsyE0ehU+w2Hm8iJpWgh7gwyYT/a4J4Q5UdSyJEQZcAjtMFSC1+l2IL2uzFEZeI64SzlXqmdiRzxd42FfME5JsqhB9qYW/S86YoH0f5/outRaqpZSMJxdAybQpSSGApZgo7hWIhSEkMhp9AxbA5RSqpdyBrMZA2rZiH+hrFv3WaiHKpZiLPWRbT/jzgQUxPDd+Q8OgZ3w6mJoZDF6BhqftY6jY6hrHXELYq/D35j3luUnngALcIt0igsiydoY2NClB/+6LJfX8hFJsplL9rgrhDlR3J44QF4JoxFd8BfcbCJnGhEC9kXooxwxrDR++hTqDxIZitP+jPDI1GLsOGn6HFPJfF5yz20v5YOAVPho7QbaOPqsxCnRL+IszNyHm5Aj4Psw+9JRZ4Ge57rRs6Dt6SgSulJ/xCsKBY0HX1HDuO5jPRgz0OOmVgzj7Lr1KmTGw0N/wEn0ADiTF7lBQAAAABJRU5ErkJggg=="},186:function(e,t,a){"use strict";var n=a(0),s=a.n(n),i=a(178),r=a.n(i),o=a(187),c=a.n(o),l=a(188),u=a.n(l),d=a(189),m=a.n(d),p=a(179),h=a.n(p),A=a(4),f=a.n(A),E=(a(213),new c.a(u()({}))),g=function(e){return s.a.createElement("div",{id:e.id,className:"content "+(e.hover?"hover":"")},s.a.createElement("div",{className:"main-content-container"},s.a.createElement("div",{className:"avatar",dangerouslySetInnerHTML:{__html:E.create(e.username)}}),s.a.createElement("div",{style:{flexDirection:"column",marginLeft:"25px"}},!!e.title&&s.a.createElement("div",{className:"title"},e.title),s.a.createElement("div",{className:"time"},e.username+" ",r()(e.date).fromNow()),s.a.createElement("div",{className:"mainContent"},e.content))),s.a.createElement("div",{className:"likes",onClick:function(){return!!e.likeHandler&&e.likeHandler(e.id)}},!!e.commentCount&&[s.a.createElement("div",{key:"count-"+e.id,className:"comment-count"},e.commentCount),s.a.createElement("img",{key:"likes-"+e.id,alt:"comments",className:"likeImg",src:m.a})],s.a.createElement("div",{className:"like-count"},e.likes?e.likes:0),s.a.createElement("img",{alt:"likes",className:"likeImg",src:h.a})))};g.propTypes={id:f.a.number,hover:f.a.bool,username:f.a.string,title:f.a.string,date:f.a.string,content:f.a.string,likeHandler:f.a.func,commentCount:f.a.number,likes:f.a.oneOfType([f.a.string,f.a.number])},g.defaultProps={id:0,hover:!1,username:"",title:"",date:"",content:"",commentCount:0,likes:0},t.a=g},189:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPVSURBVGhD7ZlZqFVVGICv5pCKilY4JIKgKEEIRolBUIaE4oOSOOCAJiE4UUEDZVDWSwUOpIKKgmKCaDmBD5EgZGFkA5oN9pI9mChO5Yg5fN/iLjhuzz3ec+8+56wL54MP7lr73LX/tffaa2yoU6dOVeiCz+M7uAN/xNN4A283eglP4AFcj3PxMaw5D+AE3I4GGQPOegVvZvIK/RM/wiFYVTrhYvwbYzC38DtchlNwBD6EhXTEgfgsLsIt+A8WlrEPR2LF8Q3YPOLNf8NX8FFsCe3xaVyH/2Es93NsaZkl6YHbMN7oZxyP7TAveuH7GCt0AWdibgzD39HCL+J89ElWiv7oG4kPbTV2wFZhWz+DFvgTDsJq8RJeRe+9E/02W8Tj6Ou1oL3YFavNU3gWjWE32lOWxcP4F1rAF2iPUyuGY3ygn5hRDtbefzyEtXgTWUbjdbSLHmtGc7CnsBK+0gFmJMJraFwnsbsZpXCqEQe6WWYkhF39N2hsS80ohV2rPzyMeY4ReeHHb/NyrHFsa5JjaEUmh1SafInGuDCkimB36w9sg60egCrIi2icX4dUEd5Cf+AUO2X8jp1R/4+9zcjieGFFpoZU2uxHYx0TUhn+QC86t0qdFWisdsn3EEfPbiGVNq+isX4cUhm8oG2BOWisa0IqQ5xpptxjReahsX4aUhnsdr34SEiljZscxvphSGVwgujFZ0IqbTajsc4OqQy+Ji8W7QkS4xc01idCKsM09KJ9dMq4SjVOZ+dFF1pOjS+je1AV2cHIiSVoRdxOapLP0B+5P5UirlTjMuM5M5rCiaNvxDeT4ltxD81KHMH7LjO2oj/eE1Lp4IM9j8bWrOVuX4w7Fy60UsCP+is0pl1mNJdJ6ErMBb8L/1rjVMRKnMI+ZpSDo6b/7LKylpX5AI3DhzrKjHLxY1qLFuI8bDpWE3uoVej9PWdp1fLbyrgpZmFqxVyhVRoHvYPoPa+hpwC54JzGLtmCvzWjQjyIr2M8OHLMcOckVxyALPx4SOWLWzvuihQeHjlyZw+LcmEcegO7wWJ4GlXOWqYnTsRN+C/GCvyAL2DFiB9esV2+uDdr8/seN+LbuABnoCs6xyR7QqdBR7HwXNGu3gfkt1DRjUHPJuI5ibvjhXiaW3hs1lzd0vGE129iMFaFOMX3SUasnHth8Qjac0Bn0H6cL+N7uBw3oL2dfztztRt/Eqt+VGG799DTYG0mndE+3WNl86zIm5jiXvFdvIEGbJv23ORcY1p/xbawNG4YirblGHjUscRjh7aw4xJw28X2vRLfRZtUP6xTpyQNDXcA2AsVATwgkOYAAAAASUVORK5CYII="},211:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-9c4d36748a3c5bddc746.js.map