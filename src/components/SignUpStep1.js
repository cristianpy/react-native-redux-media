import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import {
	View,
	StyleSheet,
	TextInput,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import ButtonSubmit from './ButtonSubmit';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import NavBar from './NavBar'
import { NavigationActions } from 'react-navigation'

export default class SignUpStep1 extends Component {

	constructor() {
		super()
		this.state = {
			email: '',
            fullname: '',
        };
	}

	onPress(navigate, email) {
		//GOTO TO SIGNUP STEP2
		let fullname = this.state.fullname
		dismissKeyboard()
		navigate('SignUpStep2', {'email': email, 'fullname': fullname})
	}

	render() {
		const backAction = NavigationActions.back({
			key: null
		}) 
		let email = this.props.navigation.state.params.email
		
		let leftButtonConfig = {
			title: 'Back',
			handler: () => this.props.navigation.dispatch(backAction),
		};
		
		const { navigate } = this.props.navigation;
		return (
			<KeyboardAvoidingView
				style={styles.container}
				behavior="padding"
			>						
						<NavBar leftButton={leftButtonConfig} rightButton={undefined} title={{title: 'Signup'}}/>
						<View
							style={styles.inputContainer}>
							<Logo />
							<TextInput style={styles.input}
								placeholder={'ENTER YOUR FULLNAME'}
								placeholderTextColor='gray'
								onChangeText={(fullname) => this.setState({'fullname': fullname})}
								underlineColorAndroid='gray' />
						</View>
						<View style={styles.buttons}>
							<TouchableOpacity style={styles.button}
								onPress={this.onPress.bind(this, navigate, email)}>
								<Text style={styles.text}>Next</Text>
							</TouchableOpacity>
						</View>
			</KeyboardAvoidingView>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: 'white',
		
	}, input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: 190,
		height: 40,
		color: 'gray',
		textAlign: 'center',
	}, inputContainer: {
		// flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}, button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000000',
		height: 30,
		width: 80,
		borderRadius: 10,
	}, buttons: {
        flex: 1,
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	}, text: {
		color: 'white',
		backgroundColor: 'transparent',
	}
	
});