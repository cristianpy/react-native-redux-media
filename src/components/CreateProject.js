import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import {
	View,
	StyleSheet,
	TextInput,
	Text,
	Image,
    TouchableOpacity
} from 'react-native';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux';
import { create } from '../actions';
import { bindActionCreators } from 'redux';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import ButtonSubmit from './ButtonSubmit';
import ModalSelector from 'react-native-modal-selector'
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav'
import Toast from 'react-native-easy-toast';

class Create extends Component {

	constructor() {
		super()
		this.state = {
			useremail: '',
			image: '',
			imagebase64: '',
			textInputValue: '',
			projectname: '',
			isModalOpen: false			
        };
	}

	onPressCamera = async () => {
		let opts = {
			base64: true
		};

		let result = await ImagePicker.launchCameraAsync(opts);
		this.setState({textInputValue: ''})			
		if (!result.cancelled) {
			this.setState({ imagebase64: result.base64});
			this.setState({ image: result.uri });
		}
	}


	onPressGallery = async () => {
		let opts = {
			base64: true
		};
		
		let result = await ImagePicker.launchImageLibraryAsync(opts);
		this.setState({ textInputValue: ''})			
		if (!result.cancelled) {
			this.setState({ imagebase64: result.base64});
			this.setState({ image: result.uri });
		  }
	}

	onPressLogo(navigate) {
		navigate('UserDetail')
	}
	
	showToast(message) {
		console.log('showing toast');
		this.refs.toast.show(message, 3000);		
	}

	onPress(token, navigate) {
		const imagebase64 = []
		imagebase64[0] = this.state.imagebase64;
		this.props.create(token, this.state.projectname, this.state.projectname, imagebase64, navigate)
		dismissKeyboard();
	}

	render() {
		const { token } = this.props.user;		
		if (this.state.textInputValue == 'Upload from gallery') {
			console.log('text input value ', 'UPload from gallery')
			this.onPressGallery().done()
		} else if (this.state.textInputValue == 'Take picture') {
			this.onPressCamera().done()
		}
		
		console.log('creating', this.props.creating);
		if (this.props.creating) {
			this.showToast('Creating project...');
		}

		const { navigate } = this.props.navigation;
		let index = 0;
        const data = [
            { key: index++, label: 'Take picture' },
            { key: index++, label: 'Upload from gallery' }
        ];
		let render;
		if (!this.state.image) {
				render = (<View style={{flex:1, justifyContent:'space-around', padding:50}}>
			
								<ModalSelector
									data={data}
									initValue="Select something yummy!"
									onChange={(option)=>{ this.setState({textInputValue:option.label})} }>
				
									<TouchableOpacity>
										<Text style={styles.project}>Click to take picture or upload from gallery</Text>
									</TouchableOpacity>
				
								</ModalSelector>
							</View>)
		} else {
			render = (<View style={{ flex: 1 }}><Image source={{ uri: this.state.image }}  style={{flex:1, height: undefined, width: undefined}}/></View>)
		}
			return (
			<View style={styles.container}>
			<NavBar style={styles}>
			<NavButton style={styles.navButton}
				onPress={this.onPressLogo.bind(this, navigate)}>
				<Image style={styles.imageNavLogo}
					resizeMode={"contain"}
					source={{uri: 'https://thumb.ibb.co/cYLx8G/logo.jpg'}}
				/>
			</NavButton>
			<View style={styles.inputContainer}>
				<TextInput style={styles.input}
					placeholder={'ENTER PROJECT NAME'}
					placeholderTextColor='#c3c3c3'
					underlineColorAndroid='white' 
					onChangeText={(projectname) => this.setState({projectname})}
				/>
			</View>
			<NavGroup style={styles.navGroup}>
			<NavButton style={styles.navButton}>
				<TouchableOpacity style={styles.button}
					onPress={this.onPress.bind(this, token, navigate)}>
					<Image style={styles.imageNav}
							resizeMode={"contain"}
							source={{uri: 'https://maxcdn.icons8.com/wp-content/uploads/2014/01/checkmark-128.png'}}
					/>
				</TouchableOpacity>
			</NavButton>
			<NavButton style={styles.navButton}>
				<TouchableOpacity style={styles.button}>
					<Image style={styles.imageNav}
							resizeMode={"contain"}
							source={{uri: 'http://www.iconninja.com/files/319/1024/979/exit-delete-close-cancel-remove-cross-icon.png'}}
	                 />			
				</TouchableOpacity>
			</NavButton>
			</NavGroup>
		</NavBar>
			{ render }
			<Toast ref="toast"/>
		</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: 'white'
	},  input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: 180,
		height: 30,
		color: '#c3c3c3',
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
		height: 20,
		width: 30,
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
	}, 'project': {
		color: '#c3c3c3',
		fontSize: 13,
		textAlign: 'center'
	}, 'projectsContainer': {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	statusBar: {
	 	 backgroundColor: '#3343BD',
	},
	navBar: {
	  	backgroundColor: '#fff',
	},
	title: {
	  	color: 'black',
	},
	buttonText: {
	  	color: 'rgba(231, 37, 156, 0.5)',
	},
	navGroup: {
	  	justifyContent: 'flex-end',
	},
	navButton: {
		marginLeft: 0
	},
	imageNav: {
		width: 15,
		height: 15
	}, 
	imageNavLogo: {
		width: 40,
		height: 40
	}
	
});

function mapStateToProps(state) {
	console.log('state', state)
	const { creating } = state.project;
    const { user } = state.authentication;
	return {
		creating,
        user
	}
}

const mapDispatchToProps = (dispatch)  => {
	return { 
		create: bindActionCreators(create, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)