import React from 'react'
import ReactDOM from 'react-dom'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import Root from '@/Root'
import '@/index.scss'

ReactDOM.render(<Root />, document.getElementById('root'))

OfflinePluginRuntime.install()
