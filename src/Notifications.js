import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Separator,Body,Title} from 'native-base'
import { View, Image, StyleSheet, AsyncStorage } from 'react-native';

export class Notifications extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body style={{ marginLeft: 20 }}>
            <Title>Notifications</Title>
          </Body>
        </Header>
        <Content>
          <View>
            <Text>Notifications</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

export default Notifications
