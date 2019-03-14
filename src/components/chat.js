import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';


class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }

        this.handleValueChange = this.handleValueChange.bind(this)
        this.handleChat = this.handleChat.bind(this)
    }

    componentDidMount(){
        this.auth = window.sessionStorage.getItem('token');
        this.socket = io('http://127.0.0.1:5000');

        this.socket.on('chat message', function(msg){
            document.getElementById('chat-box').querySelector('ul').innerHTML += `<li>${msg.username}: ${msg.message}</li>`
        })

    }

    handleValueChange(e){
        this.setState({value: e.target.value})
    }

    handleChat(){
        const auth = this.auth;
        this.socket.emit('chat message', {auth: auth, message: this.state.value})
    }

    render(){
        return(
            <div id="chat-box">
                <ul style={{height: "400px"}}>
                </ul>
                <input onChange={this.handleValueChange} value={this.state.value} id="chat-input" type="text" />
                <button onClick={this.handleChat}>Say</button>
            </div>
        )
    }
}

export default Chat;