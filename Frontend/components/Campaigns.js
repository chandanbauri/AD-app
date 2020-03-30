import React, { Component } from 'react'
import {View , Text} from 'react-native'

export class Campaigns extends Component {
    render() {
        return (
            <View style={{flex: 1,flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Text>My Campaigns</Text>
            </View>
        )
    }
}

export default Campaigns
