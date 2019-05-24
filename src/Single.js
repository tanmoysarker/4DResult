import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import { Tab, Tabs,TabHeading,Container,Content, Header, Title, Button, Left, Right, Body, Icon,Card,Footer, FooterTab,Badge } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';
import First from './SinglePages/First'
import Second from './SinglePages/Second'
import Third from './SinglePages/Third'
import Fourth from './SinglePages/Fourth'
import Fifth from './SinglePages/Fifth'
import Sixth from './SinglePages/Sixth'
import Seventh from './SinglePages/Seventh'
import Eighth from './SinglePages/Eighth'
import Ninth from './SinglePages/Ninth'
import Tenth from './SinglePages/Tenth'

export default class Single extends Component{

 
  render() {
    const state = this.state;
    return (
      <Container style={{backgroundColor:'#f4dc41'}}>
        <Content>
        <Header>
            <Body style={{marginLeft:20}}>
              <Title>Single</Title>
            </Body>
          </Header>
          
          <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 2, backgroundColor: 'blue' }}>
            <Tab heading={<TabHeading style={{backgroundColor:'#fff'}}><Image source={require('./assets/993.png')}style={{alignItems:'center',justifyContent:'center',width:30,height:30,borderRadius:10}}
          /></TabHeading>} tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <First />
            </Tab>
            <Tab heading={<TabHeading style={{backgroundColor:'#fff'}}><Image source={require('./assets/993.png')}style={{alignItems:'center',justifyContent:'center',width:30,height:30,borderRadius:10}}
          /></TabHeading>} tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <Second />
            </Tab>
            <Tab heading={<TabHeading style={{backgroundColor:'#fff'}}><Image source={require('./assets/logo3.png')}style={styles.button1}
          /></TabHeading>} tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <Third />
            </Tab>
            <Tab heading={<TabHeading style={{backgroundColor:'#fff'}}><Image source={require('./assets/logo4.jpg')}style={styles.button1}
          /></TabHeading>} tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <Fourth />
            </Tab>
            <Tab heading={<TabHeading style={{backgroundColor:'#fff'}}><Image source={require('./assets/logo1.jpg')}style={styles.button1}
          /></TabHeading>} tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <Fifth />
            </Tab>
            <Tab heading={<TabHeading style={{backgroundColor:'#fff'}}><Image source={require('./assets/logo2.jpg')}style={styles.button1}
          /></TabHeading>} tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <Sixth />
            </Tab>
            <Tab heading={<TabHeading style={{backgroundColor:'#fff'}}><Image source={require('./assets/logo3.png')}style={styles.button1}
          /></TabHeading>} tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <Seventh />
            </Tab>
            <Tab heading={<TabHeading style={{backgroundColor:'#fff'}}><Image source={require('./assets/logo4.jpg')}style={styles.button1}
          /></TabHeading>} tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <Eighth />
            </Tab>
            <Tab heading={<TabHeading style={{backgroundColor:'#fff'}}><Image source={require('./assets/logo1.jpg')}style={styles.button1}
          /></TabHeading>} tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <Ninth />
            </Tab>
            <Tab heading={<TabHeading style={{backgroundColor:'#fff'}}><Image source={require('./assets/logo4.jpg')}style={styles.button1}
          /></TabHeading>} tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <Tenth />
            </Tab>
          </Tabs>
          
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  viewers: {
    flexDirection:'row',
    paddingVertical:10,
    justifyContent:'space-between'
  },
  button1:{
    alignItems:'center',
    justifyContent:'center',
    width:30,
    height:30,
    
  },
  text: { margin: 6,color:'#fff',alignSelf:'center' },
  text2:{alignSelf:'center',color:'#000'},
  head: { height: 40, backgroundColor: '#000' },

});
