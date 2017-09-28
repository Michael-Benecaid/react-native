import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Text} from 'react-native';

class LibraryList extends Component {
	render () {
		return(
			<Text>Go</Text>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
}

export default connect(mapStateToProps)(LibraryList);