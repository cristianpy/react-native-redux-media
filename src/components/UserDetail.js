import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const user = {
    name: 'SAGIR YUSUF MOHAMMED',
    email: 'sagiryusuf@gmail.com',
    user: 'Some',
    pass: 'somepass',
  };

export default class UserDetail extends Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.userOption}>
                <TouchableOpacity style={styles.button}>
                    <Text>Logout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.user}>
                <View >
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>

                </View>

                <View style={styles.mail}>
                    <Text>{user.email}</Text>
                </View>

            </View>

            <View style={styles.inputContainer}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Security</Text>
                    <TextInput style={styles.input}
                        placeholder={'Password'}
                        placeholderTextColor='gray'
                        underlineColorAndroid='gray' 
                        secureTextEntry={true}
                    />

                    <TextInput style={styles.input}
                        placeholder={'Verify Password'}
                        placeholderTextColor='gray'
                        underlineColorAndroid='gray' 
                        secureTextEntry={true}
                    />
            </View>


            <View style={styles.save}>
                <TouchableOpacity style={styles.buttonSave}>
                    <Text>Save changes</Text>
                </TouchableOpacity>
            </View>


        </View>
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