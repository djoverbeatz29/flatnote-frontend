import React from 'react'
import { Notes } from '../components/Notes'

class NoteContainer extends React.Component {
    render() {
        let notes = this.props.notes.map((note, ix) => <Note key={ix} note={note} />)
        return <div class='note-container'>{notes}</div>
    }
}

export default NoteContainer