import React from 'react';
import { View, Text, Button, TouchableOpacity, AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { goToAuth, goHome } from '../ChangeScreen';

import { USER_KEY } from '../config.js';

class AuthLoading extends React.Component {
    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem(USER_KEY)
            console.log('user: ', user)
            if(user) {
                goHome()
            } else {
                goToAuth()
            } 
        }
        catch (err) {
            console.log('error: ', err)
            goToAuth()
        }
    }

    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontSize: 24}}>Loading...</Text>
            </View>
        )
    }

}


// class AuthLoading extends React.Component {

//     constructor(props) {
//         super(props);
//         this._ngeAsync();
//     }

//     _ngeAsync = async () => {
//         const userToken = await AsyncStorage.getItem('userToken');
//         setTimeout(() => {
//             Navigation.push(this.props.componentId, {
//                 component: {
//                     name: 'LoginScreen'
//                 }
//             })
            
//             // this.props.Navigation(userToken ? "HomeScreen" : "LoginScreen" );
//             this.props(userToken ? "HomeScreen" : "LoginScreen" );
//         }, 3000);
//     };



//     render(){
//         return(
//             <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//                 <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
//                     component: {
//                         name: 'HomeScreen'
//                     }
//                 })} style={{width: 100, height: 50}}>
//                     <Text>AuthLoading!</Text>
//                 </TouchableOpacity>
//                 {/* <Button title='Login' onPress={() => this.props.navigation.navigate('HomeScreen')}></Button> */}
//             </View>
//         );
//     }
// }

export default AuthLoading;