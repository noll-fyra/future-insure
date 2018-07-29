import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Route, Redirect } from 'react-router-dom'
import { Switch } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Home from './Home'
import TopNav from './TopNav'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" render={props => <TopNav {...props} />} />
        <div style={{ paddingTop: '64px' }}>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
