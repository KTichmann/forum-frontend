import React from "react"
import moment from "moment"
import Avatars from "@dicebear/avatars"
import sprites from "@dicebear/avatars-male-sprites"
import commentIcon from "../images/comments.png"
import likesIcon from "../images/likes.png"
import PropTypes from "prop-types"

import "./styles/contentList.css"

let options = {}
let avatars = new Avatars(sprites(options))

const ContentList = props => {
  return (
    <div id={props.id} className={`content ${props.hover ? "hover" : ""}`}>
      <div className="main-content-container">
        <div
          className="avatar"
          dangerouslySetInnerHTML={{ __html: avatars.create(props.username) }}
        />
        <div style={{ flexDirection: "column", marginLeft: "25px" }}>
          {props.title ? <div className="title">{props.title}</div> : false}
          <div className="time">
            {`${props.username} `}
            {moment(props.date).fromNow()}
          </div>
          <div className="mainContent">{props.content}</div>
        </div>
      </div>
      <div
        className="likes"
        onClick={() =>
          props.likeHandler ? props.likeHandler(props.id) : false
        }
      >
        {props.commentCount
          ? [
              <div key={`count-${props.id}`} className="comment-count">
                {props.commentCount}
              </div>,
              <img
                key={`likes-${props.id}`}
                alt="comments"
                className="likeImg"
                src={commentIcon}
              />,
            ]
          : false}
        <div className="like-count">{props.likes ? props.likes : 0}</div>
        <img alt="likes" className="likeImg" src={likesIcon} />
      </div>
    </div>
  )
}

ContentList.propTypes = {
  id: PropTypes.number,
  hover: PropTypes.bool,
  username: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  likeHandler: PropTypes.func,
  commentCount: PropTypes.number,
  likes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

ContentList.defaultProps = {
  id: 0,
  hover: false,
  username: "",
  title: "",
  date: "",
  content: "",
  commentCount: 0,
  likes: 0,
}

export default ContentList
