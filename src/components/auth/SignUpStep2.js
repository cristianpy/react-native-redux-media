import React, { Component, PropTypes } from 'react';
import Logo from '../Logo';
import {
	View,
	StyleSheet,
	TextInput,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import ButtonSubmit from '../ButtonSubmit';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import NavBar from '../NavBar';
import { NavigationActions } from 'react-navigation'

export default class SignUpStep2 extends Component {

	constructor() {
		super()
		this.state = {
			email: '',
			fullname: '',
			password: ''
        };
	}

	onPress(navigate, email, fullname) {
		//GOTO TO SIGNUP STEP2
		let password = this.state.password
		dismissKeyboard()
		navigate('SignUpStep3', {'email': email, 'fullname': fullname, 'password': password})
	}

	render() {
		let email = this.props.navigation.state.params.email
		let fullname = this.props.navigation.state.params.fullname

		const backAction = NavigationActions.back({
			key: null
		}) 
		
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
					{/*<NavBar leftButton={leftButtonConfig} rightButton={undefined} title={{title: 'Signup'}}/>*/}
					<View
						style={styles.inputContainer}>
						<Logo />						
						<TextInput style={styles.input}
							placeholder={'Enter your password'}
							placeholderTextColor='gray'
							onChangeText={(password) => this.setState({'password': password})}
							underlineColorAndroid='white' 
							secureTextEntry={true}/>
					</View>
					<View style={styles.buttons}>
						<TouchableOpacity style={styles.button}
							onPress={this.onPress.bind(this, navigate, email, fullname)}>
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
		backgroundColor: 'white'
	}, input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		marginTop: 20,				
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
		backgroundColor: '#ffffff',
		height: 30,
		width: 80,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#000000'
	}, buttons: {
        flex: 1,
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	}, text: {
		color: 'black',
		backgroundColor: 'transparent',
	}
	
});