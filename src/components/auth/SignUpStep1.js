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
import ButtonSubmit from '../ButtonSubmit';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import { NavigationActions } from 'react-navigation'
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav'

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
								placeholder={'Enter your Full name'}
								placeholderTextColor='gray'
								onChangeText={(fullname) => this.setState({'fullname': fullname})}
								underlineColorAndroid='white' />
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
	} , navBar: {
		backgroundColor: 'white'
	}, navButton: {
		marginLeft: 0
	}, imageNav: {
		width: 30,
		height: 30
	}
	
});