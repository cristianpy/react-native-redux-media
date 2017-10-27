import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import Wallpaper from './Wallpaper';
// import SignupSection from './SignupSection';
import {
	View,
	StyleSheet,
    TextInput,
    Text,
    TouchableOpacity
} from 'react-native';

export default class SignUp extends Component {

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Wallpaper>
						<Logo />
                        <View
                        style={styles.inputContainer}>
                        <Text style={styles.input}> Not a user! Do you want to sign up?</Text>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.button}>
                                <Text>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
	}, input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		height: 40,
		color: 'gray',
	}, inputContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}, button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000000',
		height: 40,
		borderRadius: 20,
		zIndex: 100,
	}, buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});