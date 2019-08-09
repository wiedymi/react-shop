import React from 'react'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import Header from '@/components/Header'
import Product from '@/components/pages/Product'
import Home from '@/components/pages/Home'

import { history } from '@/Store'

const Router = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <>
          <Route component={Header} />
          <Route exact path="/"
            component={Home} />
          <Route path="/product/:id" component={Product} />
        </>
      </Switch>
    </ConnectedRouter>
  )
}

export default Router
