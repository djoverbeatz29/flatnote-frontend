import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions/notes'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title ? props.title : '',
            content: props.content ? props.content : ''
        }
    }

    handleChange = e => {
        console.log(this.state)
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            completed: true
        }
    
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(newNote)
        }
    
        fetch('http://localhost:3000/notes', reqObj)
        .then(resp => resp.json())
        .then(note => {
            this.props.addNote(note)
            this.setState({
                title: '',
                content: ''
            })
        })
    }

    render() {
        return (
            <div>
                <h2>Create a New Note</h2>
                <form className='note-form' onSubmit={this.handleSubmit}>
                    <label>Title</label><br/>
                    <input
                        onChange={this.handleChange}
                        name='title'
                        type='text'
                        value={this.state.title}/>
                        <br></br>
                    <label>Content</label><br/>
                    <textarea
                        onChange={this.handleChange}
                        name='content'
                        value={this.state.content}/>
                    <br></br>
                    <input type="submit" value="Submit Note"></input>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {addNote}

export default connect(null, mapDispatchToProps)(Form)