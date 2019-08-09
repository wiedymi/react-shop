import { combineReducers } from 'redux'
import cart from '@/reducers/cart'
import { connectRouter } from 'connected-react-router'
import products from '@/reducers/products'
import filter from '@/reducers/filter'

export default history =>
  combineReducers({
    products,
    filter,
    cart,
    router: connectRouter(history),
  })
