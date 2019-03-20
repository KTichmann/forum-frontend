import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Input from "../../components/input"
import "../../components/styles/create-page.css"

const Create = () => {
  const handleSubmit = (e, val) => {
    let title = document.getElementById("title").value
    //Check if post or title are empty
    if (val && title) {
      const postUrl = `https://ktichmann-forum-api.herokuapp.com/posts/create`

      fetch(postUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: sessionStorage.getItem("token"),
        },
        body: `title=${title}&post=${val}`,
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            document.getElementById("redirect").click()
          }
        })
        .catch(error => console.log(error))
    }
    //Check if user can make the post
  }

  return (
    <Layout>
      <input id="title" type="text" placeholder="Title" />

      {typeof sessionStorage !== "undefined" ? ( //check for sessionStorage to allow gatsby prod build
        sessionStorage.getItem("token") ? (
          <Input
            textAreaStyle={{ height: "60vh" }}
            handleSubmit={handleSubmit}
            buttonValue={"Post"}
          />
        ) : (
          window.location.replace("/log-in")
        )
      ) : (
        false
      )}
      <Link id="redirect" to="/" style={{ display: "none" }} />
    </Layout>
  )
}

export default Create
