import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen from './AuthScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Drawer from './Drawer'

export class Stack extends Component {
    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator headerMode='none' initialRouteName='My profile'>
                <Stack.Screen
                    name="My profile"
                    component={AuthScreen}
                    /*options={({ navigation, route }) => ({
                        headerTitle: props => <LogoTitle {...props} />,
                    })}*/
                />
                <Stack.Screen name="Drawer" component={Drawer} />
            </Stack.Navigator>
        )
    }
}

export default Stack
