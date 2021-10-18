import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';


class App extends Component {
  state = {
    todos : [
      {
        id: 1,
        title : "Eat lunch",
        isCompleted: true
      },
      {
        id: 2,
        title: "Finish Project",
        isCompleted: false
      },{
        id:3,
        title: "Download Hunter X Hunter",
        isCompleted: false
      }
    ]
  }
  render() {
    
    return (
      <div className="App">
      <Header/>
      <Todos todos={this.state.todos}/>
    </div>
    )
  }
}

export default App

