import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import {
	View,
	StyleSheet,
	TextInput,
	Text,
	TouchableOpacity,
	Image,
	Dimensions
} from 'react-native';
import ButtonSubmit from './ButtonSubmit';
import PhotoGrid from 'react-native-photo-grid';

export default class Workspace extends Component {

	constructor() {
		super()
		this.state = {
			useremail: '',
			items: []
        };
	}

	componentDidMount() {
		// Build an array of 60 photos
		let items = Array.apply(null, Array(10)).map((v, i) => {
		  return { id: i, src: '' }
		});
		this.setState({ items });
	  }
	
	onPress(navigate) {
		navigate('CreateProject')
	}
	
	renderItem(item, itemSize) {
		return(
			<TouchableOpacity
			key = { item.id }
			style = {{ width: itemSize, height: itemSize }}
			onPress = { () => {
				// Do Something
			}}>
			<Image
				resizeMode = "cover"
				style={styles.image}
				source = {require('../images/universe.jpg') }
			>
				<Text style={styles.paragraph}> {'PROJECT ' + item.id} </Text>
			</Image>
			</TouchableOpacity>
		)
	}

	render() {
		var { width, height } = Dimensions.get('window')		
		const { navigate } = this.props.navigation;
		return (
				<View style={{ flex: 1 }}>
					<View style={{ flex: 5}}>
						<Image source={require('../images/universe.jpg')}  style={{flex:1, height: undefined, width: undefined}}/>
					</View>
					<View style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center'}}>
						<Text>────────────PROJECTS────────────</Text>
					</View>
					<View style={{ flex: 5, margin: 20}}>
						<PhotoGrid
							data = { this.state.items }
							itemsPerRow = { 2 }
							itemMargin = { 50	 }
							renderItem = { this.renderItem }
						/>						
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
	},  image: {
		flexGrow:1,
		height:null,
		width:null,
	},
		paragraph: {
		backgroundColor: 'transparent',
		color: 'white'
	},
	
});