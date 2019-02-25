import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { redirectTo } from "@reach/router";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class SignUpPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usernameError: false,
            passwordError: false,
            usernameErrorMessage: '',
            passwordErrorMessage: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        
        //Make sure the username isn't empty
        if(!username){
            this.setState({ usernameError: true, usernameErrorMessage: 'Username cannot be empty'})
        } else {
            this.setState({ usernameError: false, usernameErrorMessage: ''})
        }

        if(!password){
            this.setState({ passwordError: true, passwordErrorMessage: 'Password cannot be empty'})
        } else {
            this.setState({ passwordError: false, passwordErrorMessage: ''})
        }

        if(password && username){
            let url = 'https://ktichmann-forum-api.herokuapp.com/user/sign-up'
            let data = `username=${username}&password=${password}`

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: data
            })
            .then(res => res.json())
            .then(res => {
                if(res.success){
                    window.location.href = '/log-in?signup=true'
                    console.log('testing')
                } else if(res.message === 'username taken'){
                    this.setState({
                        usernameError: true,
                        usernameErrorMessage: 'Username Taken'
                    })
                } else {
                    console.log(res)
                }
            })
            .catch(error => console.log(error))
        }
    }
    render(){
        return (
            <Layout>
                <h1>Sign Up</h1>
                <form>
                    <TextField
                        id="username"
                        label="Username"
                        margin="normal"
                        variant="outlined"
                        error={this.state.usernameError}
                    />
                    <p>{this.state.usernameErrorMessage}</p>
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        error={this.state.passwordError}
                    />
                    <p>{this.state.passwordErrorMessage}</p>
                    <Button variant="contained" color="primary" type="submit" onClick={this.handleClick}>Sign Up</Button>
                </form>
            </Layout>
        )
    }
}
  
  export default SignUpPage