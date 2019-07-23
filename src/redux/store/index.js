import { combineReducers } from 'redux'
import products from '../reducers/products'
import filter from '../reducers/filter'
import cart from '../reducers/cart'

export default combineReducers({
    products,
    filter,
    cart
})