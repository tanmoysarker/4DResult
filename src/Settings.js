import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Separator,Body,Title,Icon } from 'native-base'
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
          <View style={{flexDirection:'row',paddingVertical:20,paddingHorizontal:20}}>
          <Icon name='lock' style={{color:'#bde814',marginRight:10}}/>
            <Text style={{fontSize:20,fontWeight:'400',color:'#42a6ed'}}>Sign In</Text>
          </View>
          <Separator bordered>
            <Text style={{fontSize:20,fontWeight:'400'}}>Language</Text>
          </Separator>
          <ListItem>
            <Text>English</Text>
          </ListItem>
          <ListItem last>
            <Text>Chinese</Text>
          </ListItem>
          <Separator bordered>
            <Text style={{fontSize:20,fontWeight:'400'}}>Voice</Text>
          </Separator>
          <ListItem>
            <Text>English</Text>
          </ListItem>
          <ListItem last>
            <Text>Chinese</Text>
          </ListItem>
          <Separator bordered>
            <Text style={{fontSize:20,fontWeight:'400'}}>Others</Text>
          </Separator>
          <ListItem>
            <Text>English</Text>
          </ListItem>
          <ListItem last>
            <Text>Chinese</Text>
          </ListItem>
        </Content>
      </Container>
    )
  }
}

export default Settings
