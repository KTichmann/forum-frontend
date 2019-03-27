import React from "react"
import moment from "moment"
import Layout from "../../components/layout"
import PostView from "../../components/postView"
import ContentList from "../../components/contentList"
import Input from "../../components/input"

import "../../components/styles/loader.css"
import "../../components/styles/post.css"
import "../../components/styles/post-index-page.css"

class PostPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: false,
      comments: [],
      commentLikes: [],
      postLikes: 0,
      postExists: true,
      editing: false,
      editingComment: false,
    }

    this.likeHandler = this.likeHandler.bind(this)
    this.getCommentData = this.getCommentData.bind(this)
    this.formatComments = this.formatComments.bind(this)
    this.handleAddComment = this.handleAddComment.bind(this)
    this.editPost = this.editPost.bind(this)
    this.handlePostLike = this.handlePostLike.bind(this)
  }

  componentDidMount() {
    if (this.props.location.state) {
      this.post_id = this.props.location.state.post_id
    } else {
      this.setState({
        postExists: false,
      })
    }

    this.getPostData()
    this.getCommentData()
    this.getPostLikes()
    console.log("mounting")
  }

  getPostData() {
    const url = `https://ktichmann-forum-api.herokuapp.com/posts/${
      this.post_id
    }`

    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          this.setState({
            post: res.data[0],
          })
        } else {
          this.setState({
            postExists: false,
          })
        }
      })
  }

  getCommentData() {
    const url = `https://ktichmann-forum-api.herokuapp.com/comments/${
      this.post_id
    }`

    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          const sortedComments = res.data.sort((first, second) => {
            return moment(second.created_at).isBefore(moment(first.created_at))
              ? 1
              : -1
          })
          this.setState({
            comments: sortedComments,
          })

          this.getCommentLikes()
        } else {
          //TODO: handle error
        }
      })
      .catch(error => {
        console.log(error)
        //TODO: handle error somehow
      })
  }

  getCommentLikes() {
    let comments = this.state.comments.map(commentObj => commentObj.comment_id)
    let commentString = comments.join("&")
    const url = `https://ktichmann-forum-api.herokuapp.com/likes/comments/${commentString}`
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          this.setState({
            commentLikes: res.data,
          })
        } else {
          //TODO: handle error
        }
      })
      .catch(error => {
        console.log(error)
        //TODO: handle error
      })
  }

  getPostLikes() {
    const url = `https://ktichmann-forum-api.herokuapp.com/likes/posts/${
      this.post_id
    }`

    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          this.setState({
            postLikes: res.data.length > 0 ? res.data[0].count : 0,
          })
        } else {
          //TODO: handle error
        }
      })
      .catch(error => {
        console.log(error)
        //TODO: handle error
      })
  }

  likeHandler(id) {
    let likes = document.getElementById(id).querySelector(`.likes`)
    if (sessionStorage.getItem("token")) {
      if (likes.classList.contains("likeAdded")) {
        likes.classList.remove("likeAdded")

        const url = "https://ktichmann-forum-api.herokuapp.com/likes/remove"

        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: sessionStorage.getItem("token"),
          },
          body: `type=comment&id=${id}`,
        })
          .then(res => res.json())
          .then(res => {
            this.setState(prevState => ({
              commentLikes: prevState.commentLikes.map(likeObj => {
                if (likeObj.id === id) {
                  return { ...likeObj, count: parseInt(likeObj.count) - 1 }
                } else {
                  return likeObj
                }
              }),
            }))
          })
          .catch(
            error => console.log(error)
            //TODO: Handle error
          )
      } else {
        likes.classList.add("likeAdded")
        const url = "https://ktichmann-forum-api.herokuapp.com/likes/add"
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: sessionStorage.getItem("token"),
          },
          body: `type=comment&id=${id}`,
        })
          .then(res => res.json())
          .then(res => {
            if (res.success) {
              this.setState(prevState => {
                let commentLikes
                console.log(prevState.commentLikes)
                if (
                  prevState.commentLikes.filter(obj => obj.id === id).length > 0
                ) {
                  commentLikes = prevState.commentLikes.map(likeObj => {
                    if (likeObj.id === id) {
                      return { ...likeObj, count: parseInt(likeObj.count) + 1 }
                    } else {
                      return likeObj
                    }
                  })
                } else {
                  commentLikes = [
                    ...prevState.commentLikes,
                    { id: id, count: 1 },
                  ]
                }
                return {
                  commentLikes: commentLikes,
                }
              })
            }
          })
          .catch(
            error => console.log(error)
            //TODO: Handle error
          )
      }
    }
  }

  formatComments(commentArr) {
    return commentArr.map(commentObj => {
      let commentLikes = this.state.commentLikes.filter(
        obj => obj.id == commentObj.comment_id
      )
      return (
        <div
          key={commentObj.comment_id}
          id={`comment-${commentObj.comment_id}`}
          style={{ position: "relative" }}
        >
          <ContentList
            id={commentObj.comment_id}
            content={commentObj.comment}
            username={commentObj.username}
            date={commentObj.created_at}
            likeHandler={this.likeHandler}
            likes={commentLikes.length > 0 ? commentLikes[0].count : 0}
          />
          {window.sessionStorage.getItem("for-mUsername") ===
          commentObj.username ? (
            <span
              className="comment-edit"
              onClick={() => {
                this.editComment(commentObj.comment_id)
              }}
            >
              Edit
            </span>
          ) : (
            false
          )}
          {this.state.editingComment === commentObj.comment_id ? (
            <div id="delete-section" className="comments">
              <span
                className="comment-delete comment-edit"
                onClick={() => {
                  this.handleDelete(commentObj.comment_id)
                }}
              >
                Delete
              </span>
            </div>
          ) : (
            false
          )}
        </div>
      )
    })
  }

  editComment(commentId) {
    //hide all other edit buttons
    if (this.state.editingComment) {
      //edit the comment using a fetch request
      let url = `https://ktichmann-forum-api.herokuapp.com/comments/edit`
      let comment = document.querySelector(`#comment-${commentId} textarea`)
        .value

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: sessionStorage.getItem("token"),
        },
        body: `id=${commentId}&comment=${comment}`,
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            // this.getCommentData();
            window.location.reload()
          }
        })
        .catch(err => console.log(err))
      //refresh comments
    } else {
      document.querySelectorAll(".comment-edit").forEach(val => {
        val.style.display = "none"
      })
      let commentData = this.state.comments.filter(
        commentObj => commentObj.comment_id === commentId
      )[0].comment

      document.querySelector(
        `#comment-${commentId} .comment-edit`
      ).style.display = "inline"
      document.querySelector(
        `#comment-${commentId} .content`
      ).innerHTML = `<textarea style='width: 100%; height: 100px; resize: none; font-size: .8rem' >${commentData}</textarea>`
      document
        .querySelectorAll(".comment-edit")
        .forEach(node => (node.textContent = "Update"))
      this.setState({ editingComment: commentId })
    }
  }

  handleDelete(id, type = "comments") {
    document.querySelector(`#delete-section.${type}`).innerHTML += `
            <div class="deleteConfirmation">
                <div style="margin-bottom: 1rem">Are you sure you want to delete?</div>
                <div class="deleteConfirmation-buttonHolder">
                    <button class="deleteConfirmation-button" id="keepButton">Keep</button>
                    <button class="deleteConfirmation-button" id="deleteButton">Delete</button>
                </div>
            </div>
        `
    document.getElementById("keepButton").addEventListener("click", () => {
      document.querySelector(".deleteConfirmation").remove()
    })

    document.getElementById("deleteButton").addEventListener("click", () => {
      let deleteUrl = `https://ktichmann-forum-api.herokuapp.com/${type}/delete`
      fetch(deleteUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: sessionStorage.getItem("token"),
        },
        body: `id=${id}`,
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            if (type === "posts") {
              window.location.replace("/")
            } else {
              window.location.reload()
            }
          } else {
            document.querySelector(".deleteConfirmation").remove()
          }
        })
        .catch(err => {
          console.log(err)
          document.querySelector(".deleteConfirmation").remove()
        })
    })
  }

  handleAddComment(e, val) {
    let addCommentUrl = `https://ktichmann-forum-api.herokuapp.com/comments/create`
    //check to make sure val isn't empty:
    if (val) {
      //add the comment to the db on the server via fetch request
      fetch(addCommentUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: sessionStorage.getItem("token"),
        },
        body: `post_id=${this.post_id}&comment=${val}`,
      })
        .then(res => {
          return res.json()
        })
        .then(res => {
          if (res.success) {
            this.getCommentData()
          }
        })
    }
    //update the comment list - with another fetch request to comments
  }

  editPost() {
    if (!this.state.editing) {
      this.setState({ editing: true })
      document.querySelector("#post-content").innerHTML = `
            <textArea style="width: 100%; height: 50vh; margin-bottom: 2rem; padding: 5px; border: none; box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 4px 0px; font-family: Ubuntu, sans-serif; resize: none;">${
              this.state.post.post
            }</textArea>`
    } else {
      //Make a fetch request to the server to update the post
      let post = document.querySelector("#post-content textarea").value
      let url = `https://ktichmann-forum-api.herokuapp.com/posts/edit`

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: sessionStorage.getItem("token"),
        },
        body: `title=${this.state.post.title}&post=${post}&id=${this.post_id}`,
      })
        .then(res => res.json())
        .then(res => {
          console.log(
            `id=${this.post_id}&title=${this.state.post.title}&post=${post}`
          )
          if (res.success) {
            //Refresh the page
            window.location.reload()
          }
        })
        .catch(error => console.log(error))
    }
  }

  handlePostLike() {
    if (window.sessionStorage.getItem("token")) {
      const url = "https://ktichmann-forum-api.herokuapp.com/likes/add"
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: sessionStorage.getItem("token"),
        },
        body: `type=post&id=${this.state.post.post_id}`,
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            this.getPostLikes()
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  render() {
    return (
      <Layout>
        {this.state.post ? (
          <PostView
            id="mainPost"
            post={this.state.post}
            handleLike={this.handlePostLike}
            commentLikes={this.state.commentLikes}
            postLikes={this.state.postLikes}
            userCanEdit={
              window.sessionStorage.getItem("for-mUsername") ===
              this.state.post.username
            }
            handleEdit={this.editPost}
            editText={this.state.editing ? "Submit" : "Edit"}
            deleteText={this.state.editing ? "Delete" : ""}
            handleDelete={() =>
              this.handleDelete(this.state.post.post_id, "posts")
            }
          />
        ) : (
          <div className="loader">Loading...</div>
        )}
        {this.formatComments(this.state.comments)}
        {typeof sessionStorage !== "undefined" ? ( //for gatsby prod deployment
          sessionStorage.getItem("token") ? (
            <Input
              id={`post-${this.post_id}`}
              buttonValue="Comment"
              handleSubmit={this.handleAddComment}
            />
          ) : (
            <Input
              handleSubmit={() =>
                window.location.replace("/forum-frontend/user/log-in")
              }
              buttonValue="Log in"
              textValue="Log in to comment"
              textAreaStyle={{
                pointerEvents: "none",
                backgroundColor: "rgba(0,0,0,.1)",
                padding: "1rem 1.5rem",
                color: "rgba(0,0,0,.6)",
              }}
            />
          )
        ) : (
          false
        )}
      </Layout>
    )
  }
}

export default PostPage
