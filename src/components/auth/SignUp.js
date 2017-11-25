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
import dismissKeyboard from 'react-native-dismiss-keyboard';

export default class SignUp extends Component {

	constructor() {
		super()	
		this.state = {
			'email': '',
		}
	}

	confirmSignup(navigate, email) {
		dismissKeyboard()
		navigate('SignUpStep1', {'email': email})
	}

	render() {
		const { navigate } = this.props.navigation;
		let email = this.props.navigation.state.params.email
		return (
			<KeyboardAvoidingView
				style={styles.container}
				behavior="padding"
			>
					<View style={styles.inputContainer}>
						<Logo />
						<Text style={styles.input}> Not a user, do you want to sign up?</Text>
					</View>
					<View style={styles.buttons}>
						<TouchableOpacity style={styles.buttonYes}
								onPress={this.confirmSignup.bind(this, navigate, email)}>
							<Text style={styles.text}>Yes</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.buttonNo}>
							<Text style={styles.text}>No</Text>
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
        justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	}, input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		marginTop: 20,		
		height: 40,
		color: 'gray',
	}, inputContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}, buttonYes: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
		height: 30,
		width: 80,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#000000'
	}, buttonNo: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
		marginLeft: 5,
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
	},
});