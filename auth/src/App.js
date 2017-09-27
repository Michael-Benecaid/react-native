import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase'
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = {loggedIn: null}

	componentWillMount () {
		firebase.initializeApp({	
	    apiKey: 'AIzaSyC8x78Jp1nRNYRN0RWeaS3XBnokvX_B7Hc',
	    authDomain: 'auth-ede6e.firebaseapp.com',
	    databaseURL: 'https://auth-ede6e.firebaseio.com',
	    projectId: 'auth-ede6e',
	    storageBucket: 'auth-ede6e.appspot.com',
	    messagingSenderId: '786310621967'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true});
			} else {
				this.setState({ loggedIn: false});
			}
		});
	}

	renderContent () {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress = {() => firebase.auth().signOut()}>
							Log Out	
						</Button>
					</CardSection>
					);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render () {
		return (
			<View>
				<Header headerText="Authentication"/>
				{this.renderContent()}
			</View>
		);
	}
}

export default App;