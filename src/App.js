import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Node data="shekhar"/>
        </p>
      </div>
    );
  }
}
class Node extends Component {
  constructor(props) {
    super(props);
    this.handleAddNode = this.handleAddNode.bind(this);
    this.handleDeleteNode = this.handleDeleteNode.bind(this);
    this.showDataInput = this.showDataInput.bind(this);
    this.hideDataInput = this.hideDataInput.bind(this);
    this.state = {dataInputVisible: false, data: props.data};
    this.dataInputVisible = false;
    this.child = [{data: "suman", child:[]}, {data: "kumar", child:[]}];
  }
  showDataInput() {
    this.setState({dataInputVisible: true});
  }
  hideDataInput() {
    this.setState({dataInputVisible: false});
  }
  handleAddNode() {
    this.child.push(new Node({data: this.state}));
  }
  handleDeleteNode() {

  }
  handleChange(event) {
    this.setState({data: event.target.value});
  }
  render() {
    const dataInputVisible = this.state.dataInputVisible,
          data = this.state.data;
    let addButton = <button onClick={this.showDataInput}>Add new</button>,
        deleteButton = <button onClick={this.handleDeleteNode}>Delete</button>,
        dataInput = <input type="text" onChange={this.handleChange}></input>,
        createNodeButton = <button onClick={this.handleAddNode}>Create node</button>,
        element1 = null,
        element2 = null;
        if(dataInputVisible) {
          element1 = dataInput;
          element2 = createNodeButton;
        } else {
          element1 = addButton;
          element2 = deleteButton;
        }
    return (
      <ul>
        <li>
          {data}
          {element1}{element2}

        </li>
      </ul>
    );
  }
}

export default App;
