import React, { Component } from 'react'
import { View, Text } from "react-native";
import { Header } from 'react-native-elements'
import Head from './Head'


export class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
            <Head name='Home' navigation={this.props.navigation} />
                <View style={{flex: 1,flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Text>hello,{this.props.route.params.userName}</Text>
                </View>
            </View>
        )
    }
}

export default HomeScreen
