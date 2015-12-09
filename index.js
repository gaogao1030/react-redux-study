import React from 'react';
import { render } from 'react-dom'
import App from './src/containers/App'

setTimeout(
  function(){
    render(
      <App />,
      document.getElementById("root")
        )
  },
  1000
)
