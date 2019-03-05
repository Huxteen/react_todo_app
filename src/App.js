import React, { Component } from 'react';
import Todos from './components/Todos';



import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take Out The Trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner With Wife',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting With Boss',
        completed: false
      },
      
    ]

  }


  markComplete = () => {
    
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
