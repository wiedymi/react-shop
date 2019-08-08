import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import initState from '@/redux/thunk'
import shop from '@/redux/reducers'

export const history = createBrowserHistory()

const store = createStore(shop(history), compose(applyMiddleware(thunk, routerMiddleware(history))))

store.dispatch(initState())

const Store = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default Store
