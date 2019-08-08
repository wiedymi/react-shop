import { combineReducers } from 'redux'
import cart from '@/redux/reducers/cart'
import { connectRouter } from 'connected-react-router'
import products from '@/redux/reducers/products'
import filter from '@/redux/reducers/filter'

export default history =>
  combineReducers({
    products,
    filter,
    cart,
    router: connectRouter(history),
  })
