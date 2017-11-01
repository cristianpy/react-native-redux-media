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
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav'

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
				source = {{uri:'https://pbs.twimg.com/profile_images/587717096869666817/ReWI-Xzt.jpg' }}
			>
				<Text style={styles.paragraph}> {'PROJECT ' + item.id} </Text>
			</Image>
			</TouchableOpacity>
		)
	}

	onPressLogo(navigate) {
		navigate('UserDetail')
	}

	render() {
		var { width, height } = Dimensions.get('window')		
		const { navigate } = this.props.navigation;
		return (
				<View style={{ flex: 1 }}>
					<NavBar style={styles}>
						<NavButton style={styles.navButton}
							onPress={this.onPressLogo.bind(this, navigate)}>
							<Image style={styles.imageNav}
								resizeMode={"contain"}
								source={{uri: 'https://www.rust-lang.org/logos/rust-logo-256x256-blk.png'}}
							/>
						</NavButton>
						<NavTitle style={styles.title}>
						{"Workspace"}
						</NavTitle>
						<NavButton style={styles.navButton}>
						<Image style={styles.imageNav}
							resizeMode={"contain"}
							source={{uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-128.png'}}
						/>
						</NavButton>
					</NavBar>
					<View style={{ flex: 5}}>
						<Image source={{uri: 'https://pbs.twimg.com/profile_images/587717096869666817/ReWI-Xzt.jpg'}}  style={{flex:1, height: undefined, width: undefined}}/>
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