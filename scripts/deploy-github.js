const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/KTichmann/forum-frontend.git",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
