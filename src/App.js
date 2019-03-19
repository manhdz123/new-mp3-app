import React, { Component } from 'react';
import './App.css';
import Control from './components/Control';
import { Search, Sort, List } from './components'
import { connect } from 'react-redux';
import { changeStatus, switchControl, addNumber } from './actions/ActionTypes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ''
    }
  }

  onClear = () => {
    this.setState({ number: '' });
  }

  onAddNumber = (event) => {
    event.preventDefault();
    let newNumber = document.getElementById("number").value;
    this.props.addNumber({ number: newNumber });
    document.getElementById("number").value = "";
  }

  render() {
    console.log(this.props.numberArray);
    const { disabled } = this.props;
    return (
      <div className="App">
        <div className="container-fluid">
          <h1>Hello</h1>
          <input type="text" name="number" id="number" placeholder="input number..." />
          <br />
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {disabled ? <div /> :
              <Control />
            }
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button onClick={this.props.switchControl} type="button" className="btn btn-default btn-fl">Thêm công việc</button>
            <Search />
            <Sort />
            <List />
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
      dispatch(changeStatus())
    },
    switchControl: () => {
      dispatch(switchControl())
    },
    addNumber: (number) => {
      dispatch(addNumber(number))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
