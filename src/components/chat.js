import React, { useState } from 'react';


const Chat = (props) => {

    useEffect(() => {
        console.log(value)
      });

    const [value, setValue] = useState( "" );

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    const handleChat = () => {

    }

    return (
        <div id="chat-box">
            <ol>
            </ol>
            <input onChange={handleValueChange} value={value} id="chat-input" type="text" />
            <button onClick={handleChat}>Say</button>
        </div>
    )
}

export default Chat;