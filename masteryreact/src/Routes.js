import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//COMP 37E-1
import React, { Component } from 'react'
import Landing from './components/landing'
import Page from './components/page'
export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
                <Route exact path = '/' component = {Landing}/>
                <Route path = '/page/:id' component = {Page} />
            </Switch>
        </Router>
      </div>
    )
  }
}
