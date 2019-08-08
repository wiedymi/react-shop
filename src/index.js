import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { NotificationContainer } from 'react-notifications'
import thunk from 'redux-thunk'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import Header from '@/components/Header'
import Product from '@/components/Product'
import Content from '@/components/Content'
import StyledApp from '@/components/styled/StyledApp'
import { Route, Switch } from 'react-router' // react-router v4/v5
import initState from '@/redux/thunk'
import shop from '@/redux/store'
import '@/index.scss'

const history = createBrowserHistory()

const store = createStore(shop(history), compose(applyMiddleware(thunk, routerMiddleware(history))))

store.dispatch(initState())

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <StyledApp>
            <Route component={Header} />
            <Route exact path="/"
              component={Content} />
            <Route path="/product/:id" component={Product} />
          </StyledApp>
        </Switch>
        <NotificationContainer />
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

OfflinePluginRuntime.install({
  onUpdating: () => {
    console.log('SW Event:', 'onUpdating')
  },
  onUpdateReady: () => {
    console.log('SW Event:', 'onUpdateReady')
    // Tells to new SW to take control immediately
    OfflinePluginRuntime.applyUpdate()
  },
  onUpdated: () => {
    console.log('SW Event:', 'onUpdated')
    // Reload the webpage to load into the new version
    window.location.reload()
  },

  onUpdateFailed: () => {
    console.log('SW Event:', 'onUpdateFailed')
  },
})
