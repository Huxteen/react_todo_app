import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    // For single input form
    // onChange = (e) => this.setState({ title: e.target.value });

    // For Multiple Input Form
    onChange = (e) => this.setState({ [e.target.name]: e.target.value,  });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
        <form onSubmit={this.onSubmit} style={{marginTop: '8px', marginBottom: '8px'}}>
            <input 
                type="text" 
                name="title" 
                style={{ flex: '10', padding: '5px', width: '80%' }} 
                placeholder="Add Todo ..." 
                value={this.state.title}
                onChange={this.onChange}
            />

            <input 
                type="submit" 
                value="submit" 
                className="btn" 
                style={{flex: '1', width: '20%'}} 
            />

        </form>
        )
    }
}

export default AddTodo
