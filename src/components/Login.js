import React from 'react'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleSubmit = e => {
        const {username, password} = this.state
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({user: {username: username, password: password}})
        }
        fetch("http://localhost:3000/users", configObj)
        .then(resp => resp.json())
        .then(console.log)
    }

    render() {
        return (
            <form onSubmit={}>
                <input name='username' onChange={this.handleInputChange} value={this.state.username}></input>
                <input name='password' onChange={this.handleInputChange} value={this.state.password}></input>
                <input type='submit' value='Login'></input>
            </form>
        )
    }

}