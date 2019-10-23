import React, { Component } from 'react';
import {fire} from '../api/firebase.js'

class SignIn extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
          email: '',
          password: '',
          error: {
            message: ''
          }
        };
      }
    
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

      login = (e) => {
        e.preventDefault();
        this.setState({error: {
          message: ''
        }})
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password
        ).then((u)=>{
        }).catch((error) => this.setState({error}));
        this.setState({error: {
          message: 'Success! Logging in'
        }})
      }
    

      signup = (e) => {
        e.preventDefault();

        this.setState({error: {
          message: ''
        }})
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((user)=> {
        }).catch(error => this.setState({error}))
        this.state.error.message && (
        this.setState({error: {
          message: 'Account Sucessfully Registered'
        }})
        );
      };

      render() {
        return (
           <div className="sign-in container">
            <form className="center white-text">
                <h3>Register / Sign In</h3>
                <div >
                    <label><h6>Email address</h6></label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Email" />
                </div>
                <div >
                    <label><h6>Password</h6></label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                </div>
                <button type="submit" onClick={this.login}>Login</button>
                <button onClick={this.signup} style={{marginLeft: '25px'}}>Signup</button>
            </form>

            {this.state.error.message && (<h5 className="center red-text"> {this.state.error.message}</h5>)}

          </div>
        );
      }
}

export default SignIn;