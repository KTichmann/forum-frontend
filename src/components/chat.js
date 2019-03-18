import React, { useState, useEffect } from 'react';

const Chat = (props) => {
    const iframeStyles = {
        height: "400px",
        width: "300px",
        position: "fixed",
        bottom: "10px",
        right: "30px",
        backgroundColor: "white",
        border: "1px solid rgba(100, 0, 0, .1)",
        borderRadius: "5px",
        boxShadow: "4px 3px 5px 1px rgba(0,0,0,.1)"
    }
    const closeStyle = {
        fontWeight: "600",
        right: "0px",
        zIndex: "1000",
        color: "rgba(0,0,0,.7)",
        fontSize: "1.2rem",
        fontFamily: "Ubuntu",
        top: "-25px",
        right: "10px",
        position: "absolute",
        cursor: "pointer"
    }

    const url = `http://ktich-chat-app.herokuapp.com/?auth=${props.auth}`
    return (
        <div style={{display: props.display ? "inline-block" : "none", height: "400px", width: "300px", position: "fixed", bottom: "10px", right: "30px"}}>
            <div onClick={props.closeChat} style={closeStyle}>x</div>
            <iframe style={iframeStyles} id="chatBox" src={url}></iframe>
        </div>
    )
}

export default Chat;