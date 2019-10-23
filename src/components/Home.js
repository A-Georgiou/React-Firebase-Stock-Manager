import React from 'react';
import Items from './Items';
import Additem from './AddForm';
import { base } from '../api/firebase.js';
import Navbar from './Navbar';


class Home extends React.Component{
  constructor(props){
  super(props);
    this.state = {
      items: [
        ]
    }

  }

  deleteItem = (id) =>{
    const items = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({items});
  }


  addItem = (item) => {
    item.id = Math.random();
    item.quantity = 1;
    let items;
    if(this.state.items.length > 0){
      items = [...this.state.items, item];
    }else{
      items = [item];
    }
    this.setState({
      items
    });
  }


  updateItem = (id, value) => {

      let items = this.state.items.map(item => {
        if(id === item.id){
          item.quantity = value;
          return item;
        }else{
          return item;
        }
      });

      this.setState({
        items
      });
  }
  

  
  componentWillMount = () =>{
    this.itemRef = base.syncState(`items/${this.props.getData}`, {
      context: this,
      state: 'items'
    })
  }
  
  componentWillUnmount(){
      base.removeBinding(this.itemRef);
  }
  render(){
    return (
      <div className="app-handler">
        <Navbar />
        <div className="todo-app container">
          <h1 className="center white-text">Stock Tracker</h1>
          <Items items={this.state.items} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
          <Additem addItem={this.addItem}/>
        </div>
      </div>
    );
  }
}

export default Home;