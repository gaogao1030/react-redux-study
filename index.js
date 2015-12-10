import React from 'react';;
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './src/containers/App';
import todoApp from './src/reducers';

let store = createStore(todoApp)

setTimeout(
  function(){
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    )
  },
  1000
)
