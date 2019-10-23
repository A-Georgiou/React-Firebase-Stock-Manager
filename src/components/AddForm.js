import React, {Component} from 'react';

class AddTodo extends Component{
    constructor(props){
        super(props);

        this.state={
            content: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
          [evt.target.name]: value
        });
      }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            content: ''
        })
    }

    render(){
        return(
            <div className="add-todo-form">
                <form onSubmit={this.handleSubmit}>
                    <label >Add item to buy:</label>
                    <input className="white-text" type="text" name="content" onChange={this.handleChange} value={this.state.content} required/>
                </form>
            </div>
        );
    }
}

export default AddTodo