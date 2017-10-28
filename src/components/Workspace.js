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
    TouchableOpacity
} from 'react-native';
import ButtonSubmit from './ButtonSubmit';

export default class Workspace extends Component {

	constructor() {
		super()
		this.state = {
            useremail: '',
        };
	}

	onPress(navigate) {
		navigate('CreateProject')
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
				<View style={{ flex: 1 }}>
					<View style={{ flex: 5,
								   alignItems: 'center',
								   justifyContent: 'center' }}>
						<Text>No recent projects</Text>
					</View>
					<View style={{
						alignItems: 'center'}}>
						<Text>--------------------PROJECTS--------------------</Text>
					</View>
					<View style={{ flex: 5 }}>
						
					</View>
					<View style={{ flex: 1, alignItems: 'center',
								   justifyContent: 'center' }}>
						<TouchableOpacity style={styles.button}
							onPress={this.onPress.bind(this, navigate)}>					
							<Text style={styles.text}>New project</Text>
						</TouchableOpacity>
					</View>
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