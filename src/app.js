/// Import modules reqiored by this module.
/// The {} means import a named component (not the default one).
import React, { Component } from 'react';
import LoginScreen from './LoginScreen';
import Profile from './Profile';

class App extends Component {

	render() {

		return (

			<div className="app">
				<LoginScreen/>
				{/* <Profile/> */}
			</div>
			
		);

	}

}

export default App;
