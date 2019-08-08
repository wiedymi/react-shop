import React from 'react'
import Header from '@/components/Header'
import Product from '@/components/Product'
import Content from '@/components/Content'
import StyledApp from '@/components/styled/StyledApp'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import { history } from '@/Store'

const Router = () => {
  return (
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
      </>
    </ConnectedRouter>
  )
}

export default Router
