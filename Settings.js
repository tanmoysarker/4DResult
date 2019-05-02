import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Separator,Body,Title } from 'native-base'
import { View, Image, StyleSheet, AsyncStorage } from 'react-native';

export class Settings extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body style={{ marginLeft: 20 }}>
            <Title >Settings</Title>
          </Body>
        </Header>
        <Content>
          <View>
            <Text style={{fontSize:20,fontWeight:'800',paddingVertical:20,paddingHorizontal:20}}>Sign In</Text>
          </View>
          <Separator bordered>
            <Text style={{fontSize:20,fontWeight:'800'}}>Language</Text>
          </Separator>
          <ListItem>
            <Text>English</Text>
          </ListItem>
          <ListItem last>
            <Text>Malay</Text>
          </ListItem>
          <Separator bordered>
            <Text style={{fontSize:20,fontWeight:'800'}}>Voice</Text>
          </Separator>
          <ListItem>
            <Text>English</Text>
          </ListItem>
          <ListItem last>
            <Text>Malay</Text>
          </ListItem>
          <Separator bordered>
            <Text style={{fontSize:20,fontWeight:'800'}}>Others</Text>
          </Separator>
          <ListItem>
            <Text>English</Text>
          </ListItem>
          <ListItem last>
            <Text>Malay</Text>
          </ListItem>
        </Content>
      </Container>
    )
  }
}

export default Settings
