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
import ButtonSubmit from './ButtonSubmit';
import { ImagePicker } from 'expo';
import ModalSelector from 'react-native-modal-selector'
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav'

export default class Create extends Component {

	constructor() {
		super()
		this.state = {
			useremail: '',
			image: '',
			textInputValue: '',
			isModalOpen: false			
        };
	}

	onPressCamera = async () => {
		let result = await ImagePicker.launchCameraAsync();
		
		if (!result.cancelled) {
			this.setState({textInputValue: ''})			
			this.setState({ image: result.uri });
		}
	}


	onPressGallery = async () => {
		let result = await ImagePicker.launchImageLibraryAsync();
	  	  
		  if (!result.cancelled) {
			this.setState({textInputValue: ''})			
			this.setState({ image: result.uri });
		  }
	}

	onPressLogo(navigate) {
		navigate('UserDetail')
	}

	render() {
		if (this.state.textInputValue == 'Upload from gallery') {
			this.onPressGallery().done()
		} else if (this.state.textInputValue == 'Take picture') {
			this.onPressCamera().done()
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
										<Text style={styles.project}>Click to take picture or upload file from</Text>
									</TouchableOpacity>
				
								</ModalSelector>
							</View>)
		} else {
			render = (<View style={{ flex: 1 }}><Image source={{ uri: this.state.image }}  style={{flex:1, height: undefined, width: undefined}}/></View>)
		}
			return (
			<View style={{ flex: 1}}>
			<NavBar style={styles}>
			<NavButton style={styles.navButton}
				onPress={this.onPressLogo.bind(this, navigate)}>
				<Image style={styles.imageNav}
					resizeMode={"contain"}
					source={{uri: 'https://thumb.ibb.co/cYLx8G/logo.jpg'}}
				/>
			</NavButton>
			<View style={styles.inputContainer}>
				<TextInput style={styles.input}
					placeholder={'ENTER PROJECT NAME'}
					placeholderTextColor='gray'
					underlineColorAndroid='gray' 
				/>
			</View>
			<NavGroup style={styles.navGroup}>
			<NavButton style={styles.navButton}>
				<Image style={styles.imageNav}
				resizeMode={"contain"}
				source={{uri: 'https://maxcdn.icons8.com/wp-content/uploads/2014/01/checkmark-128.png'}}
				/>
			</NavButton>
			<NavButton style={styles.navButton}>
				<Image style={styles.imageNav}
				resizeMode={"contain"}
				source={{uri: 'http://www.iconninja.com/files/319/1024/979/exit-delete-close-cancel-remove-cross-icon.png'}}
				/>
			</NavButton>
			</NavGroup>
		</NavBar>
				{ render }
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
	},  input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: 210,
		height: 40,
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
		backgroundColor: '#000000',
		height: 30,
		width: 100,
		borderRadius: 10,
	}, buttons: {
        flex: 1,
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	}, text: {
		color: 'white',
		backgroundColor: 'transparent',
	}, 'project': {
		color: 'gray',
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
		width: 40,
		height: 40
	}
	
});