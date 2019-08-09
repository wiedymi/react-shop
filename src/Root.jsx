import React from 'react'
import Store from '@/Store'
import Router from '@/Router'
import { NotificationContainer } from 'react-notifications'
import { ThemeProvider } from 'styled-components'
import 'react-notifications/lib/notifications.css'
import { theme } from '@/constants'

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Store>
        <Router />
        <NotificationContainer />
      </Store>
    </ThemeProvider>
  )
}

export default Root
