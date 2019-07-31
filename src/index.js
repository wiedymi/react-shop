import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import '@/styles/base/index.scss'
import App from '@/App'
import shop from '@/redux/store'

const store = createStore(shop, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
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
