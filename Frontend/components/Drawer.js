import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen'
//import AuthScreen from './AuthScreen'
import Stack from './Stack'
//import { StatusBar } from 'react-native';
import Profile from './Profile'
import { SafeAreaView } from 'react-native-safe-area-context';

function CustomDrawerContent(props) {
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 150, backgroundColor: '#2f89fc',justifyContent: 'center' , elevation: 10}}>
                <Text style={{fontSize: 30, color: 'white', marginLeft: 10}}>App</Text>
            </View>
            <DrawerContentScrollView {...props} >
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Help"
                />
            </DrawerContentScrollView>
        </SafeAreaView>

    );
}

export class Drawer extends Component {
    render() {
        const Drawer = createDrawerNavigator();
        return (
            <Drawer.Navigator initialRouteName='Home' hideStatusBar={false} drawerContent={CustomDrawerContent}
             drawerContentOptions={{
                
             }}>
                <Drawer.Screen name='Home' component={HomeScreen} initialParams={{userName: this.props.route.params.userName}}/>
                <Drawer.Screen name='Settings' component={SettingsScreen} />
                <Drawer.Screen name='My Profile' component={Profile} initialParams={{userName: this.props.route.params.userName}}/>
            </Drawer.Navigator>
        )
    }
}

export default Drawer
