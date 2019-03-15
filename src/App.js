import React, { Component } from 'react';
import './App.css';
import Control from './components/Control';
import {Search, Sort} from './components'
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      disabled: false
    }
  }
  handleClick = () => {
      this.setState({disabled: !this.state.disabled})
  }
  render() {
    return (
      <div className="App">
            <div class="container-fluid">
            <h1>Hello</h1>
            <button onClick={this.props.changeStatus}>Event Handling</button>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                {this.state.disabled ? <div/> : 
                  <Control/>
              }
         </div>
              
              <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <button onClick={this.handleClick} type="button" class="btn btn-default">Thêm công việc</button>
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
    prop: state.prop
  }
}

 const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(onAddTask)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
