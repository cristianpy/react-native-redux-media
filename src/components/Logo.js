import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../images/logo.jpg';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={{uri: 'https://thumb.ibb.co/cYLx8G/logo.jpg'}} style={styles.image} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	image: {
		// flex: 1,
		marginTop: 100,
		width: 120,
		height: 120,
	}
});
