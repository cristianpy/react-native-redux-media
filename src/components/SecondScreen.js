import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
// import SignupSection from './SignupSection';
import {
	View,
	StyleSheet,
	TextInput
} from 'react-native';
import ButtonSubmit from './ButtonSubmit';

export default class SecondScreen extends Component {
	render() {
		let userEmail = this.props.navigation.state.params.email
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Wallpaper>
						<Logo />
						<View
							style={styles.inputContainer}>
							<TextInput style={styles.input}
								placeholder={'Enter your password'}
								placeholderTextColor='gray'
								underlineColorAndroid='gray'
								secureTextEntry={true} />
						</View>
						<ButtonSubmit navigate={navigate} name={'Login'} navigateTo={'Login'}/>
				</Wallpaper>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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