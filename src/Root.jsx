import React from 'react'
import Store from '@/Store'
import Router from '@/Router'
import { NotificationContainer } from 'react-notifications'

const Root = () => {
  return (
    <Store>
      <Router />
      <NotificationContainer />
    </Store>
  )
}

export default Root
