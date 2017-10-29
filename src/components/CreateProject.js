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
import ImagePicker from 'expo';
import ModalSelector from 'react-native-modal-selector'

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