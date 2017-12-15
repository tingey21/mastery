import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//COMP 37E-1
import React, { Component } from 'react'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
                <Route exact path = '/' component = {landing}/>
                <Route path = '/page/:id' component = {id}
            </Switch>
        </Router>
      </div>
    )
  }
}
