import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import { Container,Content, Header, Title, Button, Left, Right, Body, Icon,Card,Footer, FooterTab,Badge } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';
import First from './SinglePages/First'
import Second from './SinglePages/Second'
import Third from './SinglePages/Third'
import Fourth from './SinglePages/Fourth'
import Fifth from './SinglePages/Fifth'
import Sixth from './SinglePages/Sixth'
import Seventh from './SinglePages/Seventh'
import Eigth from './SinglePages/Eighth'
import Ninth from './SinglePages/Ninth'
import Tenth from './SinglePages/Tenth'

export default class Single extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tableHead2: ['Special'],
      tableHead3: ['Consolidation'],
      tableData1: [
        ['1ST Prize', '1000'],
        ['2ND Prize', '500'],
        ['3RD Prize', '300']
      ],
      tableData2: [
        ['53153', '1000','----','5555','51616'],
        ['31355', '500','----','5555','51616'],
        ['51456', '300','----','5555','51616']
      ],
      tableData3: [
        ['53153', '1000','----','5555','51616'],
        ['31355', '500','----','5555','51616'],
        ['51456', '300','----','5555','51616']
      ],
    }
  }

  bgColorChange(){

  }
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
          <Footer style={{height:50,paddingHorizontal:10,backgroundColor:'#fff'}}>
          <FooterTab style={{paddingVertical:10,backgroundColor:'#fff'}}>
          <Image source={require('./assets/logo1.jpg')}style={styles.button1}
        />
         <Image source={require('./assets/logo1.jpg')}style={styles.button1}
        />
            <Image source={require('./assets/logo2.jpg')}style={styles.button1}
        />
            <Image source={require('./assets/logo3.png')}style={styles.button1}
        />
            <Image source={require('./assets/logo4.jpg')}style={styles.button1}
        />
            <Image source={require('./assets/logo1.jpg')}style={styles.button1}
        />
            <Image source={require('./assets/logo2.jpg')}style={styles.button1}
        />
            <Image source={require('./assets/logo3.png')}style={styles.button1}
        />
         <Image source={require('./assets/logo4.jpg')}style={styles.button1}
        />
          </FooterTab>
          </Footer>
          {/* <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 2, backgroundColor: 'blue' }}>
          <Tab heading="MPT" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
            <MPT />
          </Tab>
          <Tab heading="BKW" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
            <BKW />
          </Tab>
          <Tab heading="S" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
            <S />
          </Tab>
          <Tab heading="5D6D" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
            <FiveD6D />
          </Tab>
        </Tabs> */}
          <View>
            <Card style={{backgroundColor:'#000',height:100,paddingTop:10}}>
            <View style={{flexDirection:'row',paddingHorizontal:10}}>
            <Left></Left>
            <Body><Text style={{color:'#fff'}}>Magnum</Text></Body>  
            <Right><Image source={require('./assets/logo4.jpg')}style={{width:40,height:40}}
        /></Right>
            </View>
            <View style={{paddingVertical:10,flexDirection:'row'}}>
            <Left style={{flexDirection:'row',paddingLeft:10}}><Icon name='calendar'style={{color:'#fff',fontSize:20}}/><Text style={{color:'#fff',fontSize:18,marginLeft:5}}>15/09/2019</Text></Left>
            <Body></Body>
            <Right style={{flexDirection:'row',justifyContent:'flex-end',paddingRight:10}}><Icon name='megaphone'style={{color:'#fff',fontSize:20}}/><Icon name='refresh'style={{color:'#fff',fontSize:20,marginLeft:10}}/></Right>
              
              </View>
            </Card>
            </View>
            <View style={{backgroundColor:'#fff'}}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#000'}}>
          <Rows data={state.tableData1} textStyle={styles.text2}/>
        </Table>
        </View>
        <View style={{backgroundColor:'#fff'}}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#000'}}>
            <Row data={state.tableHead2} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData2} textStyle={styles.text2}/>
        </Table>
        </View>
        <View style={{backgroundColor:'#fff'}}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#000'}}>
            <Row data={state.tableHead3} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData3} textStyle={styles.text2}/>
        </Table>
        </View>
        <View style={{paddingVertical:20}}>
        <Button style={{width:'100%',backgroundColor:'#000',alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:18,color:'#fff'}}>Share</Text></Button>
        </View>
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