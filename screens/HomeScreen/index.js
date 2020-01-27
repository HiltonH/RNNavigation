import React  from 'react';
import {Navigation} from 'react-native-navigation';
import { View, Text, TouchableOpacity, AsyncStorage, Button } from 'react-native';

import { goToAuth } from '../ChangeScreen';
import { USER_KEY } from '../config.js';

class HomeScreen extends React.Component {
    static get options() {
        return {
            topBar: {
            title: {
                text: 'Home'
            },
            }
        };
    }

    logout = async () => {
        try {
            await AsyncStorage.removeItem(USER_KEY)
            goToAuth()
        }
        catch (err) {
            console.log('Error Sign Out:  ', err)
        }
    }

    // _logout = () => {
    //     AsyncStorage.clear();
    //     this.props("goToAuth");
    // }

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                    component: {
                        name: 'RecipeScreen',
                    }
                })} style={{width: 50, height: 50, marginTop: 12}}>
                    <Text>Home!</Text>
                </TouchableOpacity>
                
                <Button style={{color: '#42A5F5'}} onPress={this.logout} title="Log Out" />
                
            </View>
        );
    }
}

export default HomeScreen;