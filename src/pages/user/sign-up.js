import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Form from "../../components/form"
import "../../components/styles/user.css"
class SignUpPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usernameError: false,
      passwordError: false,
      usernameErrorMessage: "",
      passwordErrorMessage: "",
    }

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    e.preventDefault()
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    //Make sure the username isn't empty
    if (!username) {
      this.setState({
        usernameError: true,
        usernameErrorMessage: "Username cannot be empty",
      })
    } else {
      this.setState({ usernameError: false, usernameErrorMessage: "" })
    }

    if (!password) {
      this.setState({
        passwordError: true,
        passwordErrorMessage: "Password cannot be empty",
      })
    } else {
      this.setState({ passwordError: false, passwordErrorMessage: "" })
    }

    if (password && username) {
      let url = "https://ktichmann-forum-api.herokuapp.com/user/sign-up"
      let data = `username=${username}&password=${password}`

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            document.getElementById("relocate").click()
            // window.location.href = "/user/log-in?signup=true"
          } else if (res.message === "username taken") {
            this.setState({
              usernameError: true,
              usernameErrorMessage: "Username Taken",
            })
          } else {
            this.setState({
              usernameErrorMessage: "There was a problem signing you up",
            })
          }
        })
        .catch(error => console.log(error))
    }
  }
  render() {
    return (
      <Layout>
        <h1>Sign Up</h1>
        <div className="user-form">
          <Form
            usernameError={this.state.usernameError}
            passwordError={this.state.passwordError}
            usernameErrorMessage={this.state.usernameErrorMessage}
            passwordErrorMessage={this.state.passwordErrorMessage}
            handleClick={this.handleClick}
            buttonText="Sign Up"
          />
          <div className="login-message">
            Already a user? <Link to="/user/log-in">Log in here</Link>
          </div>
        </div>
        <Link
          to="/user/log-in"
          id="relocate"
          state={{ signed_up: true }}
          style={{ display: "none" }}
        />
      </Layout>
    )
  }
}

export default SignUpPage
