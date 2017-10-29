import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import {
	View,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView
} from 'react-native';
import ButtonSubmit from './ButtonSubmit';

export default class SecondScreen extends Component {
	render() {
		let userEmail = this.props.navigation.state.params.email
		const { navigate } = this.props.navigation;
		return (
			<KeyboardAvoidingView
					style={styles.container}
					behavior="padding"
				>
					<Logo />
					<View
						style={styles.inputContainer}>
						<TextInput style={styles.input}
							placeholder={'ENTER YOUR PASSWORD'}
							placeholderTextColor='gray'
							underlineColorAndroid='gray'
							secureTextEntry={true} />
					</View>
					<ButtonSubmit navigate={navigate} name={'Login'} navigateTo={'Workspace'}/>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	}, input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: 190,
		height: 40,
		color: 'gray',
	}, inputContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});