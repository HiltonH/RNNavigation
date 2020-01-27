import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

class SettingsScreen extends React.Component {

    render(){

        var home = this.props.active
            ? require('../../icon/home-color.png')
            : require('../../icon/settings.png');

        return(
            <View style={{flex: 1, padding: 12}}>
                <ScrollView>

                    {/* Header */}
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 24}}>Settings</Text>
                        <Text style={{fontSize: 20, color: 'gray'}}>Update your preferences</Text>
                    </View>

                    {/* Account Settings */}
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 16, marginVertical: 16, marginTop: 12}}>ACCOUNT SETTINGS</Text>

                        {/* Profile */}
                        <View style={{flexDirection: 'row'}}>
                            <View style={{height: 50, width: 50, marginRight: 16}}>
                                <Image style ={{height: '100%', width: '100%'}} source={home}></Image>
                            </View>
                            
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontWeight: '900', fontSize: 12}}>Profile Information</Text>
                                <Text style={{fontSize: 10, color: 'gray'}}>Name, Email, Security</Text>
                            </View>
                        </View>

                        {/* Change Password */}
                        <View style={{flexDirection: 'row'}}>
                            <View style={{height: 50, width: 50, marginRight: 16}}>
                                <Image style ={{height: '100%', width: '100%'}} source={require('../../icon/area-color.png')}></Image>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontWeight: '900', fontSize: 12}}>Change Password</Text>
                                <Text style={{fontSize: 10, color: 'gray'}}>Change your current password</Text>
                            </View>
                        </View>


                    </View>

                    {/* Notification Settings */}
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 16, marginVertical: 16}}>NOTIFICATIONS SETTINGS</Text>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{height: 50, width: 50, marginRight: 16}}>
                                <Image style ={{height: '100%', width: '100%'}} source={require('../../icon/home-color.png')}></Image>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontWeight: '900', fontSize: 12}}>Push Notifications</Text>
                                <Text style={{fontSize: 10, color: 'gray'}}>New Contracts Sign or Send</Text>
                            </View>
                        </View>
                    </View>

                    {/* General */}
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 16, marginVertical: 16}}>GENERAL</Text>
                        
                        {/* Rate Our App */}
                        <View style={{flexDirection: 'row'}}>
                            <View style={{height: 50, width: 50, marginRight: 16}}> 
                                <Image style ={{height: '100%', width: '100%'}} source={require('../../icon/home-color.png')}></Image>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontWeight: '900', fontSize: 12}}>Rate Our App</Text>
                                <Text style={{fontSize: 10, color: 'gray'}}>Rate & Review us</Text>
                            </View>
                        </View>

                        {/* Send Feedback */}
                        <View style={{flexDirection: 'row'}}>
                            <View style={{height: 50, width: 50, marginRight: 16}}>
                                <Image style ={{height: '100%', width: '100%'}} source={require('../../icon/home-color.png')}></Image>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontWeight: '900', fontSize: 12}}>Send Feedback</Text>
                                <Text style={{fontSize: 10, color: 'gray'}}>Share your thought</Text>
                            </View>
                        </View>
                        
                        {/* Privacy Policy */}
                        <View style={{flexDirection: 'row'}}>
                            <View style={{height: 50, width: 50, marginRight: 16}}>
                                <Image style ={{height: '100%', width: '100%'}} source={require('../../icon/home-color.png')}></Image>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontWeight: '900', fontSize: 12}}>Privacy Policy</Text>
                                <Text style={{fontSize: 10, color: 'gray'}}>Make your data safe</Text>
                            </View>
                        </View>

                    </View>

                    {/* Connected App */}
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 16, marginVertical: 16}}>CONNECTED APP</Text>
                        
                        {/* Facebook */}
                        <View style={{flexDirection: 'row'}}>
                            <View style={{height: 50, width: 50, marginRight: 16}}>
                                <Image style ={{height: '100%', width: '100%'}} source={require('../../icon/home-color.png')}></Image>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontWeight: '900', fontSize: 12}}>Connected with Facebook</Text>
                                <Text style={{fontSize: 10, color: 'gray'}}>Join us with Facebook</Text>
                            </View>
                        </View>

                        {/* Google */}
                        <View style={{flexDirection: 'row'}}>
                            <View style={{height: 50, width: 50, marginRight: 16}}>
                                <Image style ={{height: '100%', width: '100%'}} source={require('../../icon/home-color.png')}></Image>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontWeight: '900', fontSize: 12}}>Connected with Google</Text>
                                <Text style={{fontSize: 10, color: 'gray'}}>Join us with Google</Text>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SettingsScreen;