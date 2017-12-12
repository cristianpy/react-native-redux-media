import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { changePassword, logout } from '../actions';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation'
import Toast from 'react-native-easy-toast';

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password:'',
            passwordConfirm: ''
        }
    }

    showToast(message) {
		this.refs.toast.show(message, 3000);		
	}

    saveChanges(token) {
        let password = this.state.password;
        let passwordConfirm = this.state.passwordConfirm;
        if (passwordConfirm == password) {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Login'})
                ]
            })
            this.props.changePassword(token, password, resetAction, this.props.navigation);
            return;
        }
        this.showToast("Password doesn't match");
    }

    logout(navigate) {
        const { username } = this.props.user;
        console.log('LOGOUT username', username)
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Login'})
            ]
        })
        this.props.logout(resetAction, this.props.navigation);
    }

    close(navigate) {
        navigate('Workspace');
    }

    render() {
      if (this.props.changePasswordErrorMessage) {
          this.showToast(this.props.changePasswordErrorMessage);
      }
      const { navigate } = this.props.navigation;        
      const { fullname, username, token } = this.props.user;
      return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.userOption}>
                <TouchableOpacity style={styles.button}
                    onPress={this.logout.bind(this, navigate)}>
                    <Text>Logout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={this.close.bind(this, navigate)}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.user}>
                <View >
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{ fullname }</Text>

                </View>

                <View style={styles.mail}>
                    <Text>{ username }</Text>
                </View>

            </View>

            <View style={styles.inputContainer}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Security</Text>
                    <TextInput style={styles.input}
                        placeholder={'Password'}
                        placeholderTextColor='gray'
                        underlineColorAndroid='gray' 
                        onChangeText={(password) => this.setState({'password': password})}
                        secureTextEntry={true}
                    />

                    <TextInput style={styles.input}
                        placeholder={'Verify Password'}
                        placeholderTextColor='gray'
                        underlineColorAndroid='gray' 
                        onChangeText={(password) => this.setState({'passwordConfirm': password})}
                        secureTextEntry={true}
                    />
            </View>


            <View style={styles.save}>
                <TouchableOpacity style={styles.buttonSave}
                    onPress={this.saveChanges.bind(this, token)}>
                    <Text>Save changes</Text>
                </TouchableOpacity>
            </View>
            <Toast ref="toast"/>
        </KeyboardAvoidingView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      backgroundColor: 'white'
    },
    user: {
        alignItems: 'flex-start',
        marginLeft: 30,
        paddingBottom: 10,
        borderBottomColor: '#439fe0',
        borderBottomWidth: 3,
    },
    input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: 300,
		height: 40,
        color: 'gray',
        marginTop: 5,
    }, 
    inputContainer: {
        marginTop: 20,
		// flex: 1,
		alignItems: 'flex-start',
        marginLeft: 30,
		justifyContent: 'center',
    },
    buttonImage: {
        alignItems: 'center',
		justifyContent: 'center',
		height: 100,
		width: 100,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 50,
    },
    mail: {
        // flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
		height: 30,
		width: 70,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#000000'
    }, 
    buttonSave: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
		height: 30,
		width: 100,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#000000'
    },
    save: {
        alignItems: 'flex-end',
        marginRight: 10,
        marginTop: 150,
    },
    userOption: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10,
        marginBottom: 10,
        marginTop: 20,
    }
  });

function mapStateToProps(state) {
    const { loading, userErrorMessage, changePasswordErrorMessage } = state.user;
    const { user } = state.authentication;
	return {
        loading,
        user,
        userErrorMessage,
        changePasswordErrorMessage
	}
}

const mapDispatchToProps = (dispatch)  => {
	return { 
        changePassword: bindActionCreators(changePassword, dispatch),
        logout: bindActionCreators(logout, dispatch)
	}
}

  export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)