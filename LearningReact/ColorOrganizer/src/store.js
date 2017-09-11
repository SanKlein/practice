import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import storeFactory from './store'

const store = storeFactory()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-container')
)
