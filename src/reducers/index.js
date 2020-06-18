import { combineReducers } from 'redux'
import notes from './notes'
import auth from './auth'
import filter from './filter'

export default combineReducers({auth, notes, filter})