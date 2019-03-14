import React, { useState, useEffect } from 'react';

const Chat = (props) => {
    const url = `http://ktich-chat-app.herokuapp.com/?auth=${props.auth}`
    return (
        <iframe src={url}></iframe>
    )
}

export default Chat;