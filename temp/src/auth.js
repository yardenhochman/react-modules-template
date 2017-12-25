import React, { Component } from 'react';

const initialState = "initial state"
const rerenderFunction = []
const update = (newState) => {
  initialState = newState
  rerenderFunctions.forEach((rerenderFunction) => rerenderFunction())
}
const unsubscribe = (rerenderFunciton) => {
  // find position of rerenderFunction
  const index = subscribers.findIndex(subscriber);
  // remove it
  subscribers.splice(index, 1);
}

const subscribe = (rerenderFunction) => {
  // for convinience, subscribe returns a function to
  // remove the rerendering when it is no longer needed
  rerenderFunctions.push(rerenderFunction)
  return () => unsubscribe(rerenderFunction)
}

class AuthData extends Component {
  componentDidMount() {
    const refresh = this.refresh.bind(this)
    rerenderFunctions.push(refresh)
  }
  render() {
    const withAuth = {...props, auth: initialState}
    return <Component {...withAuth} />
  }
  componentWillUnmount() {
    // remove rerenderComponent function
    // since this component don't need to be rerendered
    // any more
    this.unsubscribe()
}
}
