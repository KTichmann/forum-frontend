import React from "react"
import moment from "moment"
import Avatars from "@dicebear/avatars"
import sprites from "@dicebear/avatars-male-sprites"
import likesIcon from "../images/likes.png"
import deleteIcon from "../images/delete.png"
import ReactMarkdown from "react-markdown"

import "./styles/postView.css"

const PostView = props => {
  let options = {}
  let avatars = new Avatars(sprites(options))
  return (
    <div>
      <h1>{props.post.title}</h1>
      <div className="post-container">
        <div
          className="avatar"
          dangerouslySetInnerHTML={{
            __html: avatars.create(props.post.username),
          }}
        />
        <div className="post-inner-container">
          <div className="post-info">
            <div>
              {props.post.username}{" "}
              <span className="post-date">
                {moment(props.post.created_at).fromNow()}
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <span style={{ marginRight: "8px", cursor: "pointer" }}>
                {props.postLikes}
              </span>
              <img
                alt="likes"
                onClick={props.handleLike}
                className="like-icon"
                src={likesIcon}
              />
              <img
                alt="delete"
                className="delete-icon"
                style={{
                  display: props.delete ? "inline-block" : "none",
                }}
                src={deleteIcon}
              />
            </div>
          </div>
          <div className="post-main-container">
            <span id="post-content">
              <ReactMarkdown source={props.post.post} />
            </span>
            <span
              className="post-options"
              style={{ display: props.userCanEdit ? "block" : "none" }}
              onClick={() => (props.handleEdit ? props.handleEdit() : false)}
            >
              {props.editText}
            </span>
            <span
              id="delete-section"
              className="post-options posts"
              style={{ display: props.userCanEdit ? "block" : "none" }}
              onClick={() =>
                props.handleDelete ? props.handleDelete() : false
              }
            >
              {props.deleteText}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostView
