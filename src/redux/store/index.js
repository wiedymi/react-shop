import { combineReducers } from 'redux'
import products from '@/redux/reducers/products'
import filter from '@/redux/reducers/filter'
import cart from '@/redux/reducers/cart'

export default combineReducers({
  products,
  filter,
  cart,
})
