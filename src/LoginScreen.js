import React, { Component } from 'react';
import logo from './logo.svg';
import './LoginScreen.css';


class LoginScreen extends Component {
    constructor(props){
        super(props);
      
        }
 
	render() {

		return (
			<div align="center">
                <img src={logo} className="logo" />
                <h1>Welcome,</h1>
                <h1>Sign in to Continue</h1>
                <div className ="form">
                <form>
                <div className ="user">
                <label>
                    User ID:
                    <input type="text"/><br/>
                </label>
                </div>
                <label>
                    Password:
                    <input type="text"/>
                </label><br/>
                <input type="submit" value="Submit" />
                </form>
                </div>
			</div>
			

		);

	}

}

export default LoginScreen;
