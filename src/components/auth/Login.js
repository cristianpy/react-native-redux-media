import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
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
const PROTOCOL = 'http'
const API_IP = '104.131.90.202'
const API_PORT = '5000'
export default class Login extends Component {

	constructor() {
		super()
		this.state = {
            useremail: '',
        };
	}

	onPress = async (navigate) => {
		let userEmail = this.state.useremail
		let response = await this.validateUser(userEmail)
		let responseJson = await response.json();
		let { exists } = responseJson;
		exists ? navigate('LoginStep1', {'email' : userEmail}) : navigate('SignUp', {'email': userEmail})
		dismissKeyboard()
	}

    validateUser(username) {
		let headers = new Headers();
		return fetch(`${PROTOCOL}://${API_IP}:${API_PORT}/api/verify_user`, {
			method: "POST",
			headers: {
			  Accept: "application/json",
			  "Content-Type": "application/json"
			},
			body: JSON.stringify({
			  username: username,
			})
		  });
	}

	

	render() {
		const { navigate } = this.props.navigation;
		const win = Dimensions.get('window');		
		return (
			
			<KeyboardAvoidingView style={styles.container}
								  behavior="padding" >
					    <View style={styles.inputContainer}>
							<Logo />
							<TextInput style={styles.input}
								placeholder={'Enter email to Sign up or Sign in'}
								placeholderTextColor='gray'
								onChangeText={(useremail) => this.setState({'useremail': useremail})}
								onBlur={this.onPress.bind(this, navigate)}
								underlineColorAndroid='white' 
							/>
						</View>
						<View style={{flex:5}}>
							<Image
								style={{width: win.width, height: 200}}
								resizeMode={"contain"}
								source={{uri: 'https://preview.ibb.co/giOCnm/city.jpg'}}
							/>	
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
		flex: 15,
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