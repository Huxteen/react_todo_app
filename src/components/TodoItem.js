import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
       return {
           background: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ?
           'line-through' : 'none'
       }
    }

    markComplete = (e) => {
        console.log(this.props)
    }


  render() {
    return (
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.markComplete} />&nbsp;
                {this.props.todo.id}:
                { this.props.todo.title }
            </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}



export default TodoItem
