import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions/notes'

class Form extends React.Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = e => {
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
            <form className='note-form' onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    name='title'
                    type='text'
                    placeholder='Title'
                    value={this.state.title}/>
                <input
                    onChange={this.handleChange}
                    name='content'
                    type='text'
                    placeholder='Content'
                    value={this.state.content}/>
                <input type="submit" value="New Note"></input>
            </form>
        )
    }
}

const mapDispatchToProps = {addNote}

export default connect(null, mapDispatchToProps)(Form)