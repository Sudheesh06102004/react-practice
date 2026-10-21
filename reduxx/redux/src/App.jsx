import React from 'react'
import Customeradd from './Customeradd'
import CustomerView from './CustomerView'
import { Provider } from 'react-redux'
import {store} from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>React Redux Customer Add</h1>
        <Customeradd/>
        <CustomerView/>
      </div>
    </Provider>
  )
}

export default App