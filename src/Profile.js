import React, { Component } from 'react';
import avatar from './avatar.png';
import './LoginScreen.css';

///Login Screen
class Profile extends Component {
    constructor(props){
        super(props);
      
        }
 
	render() {

		return (
			<div align="center">
                <img src={avatar} className="avatar" />
                <div className ="ProfileForm">
                    <form>
                        <div className ="profile">
                            <label>
                                User Name:
                                <input type="text" placeholder="Dipti Gogoi"/><br/>
                            </label>
                            <label>
                                Email ID:
                                <input type="text" placeholder="diptigogoi@com"/>
                            </label>
                            <label>
                                Password:
                                <input type="text" placeholder="******"/>
                            </label><br/>
                            <input type="submit" value="EDIT" />
                            <input type="submit" value="SAVE" />
                            <p class="solid">Add goes here</p>
                        </div>
                    </form>
                </div>
			</div>
			

		);

	}

}

export default Profile;
