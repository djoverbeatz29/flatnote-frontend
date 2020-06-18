import React from 'react'
import { connect } from 'react-redux'
import loginSuccess from '../actions/auth'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    handleSubmit = e => {
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        }

        fetch("http://localhost:3000/auth", configObj)
        .then(r => r.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            }
            else {
                this.props.loginSuccess(user)
                this.props.history.push('/dashboard')
            }
        })
    }

    render() {
        return (
            <div>
                <h3>Sign In</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Username
                    <input name='username' onChange={this.handleInputChange} value={this.state.username}></input>
                    </label>
                    <br></br>
                    <label>Password
                        <input name='password' onChange={this.handleInputChange} value={this.state.password}></input>
                    </label>
                    <br></br>
                    <input type='submit' value='Login'></input>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = {loginSuccess}

export default connect(null, mapDispatchToProps)(Login)