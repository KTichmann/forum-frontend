import React, { useState } from "react"
import Chat from "./chat"

import "./styles/chatBar.css"

const ChatBar = () => {
  let auth

  if (typeof window !== "undefined") {
    //for gatsby build
    auth = window.sessionStorage.getItem("token")
  }
  const [showChat, setShowChat] = useState(false)

  const handleClick = () => {
    if (auth) {
      setShowChat(true)
      document.getElementById("chatIcon").style.display = "none"
    } else {
      window.location.replace("forum-frontend/user/log-in")
    }
  }

  const closeChat = () => {
    setShowChat(false)
    document.getElementById("chatIcon").style.display = "inline-block"
  }

  return (
    <div>
      <span onClick={handleClick} id="chatIcon" />
      {auth ? (
        <Chat closeChat={closeChat} display={showChat} auth={auth} />
      ) : (
        false
      )}
    </div>
  )
}

export default ChatBar
