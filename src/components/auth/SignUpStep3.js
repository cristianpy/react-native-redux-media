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
import { connect } from 'react-redux';
import { register } from '../../actions';
import { bindActionCreators } from 'redux'
import { NavigationActions } from 'react-navigation';

import Dimensions from 'Dimensions';
import ButtonSubmit from '../ButtonSubmit';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav'

class SignUpStep3 extends Component {

	constructor() {
		super()
		this.state = {
			email: '',
			fullname: '',
			password: '',
			passwordConfirm: ''
        };
	}	

	onPress = async (navigate, email, fullname, password) => {
		let passwordConfirm = this.state.passwordConfirm
		if (passwordConfirm == password) {
			this.props.register(email, fullname, password, navigate);
			dismissKeyboard()
		}
	}

	render() {
		let email = this.props.navigation.state.params.email
		let fullname = this.props.navigation.state.params.fullname
		let password = this.props.navigation.state.params.password
		const win = Dimensions.get('window');												
		const backAction = NavigationActions.back({
			key: null
		});
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
							placeholder={'Confirm your password'}
							placeholderTextColor='gray'
							onChangeText={(password) => this.setState({'passwordConfirm': password})}
							underlineColorAndroid='white' 
							secureTextEntry={true}/>
					</View>
					<View style={styles.buttons}>
						<TouchableOpacity style={styles.button}
							onPress={this.onPress.bind(this, navigate, email, fullname, password)}>
							<Text style={styles.text}>Next</Text>
						</TouchableOpacity>
					</View>
					<View style={{flex:1}}>
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
		marginTop: 50,				
		width: 190,
		height: 40,
		color: 'gray',
		textAlign: 'center',
	}, inputContainer: {
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
        // flexDirection: 'row',
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

function mapStateToProps(state) {
	console.log('state', JSON.stringify(state));
	const { user, registering, registered, registerErrorMessage } = state.registration;
	return {
		user,
		registering,
		registered,
		registerErrorMessage
	}
}

const mapDispatchToProps = (dispatch)  => {
	return { 
		register: bindActionCreators(register, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpStep3)