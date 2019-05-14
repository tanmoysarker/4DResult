import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,AsyncStorage} from 'react-native';
import { Container,Content, Header, Title, Button, Left, Right, Body, Icon,Card,Footer, FooterTab,Badge } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';

export default class First extends Component{
  constructor(props) {
    super(props);
    this.state = {
      first:'',
      second:'',
      third:'',
      fourth:[],
      fifth:[],
      sixth:[],
      tableHead2: ['Special'],
      tableHead3: ['Consolidation'],
      tableData1: [
        ['1ST Prize', '1000'],
        ['2ND Prize', '500'],
        ['3RD Prize', '300']
      ],
      tableData2: [
        fourth,
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

  async componentDidMount(){
   await fetch('https://fourdresult.herokuapp.com/magnum',{
      method : 'GET',
    })
    .then((response) => response.json())
    .then((response) => {
      const first = response.message[0][0]
      const second = response.message[0][1]
      const third = response.message[0][2]
      console.log(first,second,third)

      const fourth = response.message[1].slice(0,5)
      const fifth = response.message[1].slice(5,10)
      const sixth = response.message[1].slice(10,13)
      console.log(fourth,fifth,sixth)  

      this.setState ({fourth:fourth})
      this.setState ({fifth: fifth })
      this.setState ({sixth: sixth })
  })
  // console.log(fourth,fifth,sixth)
  }
  render() {
    const state = this.state;
    return (
      <Container style={{backgroundColor:'#f4dc41'}}>
        <Content>
          <View>
            <Card style={{backgroundColor:'#000',height:100,paddingTop:10}}>
            <View style={{flexDirection:'row',paddingHorizontal:10}}>
            <Left></Left>
            <Body><Text style={{color:'#fff'}}>Magnum</Text></Body>  
            <Right><Image source={require('../assets/logo4.jpg')}style={{width:40,height:40}}
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
