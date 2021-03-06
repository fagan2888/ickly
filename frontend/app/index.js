import 'bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../app/styles/styles.css'
import '../static/images/icklyHero.jpg'
import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index'
import App from './app'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware
  ))
)

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('react-app'))

// give cypress access to the redux store
if (window.Cypress) {
  window.store = store
}

module.hot.accept()
