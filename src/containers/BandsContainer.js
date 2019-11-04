import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

//Notes

// 1.    ----- connect()----- The connect() function connects a React component to a Redux store.
//       It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
//       It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.
// 2.    ----- mapStateToProps-----As the first argument passed in to connect, mapStateToProps is used for selecting the part of the data from the store that 
//       the connected component needs. It’s frequently referred to as just mapState for short.It is called every time the store state changes.
//       It receives the entire store state, and should return an object of data this component needs.
// 3.    ----- mapDispatchToProp----- As the second argument passed in to connect, mapDispatchToProps is used for dispatching actions to the store.dispatch is a 
//       function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.With React Redux, your components 
//       never access the store directly - connect does it for you. React Redux gives you two ways to let components dispatch actions:
