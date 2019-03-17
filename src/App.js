import React, { Component } from 'react';
import './App.css';
import Control from './components/Control';
import {Search, Sort} from './components'
import {connect} from 'react-redux';
import {TOGGLE_STATUS, TOGGLE_CONTROL, ADD_NUMBER} from './actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        number: null
    }
  }


  render() {
    const {status, disabled, numberArray} = this.props;
    console.log(numberArray);
     return (
      <div className="App">
            <div className="container-fluid">
            <h1>Hello</h1>
            <input type="text" name="number" placeholder="input number..." onChange={(event) => this.setState({number: event.target.value})}/>
            <br/>
            <button type="button" onClick = {() => this.props.addNumber(this.state.number)}>Add Number!</button>
            <button onClick={this.props.changeStatus}>Event Handling</button>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                {disabled ? <div/> : 
                  <Control/>
              }
         </div>
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <button onClick={this.props.switchControl} type="button" className="btn btn-default">Thêm công việc</button>
                  <Search/>
                  <Sort/>
              </div>
            </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    status: state.status,
    disabled: state.disabled,
    numberArray: state.number
  }
}

 const mapDispatchToProps = (dispatch) => {
  return {
    changeStatus: () => {
      dispatch({type: TOGGLE_STATUS})
    },
    switchControl: () => {
      dispatch({type: TOGGLE_CONTROL})
    },
    addNumber: (newNumber) => {
      dispatch({type: ADD_NUMBER, action: newNumber})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
