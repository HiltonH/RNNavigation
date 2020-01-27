import React from 'react';
import { View, Text, Button, TouchableOpacity, AsyncStorage, TextInput } from 'react-native';
import {Navigation} from 'react-native-navigation';

import { goHome } from '../ChangeScreen';
import { USER_KEY } from '../config.js';

class LoginScreen extends React.Component {

    state = {
        username: '', password: ''
    }

    onChangeText = (key, value) => {
        this.setState({ [key]: value })
    }

    login = async () => {
        const { username, password } = this.state
        try {
            const user = await AsyncStorage.setItem(USER_KEY, username)
            if(username !== null) {
                console.log('user successfully signed in! ', user)
                goHome() 
            }
        }catch (err) {
            console.log('error: ',err)
        }
    }

    // login = async () => {
    //     const { username, password } = this.state
    //     try {
    //         const user = await AsyncStorage.setItem(USER_KEY, username)
    //         console.log('user successfully signed in! ', user)
    //         console.log('user_key successfully! ', USER_KEY)
    //         goHome()
    //     }catch (err) {
    //         console.log('error: ',err)
    //     }
    // }

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                    style={{ width: 350, fontSize: 18, height: 55, margin: 10, padding: 8,backgroundColor: '#42A5F5', borderRadius: 14}}
                    placeholder='Username'
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor='white'
                    onChangeText={value => this.onChangeText('username', value)}
                />
                <TextInput
                    style={{marginTop: 12, width: 350, fontSize: 18, height: 55, margin: 10, padding: 8,backgroundColor: '#42A5F5', borderRadius: 14}}
                    placeholder='Password'
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholderTextColor='white'
                    onChangeText={value => this.onChangeText('password', value)}
                />
                {/* <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                    component: {
                        name: 'HomeScreen'
                    }
                })} style={{width: 50, height: 20}}>
                    <Text>Login!</Text>
                </TouchableOpacity> */}
                <Button style={{color: '#42A5F5'}}
                    title= 'Login'
                    onPress={this.login}
                />
            </View>
        )
    }

}

//     _login = async () =>{
//         let userToken = await AsyncStorage.setItem('userToken', '12312312');
//         Navigation.push(this.props.componentId, {
//             component: {
//                 name: 'HomeScreen'
//             }
//         })
    // }

//     render(){
//         return(
//             <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//                 <Text style={{fontSize: 24}}>Login Screen</Text>
//                 <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
//                     component: {
//                         name: 'HomeScreen'
//                     }
//                 })} style={{width: 50, height: 20}}>
//                     <Text>Login!</Text>
//                 </TouchableOpacity>
//                 {/* <Button title='Login' onPress={() => this.props.navigation.navigate('HomeScreen')}></Button> */}
//             </View>
//         );
//     }
// }

export default LoginScreen;