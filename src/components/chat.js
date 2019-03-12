import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = (props) => {
    const auth = window.sessionStorage.getItem('token')
    const socket = io("http://127.0.0.1:3000");

    socket.on('chat message', function(msg){
        document.getElementById('chat-box').querySelector('ol').innerHTML += `<li>${msg.username}: ${msg.message}</li>`
    })

    const [value, setValue] = useState( "" );

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    const handleChat = () => {
        socket.emit('chat message', {auth, message: value})
    }

    return (
        <div id="chat-box">
            <ol style={{height: "400px"}}>
            </ol>
            <input onChange={handleValueChange} value={value} id="chat-input" type="text" />
            <button onClick={handleChat}>Say</button>
        </div>
    )
}

export default Chat;