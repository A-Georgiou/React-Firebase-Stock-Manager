import React, {Component} from 'react';
import { fire } from '../api/firebase.js';

class Navbar extends Component{
    logout(){
        fire.auth().signOut();
    }

    render(){
        return(
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo">Stock Tracker</a>
            <ul id="nav-mobile" className="right">
                <li><a onClick={this.logout}>Logout</a></li>
             </ul>
            </div>
        </nav>
        );
    }
}

export default Navbar;