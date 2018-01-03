import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.trees = [{data: "Root", child:[{data: "child1", child:[]}, {data: "child2", child:[]}]}, {data: "Root1", child:[{data: "child1.1", child:[]}, {data: "child1.2", child:[]}]}];
  }
  render() {
    var rootNodes = this.trees.map(function(root) {
      return (
        <Node data={root}/>
      );
    });
    return (
      <div className="App">
          {rootNodes}
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
    this.state = {dataInputVisible: false, data: props.data, childData: ""};
    this.dataInputVisible = false;
    this.child = [{data: "suman", child:[]}, {data: "kumar", child:[]}];
  }
  showDataInput() {
    this.setState({dataInputVisible: true});
  }
  hideDataInput() {
    this.setState({dataInputVisible: false});
  }
  handleChange(event) {
    this.setState({childData: event.target.value});
  }
  handleAddNode() {
    var newNode = new Node({data: this.state.childData, child: []});
    this.setState({data:{child: this.state.data.child.push(newNode)} });
  }
  handleDeleteNode() {

  }
  render() {
    const dataInputVisible = this.state.dataInputVisible,
          data = this.state.data.data;
          let children = this.state.data.child.map(function(child){
            return (
              <li>
                <Node data={child}/>
              </li>
            );
          });
    let addButton = <button onClick={this.showDataInput}>+</button>,
        deleteButton = <button onClick={this.handleDeleteNode}>-</button>,
        dataInput = <input type="text" onChange={this.handleChange.bind(this)}></input>,
        createNodeButton = <button onClick={this.handleAddNode.bind(this)}>Create node</button>,
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
          <ul>
            {children}
          </ul>
        </li>
      </ul>
    );
  }
}

export default App;
