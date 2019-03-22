import React, { useState } from "react"
import PropTypes from "prop-types"

const Input = props => {
  const style = {
    defaultTextAreaStyle: {
      width: "100%",
      height: "120px",
      padding: "5px",
      border: "none",
      boxShadow: "1px 1px 4px 0px rgba(0,0,0,.3)",
      fontFamily: "Ubuntu, sans-serif",
      resize: "none",
    },

    mainStyle: {},

    defaultButtonStyle: {
      padding: "8px 45px",
      backgroundColor: "#113af1",
      border: "none",
      boxShadow: "1px 1px 3px 0px rgba(0,0,0, .8)",
      fontWeight: "600",
      color: "white",
      fontFamily: "Ubuntu",
      borderRadius: "3px",
      letterSpacing: ".03rem",
      marginTop: "1rem",
    },
  }

  const [value, setValue] = useState(props.textValue)

  const handleValueChange = e => {
    setValue(e.target.value)
  }

  return (
    <div
      id={props.id}
      style={
        props.mainStyle
          ? { ...style.mainStyle, ...props.mainStyle }
          : style.mainStyle
      }
    >
      <textarea
        value={value}
        onChange={handleValueChange}
        style={
          props.textAreaStyle
            ? { ...style.defaultTextAreaStyle, ...props.textAreaStyle }
            : style.defaultTextAreaStyle
        }
      />
      <button
        onClick={e => {
          props.handleSubmit(e, value)
          setValue("")
        }}
        style={
          props.buttonStyle
            ? { ...style.defaultButtonStyle, ...props.buttonStyle }
            : style.defaultButtonStyle
        }
      >
        {props.buttonValue}
      </button>
    </div>
  )
}

Input.propTypes = {
  textValue: PropTypes.string,
  id: PropTypes.string,
  mainStyle: PropTypes.object,
  textAreaStyle: PropTypes.object,
  handleSubmit: PropTypes.func,
  buttonStyle: PropTypes.object,
  buttonValue: PropTypes.string,
}

Input.defaultProps = {
  textValue: "",
  id: 0,
  buttonValue: "Submit",
}

export default Input
