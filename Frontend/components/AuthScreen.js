import React, { Component } from 'react'
import { View, TextInput, Button, TouchableOpacity, Image, Text } from 'react-native'
import { Input } from 'react-native-elements'
import Dawer, { Drawer } from './Drawer'
export class AuthScreen extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            surname: ''

        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e, name) => {
        this.setState({
            [name]: e
        });
        //const [value, onChangeText] = useState('Name');
        //alert(e.target.value);

    }
    render() {
        return (<View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>

            <View style={{flex: 1, flexDirection:'row'}}>
                   <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                   <View style={{ aspectRatio: 1, width: 100, borderRadius: 50, backgroundColor: '#e5e5e5', alignItems: 'center', justifyContent: 'center', elevation: 3 }}>
                    <Image source={require('../assets/user.png')} style={{ height: 50,aspectRatio: 1, resizeMode: 'contain' }} />
                </View>
                   </View>  
            </View>

            <View style={{ flex: 1, flexDirection: 'row', elevation: 3, alignItems: 'center' , justifyContent: 'center'}}>
                <View style={{ flex: 1, flexDirection: 'column'}}>
                    <Input
                        placeholder='Name'
                        //leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                        onChangeText={(text) => { this.handleChange(text, 'name') }}
                        label='Name'
                        name='name'
                        autoCorrect={true}
                    // value = {value}
                    />

                    <Input
                        placeholder='Surname'
                        //leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                        onChangeText={(text) => { this.handleChange(text, 'surname') }}
                        //onChange = {this.handleChange}
                        label='surname'
                        name='surname'
                    // value = {value}
                    />
                </View>
            </View>
            <View style={{flex:1, alignItems: 'center'}}>
            <TouchableOpacity style={{paddingTop: 10, paddingBottom: 10,paddingLeft:100, paddingRight: 100,  borderRadius: 30, backgroundColor: '#1089ff', alignItems: 'center', justifyContent: 'center', elevation: 5 }}
                onPress={() => { alert(this.state.name + ' ' + this.state.surname) }}
            >
                <Text style={{ color: 'white' }}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingTop: 10, paddingBottom: 10,paddingLeft:100, paddingRight: 100, marginTop: 20 , borderRadius: 30, backgroundColor: '#1089ff' ,elevation: 5}} onPress={() => { this.props.navigation.navigate('Drawer', { userName: this.state.name }) }} >
            <Text style={{ color: 'white' }}>skip</Text>
            </TouchableOpacity>
            </View>

        </View>
        )
    }
}

export default AuthScreen
