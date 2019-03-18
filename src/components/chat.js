import React, { useState, useEffect } from 'react';

const Chat = (props) => {
    const url = `http://ktich-chat-app.herokuapp.com/?auth=${props.auth}`
    return (
        <iframe style={{height: '400px', width: '300px'}} src={url}></iframe>
    )
}

export default Chat;