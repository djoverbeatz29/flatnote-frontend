import React from 'react'
import { connect } from 'react-redux'
import { fetchNotesSuccess } from '../actions/notes'

class NoteContainer extends React.Component {

    componentDidMount() {
        fetch('http://localhost:3000/notes')
        .then(r => r.json())
        .then(notesJSON => this.props.fetchNotesSuccess(notesJSON))
    }

    render() {
        let notes = this.props.notes.map((noteObj, ix) => {
            return <div key={ix} className='note'>
                <h1>{noteObj.title}</h1>
                <p>{noteObj.content}</p>
            </div>
        })

        return <div className='note-container'>{notes}</div>
    }
}

const findNotes = state => {
    switch(state.filter) {
        case('completed'):
            return state.notes.filter(note => note.completed)
        case('all'):
            return state.notes
        default:
            return state.notes.filter(note => !note.completed)
    }
}

const mapStateToProps = state => {
    return {notes: findNotes(state)}
}

const mapDispatchToProps = {fetchNotesSuccess}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)