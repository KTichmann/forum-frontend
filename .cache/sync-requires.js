const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/wim/Documents/forum/forum-frontend/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/wim/Documents/forum/forum-frontend/src/pages/index.js"))),
  "component---src-pages-post-create-js": hot(preferDefault(require("/home/wim/Documents/forum/forum-frontend/src/pages/post/create.js"))),
  "component---src-pages-post-index-js": hot(preferDefault(require("/home/wim/Documents/forum/forum-frontend/src/pages/post/index.js"))),
  "component---src-pages-user-log-in-js": hot(preferDefault(require("/home/wim/Documents/forum/forum-frontend/src/pages/user/log-in.js"))),
  "component---src-pages-user-sign-up-js": hot(preferDefault(require("/home/wim/Documents/forum/forum-frontend/src/pages/user/sign-up.js")))
}

