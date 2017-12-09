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
import { connect } from 'react-redux';
import { login, setPassword } from '../../actions';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux'
import dismissKeyboard from 'react-native-dismiss-keyboard';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav'
import Toast, { DURATION } from 'react-native-easy-toast'

class LoginStep1 extends Component {
	constructor(props) {
		super(props);
	}

	onPress = (navigate, email) => {
		const { password } = this.props;
		this.props.login(email, password, navigate);
		dismissKeyboard();
	}

	showToast(message) {
		this.refs.toast.show(message, 3000);		
	}

	render() {
		if (this.props.loginErrorMessage) {
			this.showToast(this.props.loginErrorMessage);
		}
		const backAction = NavigationActions.back({
			key: null
		});
		const win = Dimensions.get('window');				
		const { email } = this.props.navigation.state.params;
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
							onChangeText={(userpassword) => this.props.setPassword(userpassword)}							
							onBlur={this.onPress.bind(this, navigate, email)}
							secureTextEntry={true} />
					</View>
					<View style={{flex:5}}>
						<Image
							style={{width: win.width, height: 200}}
							resizeMode={"contain"}
							source={{uri: 'https://preview.ibb.co/giOCnm/city.jpg'}}
						/>	
					</View>
					<Toast ref="toast"/>
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

function mapStateToProps(state) {
	console.log('state', JSON.stringify(state));
	const { user, loggingIn, loggedIn, loginErrorMessage, password } = state.authentication;
	return {
		user,
		password,
		loggingIn,
		loggedIn,
		loginErrorMessage
	}
}

const mapDispatchToProps = (dispatch)  => {
	return { 
		login: bindActionCreators(login, dispatch) ,
		setPassword: bindActionCreators(setPassword, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginStep1);