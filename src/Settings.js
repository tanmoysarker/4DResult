import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Separator, Body, Title, Icon } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }
    funcCallen = async () => {
        try {
            await AsyncStorage.setItem('toggle', JSON.stringify(false))
            this.setState({ toggle: false})
        } catch (e) {
            console.log(e)
        }
        console.log('en:', this.state.toggle)
    }
    funcCallch = async () => {
        try {
            await AsyncStorage.setItem('toggle', JSON.stringify(true))
            this.setState({ toggle: true})
        } catch (e) {
            console.log(e)
        }
        console.log('ch:', this.state.toggle)
    }
    render() {

        return (
            <Container>
                <Header>
                    <Body style={{ marginLeft: 20 }}>
                        <Title >Settings</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={{ flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 20 }}>
                        <Icon name='lock' style={{ color: '#bde814', marginRight: 10 }} />
                        <Text style={{ fontSize: 20, fontWeight: '400', color: '#42a6ed' }}>{this.state.toggle ? "登入" : "Sign In"}</Text>
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
                        <ListItem last>
                            <Text>Chinese</Text>
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