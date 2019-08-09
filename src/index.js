import React from 'react'
import ReactDOM from 'react-dom'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import '@/index.scss'
import Root from '@/Root'

ReactDOM.render(<Root />, document.getElementById('root'))

OfflinePluginRuntime.install()
