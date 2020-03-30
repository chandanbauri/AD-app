import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Earnings from './Earnings'
import Campaigns from './Campaigns'
import { SafeAreaView } from 'react-native-safe-area-context';

export class Profile extends Component {
    render() {
        const Tab = createMaterialTopTabNavigator();
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', elevation: 3 }}>
                    <View style={{flex: 1 , flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
                        <Text style={{ height: 50, width: 167, fontSize: 20 , marginLeft: 20}}>Hello, {this.props.route.params.userName}</Text>
                        <View style={{ height: 100, width: 100,marginRight: 20, borderRadius: 50, elevation: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5e5e5' }}>
                            <Image source={require('../assets/user.png')} style={{ height: 50, width: 50, resizeMode: 'contain' }} />
                        </View>
                    </View>

                </View>

                <View style={{ flex: 3, flexDirection: 'column', elevation: 3 }}>
                    <Tab.Navigator initialRouteName='My Earnings' tabBarOptions={{ allowFontScaling: true, activeTintColor: '#1089ff', inactiveTintColor: 'gray', tabStyle: { flex: 1, flexDirection: 'column' }, indicatorStyle: { backgroundColor: '#1089ff' } }}>
                        <Tab.Screen name="My Earnings" component={Earnings} />
                        <Tab.Screen name="My Campaigns" component={Campaigns} />
                    </Tab.Navigator>
                </View>

            </View>

        )
    }
}

export default Profile