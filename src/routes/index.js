import React from 'react'
import { Switch } from 'react-router-dom'
import routeConstant from './routeConstant'
import RouteConfig from './route'
import LoadRoute from './LoadRoute'

function Routes(props) {
  return (
    <Switch>
      {routeConstant.map((routes, routeKey) => {
        return routes.accessibility===true && (
          <RouteConfig
            key={routeKey}
            render={LoadRoute}
            importPath={routes.path}
            {...routes}
          />
        )
      })}
    </Switch>
  )
}

export default Routes
