import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Separator, Body, Title, Icon } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: 0
        };
    }
    funcCallen = async () => {
        try {
            await AsyncStorage.setItem('toggle', JSON.stringify(0))
            this.setState({ toggle: 0})
        } catch (e) {
            console.log(e)
        }
        console.log('en:', this.state.toggle)
    }
    funcCallch = async () => {
        try {
            await AsyncStorage.setItem('toggle',JSON.stringify(1))
            this.setState({ toggle: 1})
        } catch (e) {
            console.log(e)
        }
        console.log('ch:', this.state.toggle)
    }
    funcCallml = async () => {
        try {
            await AsyncStorage.setItem('toggle', JSON.stringify(2))
            this.setState({ toggle: 2})
        } catch (e) {
            console.log(e)
        }
        console.log('ml:', this.state.toggle)
    }
    render() {
        console.log('toggle:', this.state.toggle)
        return (
            <Container>
                <Header>
                    <Body style={{ marginLeft: 20 }}>
                        <Title >{(this.state.toggle) === 0 ? "Settings" : (this.state.toggle) === 1 ? "设置": "tetapan"}</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={{ flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 20 }}>
                        <Icon name='lock' style={{ color: '#bde814', marginRight: 10 }} />
                        <Text style={{ fontSize: 20, fontWeight: '400', color: '#42a6ed' }}>{(this.state.toggle) === 0 ? "Sign In" : (this.state.toggle) === 1 ? "登入": "log masuk"}</Text>
                    </View>
                    <Separator bordered>
                        <Text style={{ fontSize: 20, fontWeight: '400' }}>Language</Text>
                    </Separator>
                    <TouchableOpacity onPress={() => this.funcCallen()}>
                        <ListItem>
                            <Text>English</Text>
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.funcCallch() }}>
                        <ListItem >
                            <Text>Chinese</Text>
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.funcCallml() }}>
                        <ListItem last>
                            <Text>Bahasa Malaysia</Text>
                        </ListItem>
                    </TouchableOpacity>
                    <Separator bordered>
                    </Separator>
                </Content>
            </Container>
        )
    }
}

export default Settings