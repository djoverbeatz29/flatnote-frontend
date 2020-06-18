export default function notes(state=[], action) {
    switch(action.type) {
        case "ADD_NOTE":
            return [...state, action.newNote]
        case "FETCH_NOTES_SUCCESS":
            return [...state, ...action.notes]
        default:
            return state
    }
}