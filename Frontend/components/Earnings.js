import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

export class Earnings extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
               <Text>My Earnings</Text>
            </View>
        )
    }
}

export default Earnings
