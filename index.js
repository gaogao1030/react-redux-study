import React from 'react'
import { render } from 'react-dom'
import App from './src/components/AddTodo'

setTimeout(
  function(){
    render(
      <App />,
      document.getElementById("root")
        )
  },
  2000
)
