import React from "react"
import PropTypes from "prop-types"

import "./styles/chat.css"

const Chat = props => {
  const url = `https://ktich-chat-app.herokuapp.com/?auth=${props.auth}`
  return (
    <div
      className="chat-container"
      style={{ display: props.display ? "inline-block" : "none" }}
    >
      <div onClick={props.closeChat} className="close-button">
        x
      </div>
      <iframe title="chatBox" id="chatBox" src={url} />
    </div>
  )
}

Chat.propTypes = {
  auth: PropTypes.string,
  display: PropTypes.bool,
  closeChat: PropTypes.func,
}

Chat.defaultProps = {
  display: false,
  closeChat: false,
}

export default Chat
