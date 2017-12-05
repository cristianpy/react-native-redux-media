import React, { Component, PropTypes } from 'react';
import Logo from '../Logo';
import {
	View,
	StyleSheet,
    TextInput,
	Text,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import Dimensions from 'Dimensions';
import { NavigationActions } from 'react-navigation'
import dismissKeyboard from 'react-native-dismiss-keyboard';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav'

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
		const win = Dimensions.get('window');						
		const backAction = NavigationActions.back({
			key: null
		}); 
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
					<View style={{flex:1}}>
						<Image
							style={{width: win.width, height: 200, marginBottom: 0}}
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
		marginTop: 50,		
		height: 40,
		color: 'gray',
	}, inputContainer: {
		// flex: 1,
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
	}, navBar: {
		backgroundColor: 'white'
	}, navButton: {
		marginLeft: 0
	}, imageNav: {
		width: 30,
		height: 30
	}
});