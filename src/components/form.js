import React from "react"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Form = (props) => (
    <form>
        <p>{props.usernameErrorMessage}</p>
        <TextField 
            style={{display: "block"}}
            id="username"
            label="Username"
            margin="normal"
            variant="outlined"
            error={props.usernameError}
        />
        <p>{props.passwordErrorMessage}</p>
        <TextField 
            style={{display: "block"}}
            id="password"
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            error={props.passwordError}
        />
        <Button variant="contained" color="primary" type="submit" onClick={(e) => props.handleClick(e)}>Sign Up</Button>
    </form>
)

export default Form;