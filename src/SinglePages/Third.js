import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,AsyncStorage} from 'react-native';
import { Container,Content, Header, Title, Button, Left, Right, Body, Icon,Card,Footer, FooterTab,Badge } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';

export default class Third extends Component{
  constructor(props) {
    super(props);
    this.state = {
      first:'',
      second:'',
      third:'',
      date:'',
      draw:'',
      tableHead2: ['Special'],
      tableHead3: ['Consolidation'],
      tableData1: [],
      tableData2: [],
      tableData3:[],
    }
  }

  async componentDidMount(){
   await fetch('https://fourdresult.herokuapp.com/magnum',{
      method : 'GET',
    })
    .then((response) => response.json())
    .then((response) => {
      const first = response.magnum
      this.setState({ tableData1: first })
      const second = response.special
      this.setState({ tableData2: second })
      const third = response.consolation
      this.setState({ tableData3: third })
      const date = response.date
      this.setState({date: date})
      const draw = response.draw
      this.setState({draw: draw})
      
  })
  
  }
  render() {
    const state = this.state;
    return (
      <Container style={{backgroundColor:'#f4dc41'}}>
        <Content>
          <View>
            <Card style={{backgroundColor:'#000',height:100,paddingTop:10}}>
            <View style={{flexDirection:'row',paddingHorizontal:10}}>
            <Left style={{flexDirection:'row'}}><Text style={{color:'#fff'}}>{this.state.draw}</Text></Left>
            <Body><Text style={{color:'#fff'}}>Magnum</Text></Body>  
            <Right><Image source={require('../assets/magnum.jpg')}style={{width:40,height:40}}
        /></Right>
            </View>
            <View style={{paddingVertical:10,flexDirection:'row',justifyContent:'space-evenly'}}>
            <Left style={{flexDirection:'row',paddingLeft:10}}><Icon name='calendar'style={{color:'#fff',fontSize:20}}/><Text style={{color:'#fff',marginLeft:5,fontSize:18}}>{this.state.date}</Text></Left>
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
