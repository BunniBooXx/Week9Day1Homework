import React, { Component } from 'react'
import Navbar from './Navbar'





export default class App extends Component {

  constructor () {
    super(); 
    this.state = {
      addItem: 0,
      toDo: null
    }
  }

  addItems = () => {
    this.setState({
      addItem: this.state.addItem += 1
    })
  }

  item = (e) => {
    e.preventDefault();
    const item = e.target.item.value;
    this.setState({
       toDo : item
    })
  }
  componentDidMount=() => {

  }

    
  
  render() {
    return (
      <div>
        <Navbar anything = {this.state.toDo}/>

        <form> 
          <input placeholder="what to do next" name = "item"></input>
          <button onSubmit={this.item}>Submit</button>

          <h1> To-Do : {this.state.toDo}</h1>
          <h1>Add Item: {this.state.addItem}</h1><button onClick={this.addItems}>+</button>
        </form>
      </div>
    )
  }
}
