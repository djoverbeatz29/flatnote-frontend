export default function filter(state='all', action) {
    switch(action.type) {
        case 'UPDATE_FILTER':
            return action.filterType
        default:
            return state
    }
}