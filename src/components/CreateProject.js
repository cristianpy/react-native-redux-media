import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
// import SignupSection from './SignupSection';
import {
	View,
	StyleSheet,
	TextInput,
	Text,
	Image,
    TouchableOpacity
} from 'react-native';
import ButtonSubmit from './ButtonSubmit';
import ImagePicker from 'react-native-image-picker';

export default class Create extends Component {

	constructor() {
		super()
		this.state = {
			useremail: '',
			image: ''
        };
	}

	onPress(navigate) {
		// More info on all the options is below in the README...just some common use cases shown here
		var options = {
			title: 'Photo upload',
			storageOptions: {
			skipBackup: true,
			path: 'images'
			}
		};
		
		/**
		 * The first arg is the options object for customization (it can also be null or omitted for default options),
		 * The second arg is the callback which sends object: response (more info below in README)
		 */
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);
		
			if (response.didCancel) {
			console.log('User cancelled image picker');
			}
			else if (response.error) {
			console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
			console.log('User tapped custom button: ', response.customButton);
			}
			else {
			let source = { uri: response.uri };
		
			// You can also display the image using data:
			// let source = { uri: 'data:image/jpeg;base64,' + response.data };
		
			this.setState({
				image: source
			});
			}
		});
	}

	render() {
		const { navigate } = this.props.navigation;
		let render;
		if (!this.state.image) {
			render = (
				<View style={styles.container}>
					<TouchableOpacity
						onPress={this.onPress.bind(this, navigate)}>
						<Text style={styles.project}>Click to take picture or upload files from</Text>
					</TouchableOpacity>
				</View>
			);
		} else {
			render = (<View style={{ flex: 1 }}><Image source={this.state.image}  style={{flex:1, height: undefined, width: undefined}}/></View>)
		}
		return (
			<View style={{ flex: 1}}>
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
	}
	
});