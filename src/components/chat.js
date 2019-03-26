import React from "react"
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

export default Chat
