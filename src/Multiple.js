import React, { Component } from 'react'
import { Tab, Tabs, Container, Content, Header, Title, Button, Left, Right, Body, Icon, Card, Footer, FooterTab, Badge, TabHeading } from 'native-base';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import BKW from './MutiplePages/BKW'
import MPT from './MutiplePages/MPT'
import S from './MutiplePages/S'
import FiveD6D from './MutiplePages/FiveD6D'
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from "react-navigation";

export class Multiple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead1: ['1ST Prize'],
      tableData1: [
        ['----']
      ],
      tableHead2: ['2ND Prize'],
      tableData2: [
        ['----']
      ],
      tableHead3: ['3RD Prize'],
      tableData3: [
        ['----']
      ],
      tableHead4: ['Special'],
      tableData4: [
        ['----']
      ],
      tableHead5: ['Consolation'],
      tableData5: [
        ['----']
      ],
      toggle: 0
    }
    
    this.changeLang()
  }
  componentWillMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      // The screen is focused
    });
  }
   async changeLang () {
    try {
      const value = await AsyncStorage.getItem('toggle')
       this.setState({ toggle: JSON.parse(value) })
    } catch(e) {
      // error reading value
    }
  }

  render() {
    const state = this.state;
    return (
      <Container>
        <Header>
          <Body style={{ marginLeft: 20 }}>
            <Title>{(this.state.toggle) === 0 ? "Multiple" : (this.state.toggle) === 1 ? "多" : "Pelbagai"}</Title>
          </Body>
        </Header>
        <Content>
          <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 2, backgroundColor: 'blue' }}>
            <Tab heading="99" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <MPT />
            </Tab>
            <Tab heading="MPT" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <BKW />
            </Tab>
            <Tab heading="BKW" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <S />
            </Tab>
            <Tab heading="SG" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <FiveD6D />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    )
  }
}


export default withNavigation(Multiple)

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, alignSelf: 'center' },
  imageStyle: {
    width: 40, height: 40
  },
  textStyle: {
    color: '#fff', paddingTop: 10
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,

  },
});