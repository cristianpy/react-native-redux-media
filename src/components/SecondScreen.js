import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
// import SignupSection from './SignupSection';
import {
	View,
	StyleSheet
} from 'react-native';
import ButtonSubmit from './ButtonSubmit';

export default class SecondScreen extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Wallpaper>
						<Logo />
						<Form />
						<ButtonSubmit navigate={navigate}/>
				</Wallpaper>
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
	}
});