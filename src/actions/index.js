const fetchNotesSuccess = notesJSON => {
    return {
        type: 'FETCH_NOTES_SUCCESS',
        notes: notesJSON
    }
}

export const thunkFetchNotes = () => {
    return function(dispatch) {
        fetch('http://localhost:3000/notes')
        .then(r => r.json())
        .then(notesJSON => dispatch(fetchNotesSuccess(notesJSON)))
    }
}