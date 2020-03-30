import React, { Component } from 'react'
import { View, Text } from "react-native";
import Head from './Head'

export class SettingsScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Head name='Settings' navigation={this.props.navigation} />
                <Text>This is Settings Screen</Text>
            </View>
        )
    }
}

export default SettingsScreen
