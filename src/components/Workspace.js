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
import { connect } from 'react-redux';
import { getProjects } from '../actions';
import { bindActionCreators } from 'redux';
import ButtonSubmit from './ButtonSubmit';
import PhotoGrid from 'react-native-photo-grid';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav'
import Hr from './hr';

class Workspace extends Component {

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
		
		const { token } = this.props.user;
		this.props.getProjects(token);
	  }
	
	onPress(navigate) {
		navigate('CreateProject')
	}
	
	renderItem(item, itemSize) {
		let uri = `http://104.131.90.202/${item.files_path[0]}`;
		return(
			<TouchableOpacity
			key = { item._id.$oid }
			style = {{ width: itemSize, height: itemSize }}
			onPress = { () => {
				// Do Something
			}}>
			<Image
				resizeMode = "cover"
				style={styles.image}
				source = {{uri: uri }}
			>
				<Text style={styles.paragraph}> {item.name} </Text>
			</Image>
			</TouchableOpacity>
		)
	}

	onPressLogo(navigate) {
		navigate('UserDetail')
	}

	renderNav(navigate) {
	    return (
			<NavBar style={styles}>
				<NavButton style={styles.navButton}
					onPress={this.onPressLogo.bind(this, navigate)}>
					<Image style={styles.imageNav}
						resizeMode={"contain"}
						source={{uri: 'https://thumb.ibb.co/cYLx8G/logo.jpg'}}
					/>
				</NavButton>
				<NavTitle style={styles.title}>
				{"WORKSPACE"}
				</NavTitle>
				<NavButton style={styles.navButton}>
				<Image style={styles.imageNav}
					resizeMode={"contain"}
					source={{uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-128.png'}}
				/>
				</NavButton>
			</NavBar>
		)
	}

	renderFooter(navigate) {
		return (
			<View style={{alignItems: 'center',
						justifyContent: 'center' }}>
				<TouchableOpacity style={styles.button}
					onPress={this.onPress.bind(this, navigate)}>					
					<Text style={styles.text}>New project</Text>
				</TouchableOpacity>
			</View>
		)
	}

	renderContent() {
		let lastProject = this.props.projects[this.props.projects.length-1];
		let uri = `http://104.131.90.202/${lastProject.files_path[0]}`;
		return (
			<View style={{ flex: 5}}>
				<Image resizeMode = "contain" source={{uri: uri}}  style={{flex:1, height: undefined, width: undefined}}/>
			</View>
		)
	}

	renderNoContent() {
		return (
			<View style={{ flex: 5, alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: '#c3c3c3'}}>NO RECENT PROJECTS</Text>
			</View>
		)
	}

	renderGrid(projects, renderItem) {
		return (
			<PhotoGrid
				data = { projects }
				itemsPerRow = { 2 }
				itemMargin = { 50	 }
				renderItem = { renderItem }
			/>						
		)
	}

	render() {
		var { width, height } = Dimensions.get('window')		
		const { navigate } = this.props.navigation;
		let projects = [];
		let renderFirst;
		if (this.props.loading == false) {
			projects = this.props.projects;
			renderFirst = this.renderNoContent();
			if (projects.length > 0) {
				renderFirst = this.renderContent();
			}
		}
		return (
				<View style={styles.container}>
					
					{ this.renderNav(navigate) }
					
					{ renderFirst }

					<View style={{flex: 1}}>
						<Hr text='Projects' marginLeft='20' marginRight='20'/>						
					</View>
					
					<View style={{ flex: 5, margin: 20}}>
						{ this.renderGrid(projects, this.renderItem) }
					</View>

					<Hr marginLeft='0' marginRigh='0'/>						

					{ this.renderFooter(navigate) }
				</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 5,
        backgroundColor: 'white'
	}, button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
		height: 30,
		width: 100,
		borderRadius: 10,
	}, buttons: {
        flex: 1,
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	}, text: {
		color: 'black',
		backgroundColor: 'transparent',
	} , 'project': {
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
		  fontSize: 15
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

function mapStateToProps(state) {
	const { user } = state.authentication;
	const { projects, loading } = state.project;
	return {
		user,
		loading,
		projects
	}
}

const mapDispatchToProps = (dispatch)  => {
	return { 
        getProjects: bindActionCreators(getProjects, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Workspace)