import { combineReducers } from 'redux'
import items from '../reducers/items'
import filter from '../reducers/filter'

export default combineReducers({
    items,
    filter
})