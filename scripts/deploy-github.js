const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "https://github.com/KTichmann/forum-frontend.git",
  },
  e => {
    console.log(e)
  }
)
