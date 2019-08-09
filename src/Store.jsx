import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import PropTypes from 'prop-types'
import { getProducts as initState } from '@/actions'
import shop from '@/reducers'

export const history = createBrowserHistory()

const store = createStore(shop(history), compose(applyMiddleware(thunk, routerMiddleware(history))))

store.dispatch(initState())

const Store = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Store
