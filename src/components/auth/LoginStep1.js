import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import Logo from '../Logo';
import {
	View,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity,
	Image,
	Text,
	AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav'

const base64 = require('base-64');
const PROTOCOL = 'http'
const API_IP = '104.131.90.202'
const API_PORT = '5000'
class LoginStep1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'userpassword': ''
		}
	}

	onPress = async (navigate, userEmail) => {
		dismissKeyboard()
		try {
			let response = await this.getToken(userEmail, this.state.userpassword);
			if (response.status == 200) {
				let responseJson = await response.json();
				AsyncStorage.setItem('token', responseJson.token);
				navigate('Workspace');
			} else {
				throw new Error(response.status);				
			}
		} catch(err) {
			console.log(err)
		}
	}


	getToken = (username, password) => {
		let headers = new Headers();
		headers.append("Authorization", "Basic " + base64.encode(username+":"+password));
		return fetch(`${PROTOCOL}://${API_IP}:${API_PORT}/api/login`, {
		  headers: headers
		})
	  }

	render() {
		const backAction = NavigationActions.back({
			key: null
		});
		const win = Dimensions.get('window');				
		let userEmail = this.props.navigation.state.params.email;
		const { navigate } = this.props.navigation;
		return (
			<KeyboardAvoidingView
					style={styles.container}
					behavior="padding"
				>
					<NavBar style={styles}>
						<NavButton style={styles.navButton}
									onPress={() => this.props.navigation.dispatch(backAction)}>
							<Image style={styles.imageNav}
								resizeMode={"contain"}
								source={{uri: 'https://image.ibb.co/bvwDsm/if_back_172570_1.png'}}
							/>
						</NavButton>
					</NavBar>
					<View
					style={styles.inputContainer}>
						<Logo />
						<TextInput style={styles.input}
							placeholder={'Enter your password'}
							placeholderTextColor='gray'
							underlineColorAndroid='white'
							onChangeText={(userpassword) => this.setState({'userpassword': userpassword})}							
							onBlur={this.onPress.bind(this, navigate, userEmail)}
							secureTextEntry={true} />
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
		marginTop: 10,
		width: 190,
		height: 40,
		color: 'gray',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
	}, inputContainer: {
		flex: 15,
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
	}, navBar: {
		backgroundColor: 'white'
	}, navButton: {
		marginLeft: 0
	}, imageNav: {
		width: 30,
		height: 30
	}
});

export default LoginStep1;