import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase'
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount () {
		firebase.initializeApp({	
	    apiKey: 'AIzaSyC8x78Jp1nRNYRN0RWeaS3XBnokvX_B7Hc',
	    authDomain: 'auth-ede6e.firebaseapp.com',
	    databaseURL: 'https://auth-ede6e.firebaseio.com',
	    projectId: 'auth-ede6e',
	    storageBucket: 'auth-ede6e.appspot.com',
	    messagingSenderId: '786310621967'
		});
	}

	render () {
		return (
			<View>
				<Header headerText="Authentication"/>
				<LoginForm />
			</View>
		);
	}
}

export default App;