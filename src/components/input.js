import React, { useState } from "react";

const Input = (props) => {
    const style = {
        defaultTextAreaStyle: {
            width: "100%",
            height: "120px",
            padding: "5px",
            border: "none",
            boxShadow: "1px 1px 4px 0px rgba(0,0,0,.3)",
            fontFamily: "Ubuntu, sans-serif",
            resize: "none"
        },

        mainStyle: {

        },

        defaultButtonStyle: {
            
        }
    }

    const [value, setValue] = useState( props.textValue );

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div id={props.id} style={props.mainStyle ? {...style.mainStyle, ...props.mainStyle} : style.mainStyle}>
            <textarea value={value} onChange={handleValueChange} style={props.textAreaStyle ? {...style.defaultTextAreaStyle, ...props.textAreaStyle} : style.defaultTextAreaStyle}> </textarea>
            <button onClick={(e) => { props.handleSubmit(e, value) }} style={props.buttonStyle ? {...style.defaultButtonStyle, ...props.buttonStyle} : style.defaultButtonStyle}>{props.buttonValue ? props.buttonValue : "Submit"}</button>
        </div>
    )
}

export default Input;