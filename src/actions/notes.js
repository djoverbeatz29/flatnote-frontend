export const addNote = newNote => {
    return {
        type: 'ADD_NOTE',
        newNote: newNote
    }
}

export const fetchNotesSuccess = notesJSON => {
    return {
        type: 'FETCH_NOTES_SUCCESS',
        notes: notesJSON
    }
}

export const updateFilter = filterType => {
    return {
        type: "UPDATE_FILTER",
        filterType: filterType
    }
}