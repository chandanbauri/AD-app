import React, { Component } from 'react'
import {Header} from 'react-native-elements'

export class Head extends Component {
    render() {
        return (
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' , onPress:()=> {this.props.navigation.toggleDrawer()}}}
                centerComponent={{ text: this.props.name, style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' , onPress:()=>{this.props.navigation.navigate('Home')}}}
            />
        )
    }
}

export default Head
