import React, { Component } from 'react';
import { connect } from 'react-redux';
import handleAddPlayer from '../actions/player.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Golf</h1>

        <button onClick={() => handleAddPlayer()(this.props.dispatch)}>Grab player</button>
      </div>
    )
  }
}

export default connect()(App)