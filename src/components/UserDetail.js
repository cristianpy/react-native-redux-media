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

                <View style={styles.mailAndPhoto}>
                    <Text>{user.email}</Text>
                    <TouchableOpacity style={styles.buttonImage}>
                        <Text style={{fontSize: 9}}>Tab to upload a image</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.inputContainer}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Segurity</Text>
                    <TextInput style={styles.input}
                        placeholder={'Password'}
                        placeholderTextColor='gray'
                        underlineColorAndroid='gray' 
                    />

                    <TextInput style={styles.input}
                        placeholder={'Verify Password'}
                        placeholderTextColor='gray'
                        underlineColorAndroid='gray' 
                        secureTextEntry={true}
                    />
            </View>


            <View style={styles.save}>
                <TouchableOpacity style={styles.button}>
                    <Text>Save</Text>
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
    },
    user: {
        alignItems: 'flex-start',
        marginLeft: 30,
        paddingBottom: 20,
        borderBottomColor: 'skyblue',
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
    mailAndPhoto: {
        // flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 30,
		width: 80,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 5,
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