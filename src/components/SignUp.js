import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
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
			<View>
				<View>
					<NavBar />
				</View>

			<KeyboardAvoidingView
				style={styles.container}
				behavior="padding"
			>
					<NavBar />
					<Logo />
					<View style={styles.inputContainer}>
						<Text style={styles.input}> NOT A USER! DO YOU WANT TO SIGNUP?</Text>
					</View>
					<View style={styles.buttons}>
						<TouchableOpacity style={styles.button}
								onPress={this.confirmSignup.bind(this, navigate, email)}>
							<Text style={styles.text}>YES</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.text}>NO</Text>
						</TouchableOpacity>
                    </View>
			</KeyboardAvoidingView>
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
		backgroundColor: 'white'
	}, input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		height: 40,
		color: 'gray',
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
	},
});