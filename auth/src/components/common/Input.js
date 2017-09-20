import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput
				value = {value}
				onChangeText = {onChangeText}
				style = {{height : 50, width: 300}}
			/>
		</View>
	);
}

export { Input }