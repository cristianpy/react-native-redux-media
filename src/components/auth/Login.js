import React, { Component, PropTypes } from 'react';
import Logo from '../Logo';
import {
	View,
	StyleSheet,
	TextInput,
	Text,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView
} from 'react-native';
import dismissKeyboard from 'react-native-dismiss-keyboard';

export default class Login extends Component {

	constructor() {
		super()
		this.state = {
            useremail: '',
        };
	}

	onPress(navigate) {
		let userEmail = this.state.useremail
		let userValid = this.validateUser(userEmail)
		dismissKeyboard()
		userValid ? navigate('LoginStep1', {'email' : userEmail}) : navigate('SignUp', {'email': userEmail})
	}

    validateUser(username) {
		if (username == 'ivanc') {
			return true
		}
		return false
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			
			<KeyboardAvoidingView style={styles.container}
								  behavior="padding" >
					    <View style={styles.inputContainer}>
							<Logo />
							<TextInput style={styles.input}
								placeholder={'Enter email to Sign up or Sign in'}
								placeholderTextColor='gray'
								onChangeText={(useremail) => this.setState({'useremail': useremail})}
								underlineColorAndroid='white' 
							/>
						</View>
						<View style={styles.buttons}>
							<TouchableOpacity style={styles.button}
								onPress={this.onPress.bind(this, navigate)}>
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
		width: 210,
		height: 40,
		marginTop: 20,
		color: 'gray',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
	}, inputContainer: {
		// flex: 1,
		marginTop: 70,
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