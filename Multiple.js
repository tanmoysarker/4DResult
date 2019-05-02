import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Separator, Body, Title, Button, Left, Right, Icon, Card } from 'native-base'
import { View, Image, StyleSheet, AsyncStorage } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export class Multiple extends Component {
  
  render() {
    const state = this.state;
    return (
      <Container>
        <Header>
          <Body style={{ marginLeft: 20 }}>
            <Title>Multiple</Title>
          </Body>
        </Header>
        <Content>
          <View>
            <Text>Multiple</Text>
          </View>
          
        </Content>
      </Container>
    )
  }
}

export default Multiple
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});