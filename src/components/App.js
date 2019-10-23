import React from 'react';
import SignIn from '../auth/SignIn';
import Home from './Home.js';
import { fire } from '../api/firebase.js';

class App extends React.Component{
  constructor() {
    super();
    this.state = ({
      user: null
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }


  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

 


  render(){
    return (
      <div>
        {this.state.user ? (<Home getData={this.state.user.uid}/>) : (<SignIn />)}
      </div>
    );
  }
}


export default App;