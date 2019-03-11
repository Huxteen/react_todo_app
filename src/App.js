import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';

// 1:22

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take Out The Trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner With Wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting With Boss',
        completed: false
      },
      
    ]

  }


  // Toggle Complete true or false
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed 
      }
      return todo;
    })  });
  }



  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                <Route.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </Route.Fragment>
              )} />

            <Route path="/about" component={About} />       />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
