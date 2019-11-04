import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import manageBand from './reducers/manageBand'

const store = createStore(manageBand)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Notes

// 1.   ------Provider--------The <Provider /> makes the Redux store available to any 
//      nested components that have been wrapped in the connect() function.
//      Since any React component in a React Redux app can be connected, 
//      most applications will render a <Provider> at the top level, 
//      with the entire app’s component tree inside of it.
// 2.   -----createStore------ Creates a Redux store that holds the complete state tree of 
//      your app.There should only be a single store in your app. 
//      The createStore function can take three arguements, but for our sake we are only going 
//      to use one. That arguement is reducer. A reducing function that returns the next state 
//      tree, given the current state tree and an action to handle.
