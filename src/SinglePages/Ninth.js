import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import { DatePicker,Container,Content, Header, Title, Button, Left, Right, Body, Icon,Card,Footer, FooterTab,Badge } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from "react-navigation";
class Ninth extends Component{
  constructor(props) {
    super(props);
    this.state = {
      first:'',
      second:'',
      third:'',
      date:'',
      draw:'',
      tableHead2: ['Special'],
      tableHead4: ['特別獎'],
      tableHead3: ['Consolidation'],
      tableHead5: ['安慰獎'],
      tableData1: [],
      tableData2: [],
      tableData3:[],
      chosenDate: new Date(),
      toggle: false
    }
  }

  async componentDidMount(){
    await fetch('https://fourdresult.herokuapp.com/cashSweep',{
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
   setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  componentWillMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      // The screen is focused
       this.changeLang()
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
      <Container style={{backgroundColor:'#fff'}}>
        <Content>
          <View>
            <Card style={{backgroundColor:'#CFD7DC',height:100,paddingTop:10}}>
            <View style={{flexDirection:'row',paddingHorizontal:10}}>
            <Left style={{flexDirection:'row'}}><Text style={{color:'#000',fontSize:16 }}>{this.state.draw}</Text></Left>
            <Body><Text style={{color:'#000',fontSize:20,fontWeight:"bold" }}>{this.state.toggle ?"砂勞越大萬"  : "Cash Sweep"}</Text></Body>  
            <Right><Image source={require('../assets/cashsweep.png')}style={{width:40,height:40}}
        /></Right>
            </View>
            <View style={{paddingVertical:10,flexDirection:'row',justifyContent:'space-evenly'}}>
            <Left style={{flexDirection:'row',paddingLeft:10}}>
              <Icon name='calendar' style={{ color: '#000', fontSize: 20, paddingTop: 10 }} />
              <DatePicker
                defaultDate={this.state.date}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText={this.state.date}
                textStyle={{ color: "#000", fontSize: 18, paddingRight: 5 }}
                placeHolderTextStyle={{ color: "#000", fontSize: 18, paddingRight: 5 }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Left>
            <Body></Body>
            <Right style={{flexDirection:'row',justifyContent:'flex-end',paddingRight:10}}><Icon name='refresh'style={{color:'#000',fontSize:24,marginRight:15}}/></Right>
              
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
            <Row data={this.state.toggle ? (this.state.tableHead4) : (this.state.tableHead2)} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData2} textStyle={styles.text2}/>
        </Table>
        </View>
        <View style={{backgroundColor:'#fff'}}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#000'}}>
            <Row data={this.state.toggle ? (this.state.tableHead5) : (this.state.tableHead3)} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData3} textStyle={styles.text2}/>
        </Table>
        </View>
        <View style={{paddingVertical:20}}>
        <Button style={{width:'100%',backgroundColor:'#CFD7DC',alignItems:'center',justifyContent:'center'}}><Text style={{color:'#000',fontSize:20,fontWeight:"bold" }}>{this.state.toggle ? "分享" : "Share"}</Text></Button>
        </View>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(Ninth)

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
  text: { margin: 6,color:'#000',alignSelf:'center',fontSize:18,fontWeight:"bold"   },
  text2:{alignSelf:'center',color:'#000',fontSize:18,fontWeight:'bold' },
  head: { height: 40, backgroundColor: '#CFD7DC' },

});
