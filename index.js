import React from 'react'
import { render } from 'react-dom'
import AddTodo from './src/components/AddTodo'

setTimeout(
  function(){
    render(
      <AddTodo />,
      document.getElementById("root")
        )
  },
  1000
)
