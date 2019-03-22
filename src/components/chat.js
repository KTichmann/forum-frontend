import React from "react"
import PropTypes from "prop-types"

import "./styles/chat.css"

const Chat = ({ auth, display, closeChat }) => {
  const url = `http://ktich-chat-app.herokuapp.com/?auth=${auth}`
  return (
    <div
      className="chat-container"
      style={{ display: display ? "inline-block" : "none" }}
    >
      <div onClick={closeChat} className="close-button">
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
