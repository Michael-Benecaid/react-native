import React, { Component } from 'React';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import firebase from 'firebase';
import LoginForm from './component/LoginForm'

class App extends Component {
	componentWillMount () {
		const config = {
		    apiKey: 'AIzaSyA7k2VNB0KcuwINY5_0znl_CNxNDdAuh8g',
		    authDomain: 'manager-1185e.firebaseapp.com',
		    databaseURL: 'https://manager-1185e.firebaseio.com',
		    projectId: 'manager-1185e',
		    storageBucket: 'manager-1185e.appspot.com',
		    messagingSenderId: '1042435741505'
		  };
		  firebase.initializeApp(config);
	}

	render () {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
		return (
			<Provider store={store}> 
				<LoginForm />
			</Provider>
		);
	}
};

export default App;

