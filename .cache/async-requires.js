// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/home/wim/Documents/forum/forum-frontend/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/home/wim/Documents/forum/forum-frontend/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-post-create-js": () => import("/home/wim/Documents/forum/forum-frontend/src/pages/post/create.js" /* webpackChunkName: "component---src-pages-post-create-js" */),
  "component---src-pages-post-index-js": () => import("/home/wim/Documents/forum/forum-frontend/src/pages/post/index.js" /* webpackChunkName: "component---src-pages-post-index-js" */),
  "component---src-pages-user-log-in-js": () => import("/home/wim/Documents/forum/forum-frontend/src/pages/user/log-in.js" /* webpackChunkName: "component---src-pages-user-log-in-js" */),
  "component---src-pages-user-sign-up-js": () => import("/home/wim/Documents/forum/forum-frontend/src/pages/user/sign-up.js" /* webpackChunkName: "component---src-pages-user-sign-up-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/wim/Documents/forum/forum-frontend/.cache/data.json")

