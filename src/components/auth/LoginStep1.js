import React, { Component, PropTypes } from 'react';
import Logo from '../Logo';
import {
	View,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity,
	Image,
	Text
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import dismissKeyboard from 'react-native-dismiss-keyboard';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav'

export default class LoginStep1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'userpassword': ''
		}
	}

	onPress(navigate, userEmail) {
		dismissKeyboard()
		navigate('Workspace')
	}

	render() {
		const backAction = NavigationActions.back({
			key: null
		});
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
							secureTextEntry={true} />
					</View>
					<View style={styles.buttons}>
						<TouchableOpacity style={styles.button}
							onPress={this.onPress.bind(this, navigate, userEmail)}>
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
		width: 190,
		height: 40,
		marginTop: 20,
		color: 'gray',
		justifyContent: 'center',
		alignItems: 'center',
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
	}, navBar: {
		backgroundColor: 'white'
	}, navButton: {
		marginLeft: 0
	}, imageNav: {
		width: 30,
		height: 30
	}
});