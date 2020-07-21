import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter as Router } from 'connected-react-router'
import * as serviceWorker from './serviceWorker'

import './assets/bootstrap/css/bootstrap.css'
import './assets/css/style.css'
import './assets/bootstrap/js/bootstrap.bundle.min'
import '@fortawesome/fontawesome-free/css/all.css'

import Routes from './routes'
import { Provider } from 'react-redux'
import store, { history } from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
